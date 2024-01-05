import * as plutus from '../plutus'

export type InvoiceBody = plutus.TypesInvoice['_r']
export const InvoiceBody = plutus.TypesInvoice["_r"]
export type Invoice = { hash: string; cbor: string }

export type Output = plutus.TypesOutput["_r"]
export const Output = plutus.TypesOutput['_r']

export type Value = plutus.TypesValue["_r"]
export const Value = plutus.TypesValue['_r']