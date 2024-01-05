import { Data } from 'translucent-cardano'
import { Invoice, InvoiceBody } from './types'
import { decodeAddress, decodeAssets } from './invoice'

export function render(invoice: Invoice) {
  const body = Data.from(invoice.cbor, InvoiceBody)
  const recipient = decodeAddress(1, body.output.address)
  const datum = body.output.datum == 'NoDatum' ? 'NoDatum' : 'BadDatum'
  const value = decodeAssets(body.output.value)
  let renderedValue = ""
  for (const item in value) {
    renderedValue += "|     "
    renderedValue += `${item}: ${value[item]}\n`
  }
  renderedValue = renderedValue.slice(0, -1)
  // Render should include:
  // invoice.hash
  // body.version
  // body.salt
  // "No Metadata"
  // recipient, datum, value
  const border = '----------------------------------------------------------------------------------------------------------------------------'
  return `${border}
| Invoice Hash:
|     ${invoice.hash}
| Metadata: V${body.version} "No Metadata"
| Recipient:
|     ${recipient}
| Datum: ${datum}
| Value:
${renderedValue}
${border}`
}
