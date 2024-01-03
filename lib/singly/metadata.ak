// metadata is explicitly NOT VALIDATED!
// this repo just specifies some useful metadata standards

// invoice metadata is optionally specified and largely meaningless.
// we can extend the protocol arbitrarily with infinite metadata variants
pub type Invoice1 {
    recipient: Recipient
}

pub type Recipient {
    Unspecified
    Organisation{identifier: ByteArray}
    Person{names: List<ByteArray>}
}