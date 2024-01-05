use aiken/transaction.{Output}
use aiken/transaction/value.{Value}
use singly/invoice.{Invoice}

validator {
  fn invoice(_r: Invoice, _) {
    False
  }
}

validator {
  fn output(_r: Output, _) {
    False
  }
}

validator {
  fn value(_r: Value, _) {
    False
  }
}
