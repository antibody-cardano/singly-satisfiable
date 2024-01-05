// some very readable aiken code
use aiken/builtin
use aiken/dict
use aiken/list
use aiken/transaction.{
  InlineDatum, Input, Mint, Output, OutputReference, ScriptContext, Spend,
  Transaction,
}
use aiken/transaction/credential.{Address, ScriptCredential}
use aiken/transaction/value
use singly/invoice.{Invoice}

type Datum {
  string: ByteArray,
  pointer: ByteArray,
}

type Redeemer {
  Insert {
    onto: ByteArray,
    insert: ByteArray,
    output_idx: Int,
    invoice: Invoice,
    pointer: ByteArray,
  }
  New
}

fn valid_listitem(
  output: Output,
  own_pol: ByteArray,
  string: ByteArray,
  pointer: ByteArray,
) {
  let Output { datum, address, value, reference_script } = output
  expect [_, (lock_p, lockdict)] = value |> value.to_dict |> dict.to_list
  expect [(locked_token_name, 1)] = lockdict |> dict.to_list
  let new_datum_raw: Data = Datum { string, pointer }
  let new_datum = InlineDatum(new_datum_raw)
  and {
    datum == new_datum,
    address == Address(ScriptCredential(own_pol), None),
    lock_p == own_pol,
    locked_token_name == "",
    builtin.less_than_bytearray(string, pointer),
    reference_script == None,
  }
}

validator(genesis_utxo: OutputReference) {
  fn spend(_, __, c: ScriptContext) {
    expect ScriptContext {
      transaction: Transaction { inputs, redeemers, .. },
      purpose: Spend(own_ref),
    } = c
    expect Some(Input {
      output: Output { address: Address(ScriptCredential(own_pol), ..), .. },
      ..
    }) = inputs |> list.find(fn(inp) { inp.output_reference == own_ref })
    dict.has_key(redeemers, Mint(own_pol))
  }

  fn mint(r: Redeemer, ctx: ScriptContext) {
    expect ScriptContext {
      transaction: Transaction { inputs, mint, outputs, .. },
      purpose: Mint(own_pol),
    } = ctx
    when r is {
      Insert { onto, insert, invoice, output_idx, pointer } -> {
        expect [(lock_tkn, 1)] =
          mint
            |> value.from_minted_value
            |> value.tokens(own_pol)
            |> dict.to_list
        expect [mint_input] =
          inputs
            |> list.filter(
                 fn(inp) {
                   inp.output.address == Address(
                     ScriptCredential(own_pol),
                     None,
                   )
                 },
               )
        expect [continuing_output, new_output, ..] = outputs
        expect Some(verifying_output) = outputs |> list.at(output_idx)
        and {
          valid_listitem(mint_input.output, own_pol, onto, pointer),
          valid_listitem(continuing_output, own_pol, onto, insert),
          valid_listitem(new_output, own_pol, insert, pointer),
          invoice.verify(insert, invoice, verifying_output),
          lock_tkn == "",
        }
      }
      New -> list.any(inputs, fn(inp) { inp.output_reference == genesis_utxo })
    }
  }
}
