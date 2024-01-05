// import { Invoice, InvoiceBody, Output } from './types'
import { Data, C, Assets, fromHex, toHex } from 'translucent-cardano'
import * as plutus from '../plutus'
import { Invoice, Output, Value } from './types'
import { blake2b } from '@noble/hashes/blake2b'

const coinsPerUTxOByte = 4310n

export function randomBytes() {
  const randomHex = Array.from({ length: 64 }, () =>
    Math.floor(Math.random() * 16).toString(16),
  ).join('')
  return randomHex
}

export function encodeCredential(
  cred: C.StakeCredential,
): Output['address']['paymentCredential'] {
  if (cred.kind() == 0) {
    return {
      VerificationKeyCredential: [cred.to_keyhash()!.to_hex()],
    }
  } else {
    return {
      ScriptCredential: [cred.to_scripthash()!.to_hex()],
    }
  }
}

export function encodeAddress(
  address: string,
): Output['address'] {
  const addr = C.Address.from_bech32(address)
  const pCred = addr.payment_cred()
  const sCred = addr.staking_cred()
  return {
    paymentCredential: encodeCredential(pCred!),
    stakeCredential: sCred ? { Inline: [encodeCredential(sCred)] } : null,
  }
}

export function decodeCredential(
  cred: Output['address']['paymentCredential'],
): C.StakeCredential {
  if ('VerificationKeyCredential' in cred) {
    return C.StakeCredential.from_keyhash(C.Ed25519KeyHash.from_hex(cred.VerificationKeyCredential[0]))
  } else {
    return C.StakeCredential.from_scripthash(C.ScriptHash.from_hex(cred.ScriptCredential[0]))
  }
}

export function decodeAddress(
  network: number,
  address: Output['address'],
): string {
  return C.BaseAddress.new(network, decodeCredential(address.paymentCredential), decodeCredential(address.stakeCredential!.Inline![0])).to_address().to_bech32()
}

export function encodeAssets(assets: Assets): Value {
  const map: Map<string, Map<string, bigint>> = new Map([
    ['', new Map([['', 0n]])],
  ])
  for (const asset of Object.keys(assets)) {
    if (asset === 'lovelace') {
      const lovelaceMap = new Map()
      lovelaceMap.set('', assets['lovelace'])
      map.set('', lovelaceMap)
    } else {
      let policyMap: Map<string, bigint>
      const policy = asset.slice(0, 56)
      if (map.has(policy)) {
        policyMap = map.get(policy)!
      } else {
        policyMap = new Map()
        map.set(policy, policyMap)
      }
      const assetName = asset.slice(56)
      policyMap.set(assetName, assets[asset])
    }
  }
  return map
}

export function decodeAssets(map: Value): Assets{
  const assets: Assets = {}
  for (const [policy, policyMap] of map) {
    for (const [assetName, quantity] of policyMap) {
      if (policy === '') {
        assets['lovelace'] = quantity
      } else {
        const asset = policy + assetName
        assets[asset] = quantity
      }
    }
  }
  return assets
}

export function adjustMinAda(
  output: Output,
): Output {
  while (true) {
    const stringy = Data.to(output, Output)
    const targetAda = (160n + BigInt(stringy.length / 2)) * coinsPerUTxOByte
    if (output.value.get('')!.get('')! < targetAda) {
      output.value.get('')!.set('', targetAda)
    } else {
      break
    }
  }
  return output
}

export function generateInvoice(address: string, amount: Assets): Invoice {
  const output: plutus.TypesInvoice['_r']['output'] = adjustMinAda({
    address: encodeAddress(address),
    value: encodeAssets(amount),
    datum: 'NoDatum',
    referenceScript: null,
  })
  const body: plutus.TypesInvoice['_r'] = {
    version: 1n,
    salt: randomBytes(),
    metadataIdx: 0n,
    metadata: Data.void(),
    output,
  }
  const cbor = Data.to(body, plutus.TypesInvoice['_r'])
  return { hash: Buffer.from(blake2b(fromHex(cbor), { dkLen: 32 })).toString('hex'), cbor }
}
