use aiken/builtin
use aiken/transaction.{NoDatum, Output}
use aiken/transaction/credential.{Address, Inline, VerificationKeyCredential}
use aiken/transaction/value

// this structure is hashed for the invoice id
// use random salts to guarantee no duplicates
pub type Invoice {
  version: Int,
  salt: ByteArray,
  metadata_idx: Int,
  metadata: Data,
  output: Output,
}

pub fn verify(hash: ByteArray, invoice: Invoice, output: Output) -> Bool {
  let Invoice { version, output: invoice_output, .. } = invoice
  and {
    version == 1,
    builtin.blake2b_256(builtin.serialise_data(invoice)) == hash,
    invoice_output == output,
  }
}

test hash_test() {
  let invoice =
    Invoice {
      version: 1,
      salt: #"a0f729717016f2f593ee3a420088c9349bad931d253047127cf7a8151502ed68",
      metadata_idx: 0,
      metadata: #"d87980",
      output: Output(
        Address(
          VerificationKeyCredential(
            #"6d9ac8fc0f4934a121f3a2a9042c32013a04858cf2171e5444a3a827",
          ),
          Some(
            Inline(
              VerificationKeyCredential(
                #"6fc43ea93389cba1d13885048f9e4193925665a6bb082e601aa68358",
              ),
            ),
          ),
        ),
        value.add(
          value.from_lovelace(1293000),
          #"f66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b69880",
          #"69555344",
          100000000,
        ),
        NoDatum,
        None,
      ),
    }
  builtin.blake2b_256(builtin.serialise_data(invoice)) == #"262ff68fc1fa4fbffa5e1e76105aceb8aa89bcee1b7cbb2b746df8051ba6ba3c"
}
