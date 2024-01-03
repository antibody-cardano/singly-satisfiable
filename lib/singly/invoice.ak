use aiken/builtin
use aiken/transaction.{Output}

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
