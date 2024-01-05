import { Data, fromHex } from 'translucent-cardano'
import * as plutus from '../plutus.ts'
import {
  adjustMinAda,
  encodeAddress,
  encodeAssets,
  generateInvoice,
} from '../src/invoice'
import { blake2b } from '@noble/hashes/blake2b'

const USDAsset =
  'f66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b6988069555344'

// minada test
const output = adjustMinAda({
  address: encodeAddress(
    'addr_test1qpke4j8upaynfgfp7w32jppvxgqn5py93nepw8j5gj36sfm0csl2jvufewsazwy9qj8eusvnjftxtf4mpqhxqx4xsdvqjqh409',
  ),
  value: encodeAssets({ ['lovelace']: 1n }),
  datum: 'NoDatum',
  referenceScript: null,
})
console.log("Calculated minimum ada: ", output.value.get('')!.get(''))

const invoice = generateInvoice(
  'addr_test1qpke4j8upaynfgfp7w32jppvxgqn5py93nepw8j5gj36sfm0csl2jvufewsazwy9qj8eusvnjftxtf4mpqhxqx4xsdvqjqh409',
  {
    [USDAsset]: BigInt(100 * Math.pow(10, 6)),
  },
)

console.log("Generated invoice: ", invoice)
