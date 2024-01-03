import { applyParamsToScript, Data, Validator } from 'translucent-cardano'

export interface InvoiceSpend {
  new (genesisUtxo: {
    transactionId: { hash: string }
    outputIndex: bigint
  }): Validator
  _: Data
  __: { wrapper: Data }
}

export const InvoiceSpend = (Object.assign(
  function (genesisUtxo: {
    transactionId: { hash: string }
    outputIndex: bigint
  }) {
    return {
      type: 'PlutusV2',
      script: applyParamsToScript(
        '59081f01000032323232323232323222253330063370e900018028008992999803991919191919191919191919299980999b8748000c0480244c8c8c8c94ccc05ccdc3a40000042646600200201844a66603800229404c8c94ccc06ccdd79802980c80100c0a511330040040013020002301e0011323232323232323232323232533302630290021323253330253370e9001000899191929998159817001099191919299981619b8748000c0ac0044c8c8c94ccc0bccccc004c028c0b402006c05c03c54ccc0bccccc00401c06c05c05454ccc0bccccc00401406c05403c54ccc0bcc8c8c8c8c8c8c94ccc0d8cdc3803240042a66606c66e3cdca1bb301801c13375e0020122940528181d000981d000981c800981c000981b8011bad3035001302d01113371e01891010014a029405280a50222232323232323232323232533303f30420021323232533304230450021323253330413370e900100089919299982199baf00c001153330433375e02066e952000330473374a9001198239ba90144bd7019823a60103d87a80004bd700a99982199b8f007014153330433371e0089101001533304333720026024266ebc029300103d87a800014a029405280a5014a066e952004330460014bd7019ba548000cc114dd4808998229ba90104bd700b1bad3042002375c60800022c60860026eacc0fc008dd7181e8008b18200009820002981f000981f001181e000981e0011bab303a001303a002303800130300043032001302a0011633323001001222533303100214c0103d87a80001323253330303370e0069000099ba548000cc0d00092f5c0266600a00a00266e0400d20023035003303300201c00f302f001302f01a302d01916302c001323300100101b22533302b00114bd7009919299981519baf30143028300530280023374a90001981719ba548008cc0b8dd480b25eb80cc0b9300103d87a80004bd7009981700119802002000899802002000981780118168009181598160008b1bad3026002375c60480022c604e002646464a66604866e1d200200114bd6f7b63009bab302930220023022001323300100100222533302700114c103d87a800013232323253330283371e028004266e9520003302c374c00297ae0133006006003375660520066eb8c09c008c0ac008c0a4004c8cc004004040894ccc09800452f5bded8c0264646464a66604e66e3d22100002100313302b337606ea4008dd3000998030030019bab3028003375c604c004605400460500026eb8c094004c094008c08c004c08c008dd6981080098108011bae301f001301f002375c603a002602a0264603800260280226eb8c064004c04402458dd5980b800980b800980b0011bac301400130140013013002375860220026012006601e002601e004601a002600a00429309b2b191919299980499b874800000454ccc030c01c01452616153330093370e9001000899191919191919191919299980b180c80109924c64a66602866e1d200000113232323232323232323253330213024002132498c94ccc07ccdc3a400000226464646464646464a666054605a0042646464649319299981599b87480000044c8c94ccc0c0c0cc00852616375c6062002605200a2a66605666e1d20020011533302e302900514985858c0a4010c94ccc0a8cdc3a40000022a66605a605000c2930b0a99981519b87480080044c8c94ccc0bcc0c800852616375c6060002605000c2a66605466e1d200400113232533302f3032002149858c0c0004c0a001858c0a0014cc0840188c8c8cc0900048c8dd698178011bae302d001375660580046eb8c0a8004c94ccc0a0cdc3a4000002264646464a66605e6064004264649319299981719b87480000044c8c94ccc0ccc0d80084c9263253330313370e900000089919299981b181c80109924c605a0022c606e002605e0042a66606266e1d20020011323232323232533303a303d002149858dd6981d800981d8011bad30390013039002375a606e002605e0042c605e0022c606800260580062a66605c66e1d200200115333031302c00314985858c0b0008c09800c58c0c0004c0c0008c0b8004c09802058c09801c58c0ac004c0ac008c0a4004c0a4008dd5981380098138011812800980e8010b180e8008b18110009811001181000098100011bad301e001301e002375c603800260380046eb4c068004c04801058c04800c58dd7180b800980b801180a800980a8011bad30130013013002375c602200260220046eb8c03c004c01c01458c01c01088c8cc00400400c894ccc0380045261323300300330120023003301000123253330083370e900000089919299980698080010a4c2c6eb8c038004c01800854ccc020cdc3a400400226464a66601a60200042930b1bae300e0013006002163006001132253330083232323232323232323232323232323253330183370e9001180b8068991919299980d99b8748000c0680044c8c8c8c8c8c8c8c8c94ccc090cdc3a400460460022646464646600200202244a66605800229404c8c8c94ccc0b0cdd78030008a51133005005002302c0023030002302e0013374a9000198151ba90014bd701bae302a001302200116302800130200013026001301e00130240013024001301b0013021001301900116323300100100e22533301f00114c0103d87a800013232533301e3375e6046603800400a266e952000330220024bd7009980200200098118011810800980f000980b0068b1bab301c001301c001301b001301a00130190013018001301700130160013015001301400237586024002601400660200026020004601c002600c00229309b2b18059802000918029baa001230033754002ae6955ceaab9e5573eae815d0aba201',
        [genesisUtxo],
        {
          dataType: 'list',
          items: [
            {
              title: 'OutputReference',
              description:
                'An `OutputReference` is a unique reference to an output on-chain. The `output_index`\n corresponds to the position in the output list of the transaction (identified by its id)\n that produced that output',
              anyOf: [
                {
                  title: 'OutputReference',
                  dataType: 'constructor',
                  index: 0,
                  fields: [
                    {
                      title: 'transactionId',
                      description:
                        "A unique transaction identifier, as the hash of a transaction body. Note that the transaction id\n isn't a direct hash of the `Transaction` as visible on-chain. Rather, they correspond to hash\n digests of transaction body as they are serialized on the network.",
                      anyOf: [
                        {
                          title: 'TransactionId',
                          dataType: 'constructor',
                          index: 0,
                          fields: [{ dataType: 'bytes', title: 'hash' }],
                        },
                      ],
                    },
                    { dataType: 'integer', title: 'outputIndex' },
                  ],
                },
              ],
            },
          ],
        } as any,
      ),
    }
  },
  { _: { title: 'Data', description: 'Any Plutus data.' } },
  {
    __: {
      title: 'Wrapped Redeemer',
      description:
        'A redeemer wrapped in an extra constructor to make multi-validator detection possible on-chain.',
      anyOf: [
        {
          dataType: 'constructor',
          index: 1,
          fields: [{ description: 'Any Plutus data.' }],
        },
      ],
    },
  },
) as unknown) as InvoiceSpend

export interface InvoiceMint {
  new (genesisUtxo: {
    transactionId: { hash: string }
    outputIndex: bigint
  }): Validator
  r:
    | 'New'
    | {
        Insert: {
          onto: string
          insert: string
          outputIdx: bigint
          invoice: {
            version: bigint
            salt: string
            metadataIdx: bigint
            metadata: Data
            output: {
              address: {
                paymentCredential:
                  | { VerificationKeyCredential: [string] }
                  | { ScriptCredential: [string] }
                stakeCredential:
                  | {
                      Inline: [
                        | { VerificationKeyCredential: [string] }
                        | { ScriptCredential: [string] },
                      ]
                    }
                  | {
                      Pointer: {
                        slotNumber: bigint
                        transactionIndex: bigint
                        certificateIndex: bigint
                      }
                    }
                  | null
              }
              value: Map<string, Map<string, bigint>>
              datum:
                | 'NoDatum'
                | { DatumHash: [string] }
                | { InlineDatum: [Data] }
              referenceScript: string | null
            }
          }
          pointer: string
        }
      }
}

export const InvoiceMint = (Object.assign(
  function (genesisUtxo: {
    transactionId: { hash: string }
    outputIndex: bigint
  }) {
    return {
      type: 'PlutusV2',
      script: applyParamsToScript(
        '59081f01000032323232323232323222253330063370e900018028008992999803991919191919191919191919299980999b8748000c0480244c8c8c8c94ccc05ccdc3a40000042646600200201844a66603800229404c8c94ccc06ccdd79802980c80100c0a511330040040013020002301e0011323232323232323232323232533302630290021323253330253370e9001000899191929998159817001099191919299981619b8748000c0ac0044c8c8c94ccc0bccccc004c028c0b402006c05c03c54ccc0bccccc00401c06c05c05454ccc0bccccc00401406c05403c54ccc0bcc8c8c8c8c8c8c94ccc0d8cdc3803240042a66606c66e3cdca1bb301801c13375e0020122940528181d000981d000981c800981c000981b8011bad3035001302d01113371e01891010014a029405280a50222232323232323232323232533303f30420021323232533304230450021323253330413370e900100089919299982199baf00c001153330433375e02066e952000330473374a9001198239ba90144bd7019823a60103d87a80004bd700a99982199b8f007014153330433371e0089101001533304333720026024266ebc029300103d87a800014a029405280a5014a066e952004330460014bd7019ba548000cc114dd4808998229ba90104bd700b1bad3042002375c60800022c60860026eacc0fc008dd7181e8008b18200009820002981f000981f001181e000981e0011bab303a001303a002303800130300043032001302a0011633323001001222533303100214c0103d87a80001323253330303370e0069000099ba548000cc0d00092f5c0266600a00a00266e0400d20023035003303300201c00f302f001302f01a302d01916302c001323300100101b22533302b00114bd7009919299981519baf30143028300530280023374a90001981719ba548008cc0b8dd480b25eb80cc0b9300103d87a80004bd7009981700119802002000899802002000981780118168009181598160008b1bad3026002375c60480022c604e002646464a66604866e1d200200114bd6f7b63009bab302930220023022001323300100100222533302700114c103d87a800013232323253330283371e028004266e9520003302c374c00297ae0133006006003375660520066eb8c09c008c0ac008c0a4004c8cc004004040894ccc09800452f5bded8c0264646464a66604e66e3d22100002100313302b337606ea4008dd3000998030030019bab3028003375c604c004605400460500026eb8c094004c094008c08c004c08c008dd6981080098108011bae301f001301f002375c603a002602a0264603800260280226eb8c064004c04402458dd5980b800980b800980b0011bac301400130140013013002375860220026012006601e002601e004601a002600a00429309b2b191919299980499b874800000454ccc030c01c01452616153330093370e9001000899191919191919191919299980b180c80109924c64a66602866e1d200000113232323232323232323253330213024002132498c94ccc07ccdc3a400000226464646464646464a666054605a0042646464649319299981599b87480000044c8c94ccc0c0c0cc00852616375c6062002605200a2a66605666e1d20020011533302e302900514985858c0a4010c94ccc0a8cdc3a40000022a66605a605000c2930b0a99981519b87480080044c8c94ccc0bcc0c800852616375c6060002605000c2a66605466e1d200400113232533302f3032002149858c0c0004c0a001858c0a0014cc0840188c8c8cc0900048c8dd698178011bae302d001375660580046eb8c0a8004c94ccc0a0cdc3a4000002264646464a66605e6064004264649319299981719b87480000044c8c94ccc0ccc0d80084c9263253330313370e900000089919299981b181c80109924c605a0022c606e002605e0042a66606266e1d20020011323232323232533303a303d002149858dd6981d800981d8011bad30390013039002375a606e002605e0042c605e0022c606800260580062a66605c66e1d200200115333031302c00314985858c0b0008c09800c58c0c0004c0c0008c0b8004c09802058c09801c58c0ac004c0ac008c0a4004c0a4008dd5981380098138011812800980e8010b180e8008b18110009811001181000098100011bad301e001301e002375c603800260380046eb4c068004c04801058c04800c58dd7180b800980b801180a800980a8011bad30130013013002375c602200260220046eb8c03c004c01c01458c01c01088c8cc00400400c894ccc0380045261323300300330120023003301000123253330083370e900000089919299980698080010a4c2c6eb8c038004c01800854ccc020cdc3a400400226464a66601a60200042930b1bae300e0013006002163006001132253330083232323232323232323232323232323253330183370e9001180b8068991919299980d99b8748000c0680044c8c8c8c8c8c8c8c8c94ccc090cdc3a400460460022646464646600200202244a66605800229404c8c8c94ccc0b0cdd78030008a51133005005002302c0023030002302e0013374a9000198151ba90014bd701bae302a001302200116302800130200013026001301e00130240013024001301b0013021001301900116323300100100e22533301f00114c0103d87a800013232533301e3375e6046603800400a266e952000330220024bd7009980200200098118011810800980f000980b0068b1bab301c001301c001301b001301a00130190013018001301700130160013015001301400237586024002601400660200026020004601c002600c00229309b2b18059802000918029baa001230033754002ae6955ceaab9e5573eae815d0aba201',
        [genesisUtxo],
        {
          dataType: 'list',
          items: [
            {
              title: 'OutputReference',
              description:
                'An `OutputReference` is a unique reference to an output on-chain. The `output_index`\n corresponds to the position in the output list of the transaction (identified by its id)\n that produced that output',
              anyOf: [
                {
                  title: 'OutputReference',
                  dataType: 'constructor',
                  index: 0,
                  fields: [
                    {
                      title: 'transactionId',
                      description:
                        "A unique transaction identifier, as the hash of a transaction body. Note that the transaction id\n isn't a direct hash of the `Transaction` as visible on-chain. Rather, they correspond to hash\n digests of transaction body as they are serialized on the network.",
                      anyOf: [
                        {
                          title: 'TransactionId',
                          dataType: 'constructor',
                          index: 0,
                          fields: [{ dataType: 'bytes', title: 'hash' }],
                        },
                      ],
                    },
                    { dataType: 'integer', title: 'outputIndex' },
                  ],
                },
              ],
            },
          ],
        } as any,
      ),
    }
  },

  {
    r: {
      title: 'Redeemer',
      anyOf: [
        { title: 'New', dataType: 'constructor', index: 0, fields: [] },
        {
          title: 'Insert',
          dataType: 'constructor',
          index: 1,
          fields: [
            { dataType: 'bytes', title: 'onto' },
            { dataType: 'bytes', title: 'insert' },
            { dataType: 'integer', title: 'outputIdx' },
            {
              title: 'invoice',
              anyOf: [
                {
                  title: 'Invoice',
                  dataType: 'constructor',
                  index: 0,
                  fields: [
                    { dataType: 'integer', title: 'version' },
                    { dataType: 'bytes', title: 'salt' },
                    { dataType: 'integer', title: 'metadataIdx' },
                    { title: 'metadata', description: 'Any Plutus data.' },
                    {
                      title: 'output',
                      description:
                        'A transaction `Output`, with an address, a value and optional datums and script references.',
                      anyOf: [
                        {
                          title: 'Output',
                          dataType: 'constructor',
                          index: 0,
                          fields: [
                            {
                              title: 'address',
                              description:
                                "A Cardano `Address` typically holding one or two credential references.\n\n Note that legacy bootstrap addresses (a.k.a. 'Byron addresses') are\n completely excluded from Plutus contexts. Thus, from an on-chain\n perspective only exists addresses of type 00, 01, ..., 07 as detailed\n in [CIP-0019 :: Shelley Addresses](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0019/#shelley-addresses).",
                              anyOf: [
                                {
                                  title: 'Address',
                                  dataType: 'constructor',
                                  index: 0,
                                  fields: [
                                    {
                                      title: 'paymentCredential',
                                      description:
                                        'A general structure for representing an on-chain `Credential`.\n\n Credentials are always one of two kinds: a direct public/private key\n pair, or a script (native or Plutus).',
                                      anyOf: [
                                        {
                                          title: 'VerificationKeyCredential',
                                          dataType: 'constructor',
                                          index: 0,
                                          fields: [{ dataType: 'bytes' }],
                                        },
                                        {
                                          title: 'ScriptCredential',
                                          dataType: 'constructor',
                                          index: 1,
                                          fields: [{ dataType: 'bytes' }],
                                        },
                                      ],
                                    },
                                    {
                                      title: 'stakeCredential',
                                      anyOf: [
                                        {
                                          title: 'Some',
                                          description: 'An optional value.',
                                          dataType: 'constructor',
                                          index: 0,
                                          fields: [
                                            {
                                              description:
                                                'Represent a type of object that can be represented either inline (by hash)\n or via a reference (i.e. a pointer to an on-chain location).\n\n This is mainly use for capturing pointers to a stake credential\n registration certificate in the case of so-called pointer addresses.',
                                              anyOf: [
                                                {
                                                  title: 'Inline',
                                                  dataType: 'constructor',
                                                  index: 0,
                                                  fields: [
                                                    {
                                                      description:
                                                        'A general structure for representing an on-chain `Credential`.\n\n Credentials are always one of two kinds: a direct public/private key\n pair, or a script (native or Plutus).',
                                                      anyOf: [
                                                        {
                                                          title:
                                                            'VerificationKeyCredential',
                                                          dataType:
                                                            'constructor',
                                                          index: 0,
                                                          fields: [
                                                            {
                                                              dataType: 'bytes',
                                                            },
                                                          ],
                                                        },
                                                        {
                                                          title:
                                                            'ScriptCredential',
                                                          dataType:
                                                            'constructor',
                                                          index: 1,
                                                          fields: [
                                                            {
                                                              dataType: 'bytes',
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                                {
                                                  title: 'Pointer',
                                                  dataType: 'constructor',
                                                  index: 1,
                                                  fields: [
                                                    {
                                                      dataType: 'integer',
                                                      title: 'slotNumber',
                                                    },
                                                    {
                                                      dataType: 'integer',
                                                      title: 'transactionIndex',
                                                    },
                                                    {
                                                      dataType: 'integer',
                                                      title: 'certificateIndex',
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          title: 'None',
                                          description: 'Nothing.',
                                          dataType: 'constructor',
                                          index: 1,
                                          fields: [],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              title: 'value',
                              description:
                                'A multi-asset output `Value`. Contains tokens indexed by [PolicyId](#PolicyId) and [AssetName](#AssetName).\n\n This type maintain some invariants by construction; in particular, a `Value` will never contain a\n zero quantity of a particular token.',
                              dataType: 'map',
                              keys: { dataType: 'bytes' },
                              values: {
                                title: 'Dict',
                                description:
                                  "An opaque `Dict`. The type is opaque because the module maintains some\n invariant, namely: there's only one occurrence of a given key in the dictionary.\n\n Note that the `key` parameter is a phantom-type, and only present as a\n means of documentation. Keys can be any type, yet will need to comparable\n to use functions like `insert`.\n\n See for example:\n\n ```aiken\n pub type Value =\n   Dict<PolicyId, Dict<AssetName, Int>>\n ```",
                                dataType: 'map',
                                keys: { dataType: 'bytes' },
                                values: { dataType: 'integer' },
                              },
                            },
                            {
                              title: 'datum',
                              description: 'An output `Datum`.',
                              anyOf: [
                                {
                                  title: 'NoDatum',
                                  dataType: 'constructor',
                                  index: 0,
                                  fields: [],
                                },
                                {
                                  title: 'DatumHash',
                                  description:
                                    'A datum referenced by its hash digest.',
                                  dataType: 'constructor',
                                  index: 1,
                                  fields: [{ dataType: 'bytes' }],
                                },
                                {
                                  title: 'InlineDatum',
                                  description:
                                    'A datum completely inlined in the output.',
                                  dataType: 'constructor',
                                  index: 2,
                                  fields: [{ description: 'Any Plutus data.' }],
                                },
                              ],
                            },
                            {
                              title: 'referenceScript',
                              anyOf: [
                                {
                                  title: 'Some',
                                  description: 'An optional value.',
                                  dataType: 'constructor',
                                  index: 0,
                                  fields: [{ dataType: 'bytes' }],
                                },
                                {
                                  title: 'None',
                                  description: 'Nothing.',
                                  dataType: 'constructor',
                                  index: 1,
                                  fields: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            { dataType: 'bytes', title: 'pointer' },
          ],
        },
      ],
    },
  },
) as unknown) as InvoiceMint
