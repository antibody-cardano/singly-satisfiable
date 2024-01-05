// deno-lint-ignore-file
import { applyParamsToScript, Data, Validator } from "translucent-cardano";

export interface InvoiceSpend {
  new (genesisUtxo: {
    transactionId: { hash: string };
    outputIndex: bigint;
  }): Validator;
  _: Data;
  __: { wrapper: Data };
}

export const InvoiceSpend = Object.assign(
  function (genesisUtxo: {
    transactionId: { hash: string };
    outputIndex: bigint;
  }) {
    return {
      type: "PlutusV2",
      script: applyParamsToScript(
        "59081f01000032323232323232323222253330063370e900018028008992999803991919191919191919191919299980999b8748000c0480244c8c8c8c94ccc05ccdc3a40000042646464646464646464646464a66604c605200426464a66604a66e1d20020011323232533302b302e002132323232533302c3370e900018158008991919299981799998009805181680400d80b8078a999817999980080380d80b80a8a999817999980080280d80a8078a99981799191919191919299981b19b870064800854ccc0d8cdc79b943766030038266ebc0040245280a50303a001303a001303900130380013037002375a606a002605a022266e3c03122010014a029405280a50222232323232323232323232533303f30420021323232533304230450021323253330413370e900100089919299982199baf00c001153330433375e02066e952000330473374a9001198239ba90144bd7019823a60103d87a80004bd700a99982199b8f007014153330433371e0089101001533304333720026024266ebc029300103d87a800014a029405280a5014a066e952004330460014bd7019ba548000cc114dd4808998229ba90104bd700b1bad3042002375c60800022c60860026eacc0fc008dd7181e8008b18200009820002981f000981f001181e000981e0011bab303a001303a002303800130300043032001302a0011633323001001222533303100214c0103d87a80001323253330303370e0069000099ba548000cc0d00092f5c0266600a00a00266e0400d20023035003303300201c00f302f001302f01a302d01916302c001323300100101b22533302b00114bd7009919299981519baf30143028300530280023374a90001981719ba548008cc0b8dd480b25eb80cc0b9300103d87a80004bd7009981700119802002000899802002000981780118168009181598160008b1bad3026002375c60480022c604e002646464a66604866e1d200200114bd6f7b63009bab302930220023022001323300100100222533302700114c103d87a800013232323253330283371e028004266e9520003302c374c00297ae0133006006003375660520066eb8c09c008c0ac008c0a4004c8cc004004040894ccc09800452f5bded8c0264646464a66604e66e3d22100002100313302b337606ea4008dd3000998030030019bab3028003375c604c004605400460500026eb8c094004c094008c08c004c08c008dd6981080098108011bae301f001301f002375c603a002602a0262646600200201844a66603800229404c8c94ccc06ccdd79802980c80100c0a511330040040013020002301e0012301c0013014011375c603200260220122c6eacc05c004c05c004c058008dd6180a000980a00098098011bac30110013009003300f001300f002300d001300500214984d958c8c8c94ccc024cdc3a4000002264646464646464646464a66602c60320042649319299980a19b87480000044c8c8c8c8c8c8c8c8c8c94ccc084c0900084c92632533301f3370e9000000899191919191919192999815181680109919191924c64a66605666e1d20000011323253330303033002149858dd7181880098148028a99981599b874800800454ccc0b8c0a40145261616302900432533302a3370e90000008a99981698140030a4c2c2a66605466e1d200200113232533302f3032002149858dd7181800098140030a99981519b87480100044c8c94ccc0bcc0c80085261630300013028006163028005330210062323233024001232375a605e0046eb8c0b4004dd598160011bae302a0013253330283370e9000000899191919299981798190010991924c64a66605c66e1d20000011323253330333036002132498c94ccc0c4cdc3a400000226464a66606c60720042649318168008b181b80098178010a99981899b87480080044c8c8c8c8c8c94ccc0e8c0f400852616375a607600260760046eb4c0e4004c0e4008dd6981b80098178010b18178008b181a00098160018a99981719b874800800454ccc0c4c0b000c5261616302c00230260031630300013030002302e001302600816302600716302b001302b002302900130290023756604e002604e004604a002603a0042c603a0022c60440026044004604000260400046eb4c078004c078008dd7180e000980e0011bad301a001301200416301200316375c602e002602e004602a002602a0046eb4c04c004c04c008dd7180880098088011bae300f0013007005153330093370e90010008a99980618038028a4c2c2c600e00844646600200200644a66601c00229309919801801980900118019808000919299980419b87480000044c8c94ccc034c04000852616375c601c002600c0042a66601066e1d200200113232533300d3010002149858dd7180700098030010b18030008991299980419191919191919191919191919191919299980c19b8748008c05c0344c8c8c94ccc06ccdc3a400060340022646464646464646464a66604866e1d200230230011323232323300100101122533302c00114a02646464a66605866ebc01800452889980280280118160011818001181700099ba548000cc0a8dd4800a5eb80dd7181500098110008b181400098100009813000980f00098120009812000980d8009810800980c8008b191980080080711299980f8008a60103d87a800013232533301e3375e6046603800400a266e952000330220024bd7009980200200098118011810800980f000980b0068b1bab301c001301c001301b001301a00130190013018001301700130160013015001301400237586024002601400660200026020004601c002600c00229309b2b18059802000918029baa001230033754002ae6955ceaab9e5573eae815d0aba201",
        [genesisUtxo],
        {
          dataType: "list",
          items: [
            {
              title: "OutputReference",
              description:
                "An `OutputReference` is a unique reference to an output on-chain. The `output_index`\n corresponds to the position in the output list of the transaction (identified by its id)\n that produced that output",
              anyOf: [
                {
                  title: "OutputReference",
                  dataType: "constructor",
                  index: 0,
                  fields: [
                    {
                      title: "transactionId",
                      description:
                        "A unique transaction identifier, as the hash of a transaction body. Note that the transaction id\n isn't a direct hash of the `Transaction` as visible on-chain. Rather, they correspond to hash\n digests of transaction body as they are serialized on the network.",
                      anyOf: [
                        {
                          title: "TransactionId",
                          dataType: "constructor",
                          index: 0,
                          fields: [{ dataType: "bytes", title: "hash" }],
                        },
                      ],
                    },
                    { dataType: "integer", title: "outputIndex" },
                  ],
                },
              ],
            },
          ],
        } as any,
      ),
    };
  },
  { _: { title: "Data", description: "Any Plutus data." } },
  {
    __: {
      title: "Wrapped Redeemer",
      description:
        "A redeemer wrapped in an extra constructor to make multi-validator detection possible on-chain.",
      anyOf: [
        {
          dataType: "constructor",
          index: 1,
          fields: [{ description: "Any Plutus data." }],
        },
      ],
    },
  },
) as unknown as InvoiceSpend;

export interface InvoiceMint {
  new (genesisUtxo: {
    transactionId: { hash: string };
    outputIndex: bigint;
  }): Validator;
  r:
    | {
        Insert: {
          onto: string;
          insert: string;
          outputIdx: bigint;
          invoice: {
            version: bigint;
            salt: string;
            metadataIdx: bigint;
            metadata: Data;
            output: {
              address: {
                paymentCredential:
                  | { VerificationKeyCredential: [string] }
                  | { ScriptCredential: [string] };
                stakeCredential:
                  | {
                      Inline: [
                        | { VerificationKeyCredential: [string] }
                        | { ScriptCredential: [string] },
                      ];
                    }
                  | {
                      Pointer: {
                        slotNumber: bigint;
                        transactionIndex: bigint;
                        certificateIndex: bigint;
                      };
                    }
                  | null;
              };
              value: Map<string, Map<string, bigint>>;
              datum:
                | "NoDatum"
                | { DatumHash: [string] }
                | { InlineDatum: [Data] };
              referenceScript: string | null;
            };
          };
          pointer: string;
        };
      }
    | "New";
}

export const InvoiceMint = Object.assign(
  function (genesisUtxo: {
    transactionId: { hash: string };
    outputIndex: bigint;
  }) {
    return {
      type: "PlutusV2",
      script: applyParamsToScript(
        "59081f01000032323232323232323222253330063370e900018028008992999803991919191919191919191919299980999b8748000c0480244c8c8c8c94ccc05ccdc3a40000042646464646464646464646464a66604c605200426464a66604a66e1d20020011323232533302b302e002132323232533302c3370e900018158008991919299981799998009805181680400d80b8078a999817999980080380d80b80a8a999817999980080280d80a8078a99981799191919191919299981b19b870064800854ccc0d8cdc79b943766030038266ebc0040245280a50303a001303a001303900130380013037002375a606a002605a022266e3c03122010014a029405280a50222232323232323232323232533303f30420021323232533304230450021323253330413370e900100089919299982199baf00c001153330433375e02066e952000330473374a9001198239ba90144bd7019823a60103d87a80004bd700a99982199b8f007014153330433371e0089101001533304333720026024266ebc029300103d87a800014a029405280a5014a066e952004330460014bd7019ba548000cc114dd4808998229ba90104bd700b1bad3042002375c60800022c60860026eacc0fc008dd7181e8008b18200009820002981f000981f001181e000981e0011bab303a001303a002303800130300043032001302a0011633323001001222533303100214c0103d87a80001323253330303370e0069000099ba548000cc0d00092f5c0266600a00a00266e0400d20023035003303300201c00f302f001302f01a302d01916302c001323300100101b22533302b00114bd7009919299981519baf30143028300530280023374a90001981719ba548008cc0b8dd480b25eb80cc0b9300103d87a80004bd7009981700119802002000899802002000981780118168009181598160008b1bad3026002375c60480022c604e002646464a66604866e1d200200114bd6f7b63009bab302930220023022001323300100100222533302700114c103d87a800013232323253330283371e028004266e9520003302c374c00297ae0133006006003375660520066eb8c09c008c0ac008c0a4004c8cc004004040894ccc09800452f5bded8c0264646464a66604e66e3d22100002100313302b337606ea4008dd3000998030030019bab3028003375c604c004605400460500026eb8c094004c094008c08c004c08c008dd6981080098108011bae301f001301f002375c603a002602a0262646600200201844a66603800229404c8c94ccc06ccdd79802980c80100c0a511330040040013020002301e0012301c0013014011375c603200260220122c6eacc05c004c05c004c058008dd6180a000980a00098098011bac30110013009003300f001300f002300d001300500214984d958c8c8c94ccc024cdc3a4000002264646464646464646464a66602c60320042649319299980a19b87480000044c8c8c8c8c8c8c8c8c8c94ccc084c0900084c92632533301f3370e9000000899191919191919192999815181680109919191924c64a66605666e1d20000011323253330303033002149858dd7181880098148028a99981599b874800800454ccc0b8c0a40145261616302900432533302a3370e90000008a99981698140030a4c2c2a66605466e1d200200113232533302f3032002149858dd7181800098140030a99981519b87480100044c8c94ccc0bcc0c80085261630300013028006163028005330210062323233024001232375a605e0046eb8c0b4004dd598160011bae302a0013253330283370e9000000899191919299981798190010991924c64a66605c66e1d20000011323253330333036002132498c94ccc0c4cdc3a400000226464a66606c60720042649318168008b181b80098178010a99981899b87480080044c8c8c8c8c8c94ccc0e8c0f400852616375a607600260760046eb4c0e4004c0e4008dd6981b80098178010b18178008b181a00098160018a99981719b874800800454ccc0c4c0b000c5261616302c00230260031630300013030002302e001302600816302600716302b001302b002302900130290023756604e002604e004604a002603a0042c603a0022c60440026044004604000260400046eb4c078004c078008dd7180e000980e0011bad301a001301200416301200316375c602e002602e004602a002602a0046eb4c04c004c04c008dd7180880098088011bae300f0013007005153330093370e90010008a99980618038028a4c2c2c600e00844646600200200644a66601c00229309919801801980900118019808000919299980419b87480000044c8c94ccc034c04000852616375c601c002600c0042a66601066e1d200200113232533300d3010002149858dd7180700098030010b18030008991299980419191919191919191919191919191919299980c19b8748008c05c0344c8c8c94ccc06ccdc3a400060340022646464646464646464a66604866e1d200230230011323232323300100101122533302c00114a02646464a66605866ebc01800452889980280280118160011818001181700099ba548000cc0a8dd4800a5eb80dd7181500098110008b181400098100009813000980f00098120009812000980d8009810800980c8008b191980080080711299980f8008a60103d87a800013232533301e3375e6046603800400a266e952000330220024bd7009980200200098118011810800980f000980b0068b1bab301c001301c001301b001301a00130190013018001301700130160013015001301400237586024002601400660200026020004601c002600c00229309b2b18059802000918029baa001230033754002ae6955ceaab9e5573eae815d0aba201",
        [genesisUtxo],
        {
          dataType: "list",
          items: [
            {
              title: "OutputReference",
              description:
                "An `OutputReference` is a unique reference to an output on-chain. The `output_index`\n corresponds to the position in the output list of the transaction (identified by its id)\n that produced that output",
              anyOf: [
                {
                  title: "OutputReference",
                  dataType: "constructor",
                  index: 0,
                  fields: [
                    {
                      title: "transactionId",
                      description:
                        "A unique transaction identifier, as the hash of a transaction body. Note that the transaction id\n isn't a direct hash of the `Transaction` as visible on-chain. Rather, they correspond to hash\n digests of transaction body as they are serialized on the network.",
                      anyOf: [
                        {
                          title: "TransactionId",
                          dataType: "constructor",
                          index: 0,
                          fields: [{ dataType: "bytes", title: "hash" }],
                        },
                      ],
                    },
                    { dataType: "integer", title: "outputIndex" },
                  ],
                },
              ],
            },
          ],
        } as any,
      ),
    };
  },

  {
    r: {
      title: "Redeemer",
      anyOf: [
        {
          title: "Insert",
          dataType: "constructor",
          index: 0,
          fields: [
            { dataType: "bytes", title: "onto" },
            { dataType: "bytes", title: "insert" },
            { dataType: "integer", title: "outputIdx" },
            {
              title: "invoice",
              anyOf: [
                {
                  title: "Invoice",
                  dataType: "constructor",
                  index: 0,
                  fields: [
                    { dataType: "integer", title: "version" },
                    { dataType: "bytes", title: "salt" },
                    { dataType: "integer", title: "metadataIdx" },
                    { title: "metadata", description: "Any Plutus data." },
                    {
                      title: "output",
                      description:
                        "A transaction `Output`, with an address, a value and optional datums and script references.",
                      anyOf: [
                        {
                          title: "Output",
                          dataType: "constructor",
                          index: 0,
                          fields: [
                            {
                              title: "address",
                              description:
                                "A Cardano `Address` typically holding one or two credential references.\n\n Note that legacy bootstrap addresses (a.k.a. 'Byron addresses') are\n completely excluded from Plutus contexts. Thus, from an on-chain\n perspective only exists addresses of type 00, 01, ..., 07 as detailed\n in [CIP-0019 :: Shelley Addresses](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0019/#shelley-addresses).",
                              anyOf: [
                                {
                                  title: "Address",
                                  dataType: "constructor",
                                  index: 0,
                                  fields: [
                                    {
                                      title: "paymentCredential",
                                      description:
                                        "A general structure for representing an on-chain `Credential`.\n\n Credentials are always one of two kinds: a direct public/private key\n pair, or a script (native or Plutus).",
                                      anyOf: [
                                        {
                                          title: "VerificationKeyCredential",
                                          dataType: "constructor",
                                          index: 0,
                                          fields: [{ dataType: "bytes" }],
                                        },
                                        {
                                          title: "ScriptCredential",
                                          dataType: "constructor",
                                          index: 1,
                                          fields: [{ dataType: "bytes" }],
                                        },
                                      ],
                                    },
                                    {
                                      title: "stakeCredential",
                                      anyOf: [
                                        {
                                          title: "Some",
                                          description: "An optional value.",
                                          dataType: "constructor",
                                          index: 0,
                                          fields: [
                                            {
                                              description:
                                                "Represent a type of object that can be represented either inline (by hash)\n or via a reference (i.e. a pointer to an on-chain location).\n\n This is mainly use for capturing pointers to a stake credential\n registration certificate in the case of so-called pointer addresses.",
                                              anyOf: [
                                                {
                                                  title: "Inline",
                                                  dataType: "constructor",
                                                  index: 0,
                                                  fields: [
                                                    {
                                                      description:
                                                        "A general structure for representing an on-chain `Credential`.\n\n Credentials are always one of two kinds: a direct public/private key\n pair, or a script (native or Plutus).",
                                                      anyOf: [
                                                        {
                                                          title:
                                                            "VerificationKeyCredential",
                                                          dataType:
                                                            "constructor",
                                                          index: 0,
                                                          fields: [
                                                            {
                                                              dataType: "bytes",
                                                            },
                                                          ],
                                                        },
                                                        {
                                                          title:
                                                            "ScriptCredential",
                                                          dataType:
                                                            "constructor",
                                                          index: 1,
                                                          fields: [
                                                            {
                                                              dataType: "bytes",
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                                {
                                                  title: "Pointer",
                                                  dataType: "constructor",
                                                  index: 1,
                                                  fields: [
                                                    {
                                                      dataType: "integer",
                                                      title: "slotNumber",
                                                    },
                                                    {
                                                      dataType: "integer",
                                                      title: "transactionIndex",
                                                    },
                                                    {
                                                      dataType: "integer",
                                                      title: "certificateIndex",
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          title: "None",
                                          description: "Nothing.",
                                          dataType: "constructor",
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
                              title: "value",
                              description:
                                "A multi-asset output `Value`. Contains tokens indexed by [PolicyId](#PolicyId) and [AssetName](#AssetName).\n\n This type maintain some invariants by construction; in particular, a `Value` will never contain a\n zero quantity of a particular token.",
                              dataType: "map",
                              keys: { dataType: "bytes" },
                              values: {
                                title: "Dict",
                                description:
                                  "An opaque `Dict`. The type is opaque because the module maintains some\n invariant, namely: there's only one occurrence of a given key in the dictionary.\n\n Note that the `key` parameter is a phantom-type, and only present as a\n means of documentation. Keys can be any type, yet will need to comparable\n to use functions like `insert`.\n\n See for example:\n\n ```aiken\n pub type Value =\n   Dict<PolicyId, Dict<AssetName, Int>>\n ```",
                                dataType: "map",
                                keys: { dataType: "bytes" },
                                values: { dataType: "integer" },
                              },
                            },
                            {
                              title: "datum",
                              description: "An output `Datum`.",
                              anyOf: [
                                {
                                  title: "NoDatum",
                                  dataType: "constructor",
                                  index: 0,
                                  fields: [],
                                },
                                {
                                  title: "DatumHash",
                                  description:
                                    "A datum referenced by its hash digest.",
                                  dataType: "constructor",
                                  index: 1,
                                  fields: [{ dataType: "bytes" }],
                                },
                                {
                                  title: "InlineDatum",
                                  description:
                                    "A datum completely inlined in the output.",
                                  dataType: "constructor",
                                  index: 2,
                                  fields: [{ description: "Any Plutus data." }],
                                },
                              ],
                            },
                            {
                              title: "referenceScript",
                              anyOf: [
                                {
                                  title: "Some",
                                  description: "An optional value.",
                                  dataType: "constructor",
                                  index: 0,
                                  fields: [{ dataType: "bytes" }],
                                },
                                {
                                  title: "None",
                                  description: "Nothing.",
                                  dataType: "constructor",
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
            { dataType: "bytes", title: "pointer" },
          ],
        },
        { title: "New", dataType: "constructor", index: 1, fields: [] },
      ],
    },
  },
) as unknown as InvoiceMint;

export interface TypesInvoice {
  new (): Validator;
  _r: {
    version: bigint;
    salt: string;
    metadataIdx: bigint;
    metadata: Data;
    output: {
      address: {
        paymentCredential:
          | { VerificationKeyCredential: [string] }
          | { ScriptCredential: [string] };
        stakeCredential:
          | {
              Inline: [
                | { VerificationKeyCredential: [string] }
                | { ScriptCredential: [string] },
              ];
            }
          | {
              Pointer: {
                slotNumber: bigint;
                transactionIndex: bigint;
                certificateIndex: bigint;
              };
            }
          | null;
      };
      value: Map<string, Map<string, bigint>>;
      datum: "NoDatum" | { DatumHash: [string] } | { InlineDatum: [Data] };
      referenceScript: string | null;
    };
  };
}

export const TypesInvoice = Object.assign(
  function () {
    return { type: "PlutusV2", script: "51010000322253330034a029309b2b2b9a01" };
  },

  {
    _r: {
      title: "Invoice",
      anyOf: [
        {
          title: "Invoice",
          dataType: "constructor",
          index: 0,
          fields: [
            { dataType: "integer", title: "version" },
            { dataType: "bytes", title: "salt" },
            { dataType: "integer", title: "metadataIdx" },
            { title: "metadata", description: "Any Plutus data." },
            {
              title: "output",
              description:
                "A transaction `Output`, with an address, a value and optional datums and script references.",
              anyOf: [
                {
                  title: "Output",
                  dataType: "constructor",
                  index: 0,
                  fields: [
                    {
                      title: "address",
                      description:
                        "A Cardano `Address` typically holding one or two credential references.\n\n Note that legacy bootstrap addresses (a.k.a. 'Byron addresses') are\n completely excluded from Plutus contexts. Thus, from an on-chain\n perspective only exists addresses of type 00, 01, ..., 07 as detailed\n in [CIP-0019 :: Shelley Addresses](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0019/#shelley-addresses).",
                      anyOf: [
                        {
                          title: "Address",
                          dataType: "constructor",
                          index: 0,
                          fields: [
                            {
                              title: "paymentCredential",
                              description:
                                "A general structure for representing an on-chain `Credential`.\n\n Credentials are always one of two kinds: a direct public/private key\n pair, or a script (native or Plutus).",
                              anyOf: [
                                {
                                  title: "VerificationKeyCredential",
                                  dataType: "constructor",
                                  index: 0,
                                  fields: [{ dataType: "bytes" }],
                                },
                                {
                                  title: "ScriptCredential",
                                  dataType: "constructor",
                                  index: 1,
                                  fields: [{ dataType: "bytes" }],
                                },
                              ],
                            },
                            {
                              title: "stakeCredential",
                              anyOf: [
                                {
                                  title: "Some",
                                  description: "An optional value.",
                                  dataType: "constructor",
                                  index: 0,
                                  fields: [
                                    {
                                      description:
                                        "Represent a type of object that can be represented either inline (by hash)\n or via a reference (i.e. a pointer to an on-chain location).\n\n This is mainly use for capturing pointers to a stake credential\n registration certificate in the case of so-called pointer addresses.",
                                      anyOf: [
                                        {
                                          title: "Inline",
                                          dataType: "constructor",
                                          index: 0,
                                          fields: [
                                            {
                                              description:
                                                "A general structure for representing an on-chain `Credential`.\n\n Credentials are always one of two kinds: a direct public/private key\n pair, or a script (native or Plutus).",
                                              anyOf: [
                                                {
                                                  title:
                                                    "VerificationKeyCredential",
                                                  dataType: "constructor",
                                                  index: 0,
                                                  fields: [
                                                    { dataType: "bytes" },
                                                  ],
                                                },
                                                {
                                                  title: "ScriptCredential",
                                                  dataType: "constructor",
                                                  index: 1,
                                                  fields: [
                                                    { dataType: "bytes" },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          title: "Pointer",
                                          dataType: "constructor",
                                          index: 1,
                                          fields: [
                                            {
                                              dataType: "integer",
                                              title: "slotNumber",
                                            },
                                            {
                                              dataType: "integer",
                                              title: "transactionIndex",
                                            },
                                            {
                                              dataType: "integer",
                                              title: "certificateIndex",
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  title: "None",
                                  description: "Nothing.",
                                  dataType: "constructor",
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
                      title: "value",
                      description:
                        "A multi-asset output `Value`. Contains tokens indexed by [PolicyId](#PolicyId) and [AssetName](#AssetName).\n\n This type maintain some invariants by construction; in particular, a `Value` will never contain a\n zero quantity of a particular token.",
                      dataType: "map",
                      keys: { dataType: "bytes" },
                      values: {
                        title: "Dict",
                        description:
                          "An opaque `Dict`. The type is opaque because the module maintains some\n invariant, namely: there's only one occurrence of a given key in the dictionary.\n\n Note that the `key` parameter is a phantom-type, and only present as a\n means of documentation. Keys can be any type, yet will need to comparable\n to use functions like `insert`.\n\n See for example:\n\n ```aiken\n pub type Value =\n   Dict<PolicyId, Dict<AssetName, Int>>\n ```",
                        dataType: "map",
                        keys: { dataType: "bytes" },
                        values: { dataType: "integer" },
                      },
                    },
                    {
                      title: "datum",
                      description: "An output `Datum`.",
                      anyOf: [
                        {
                          title: "NoDatum",
                          dataType: "constructor",
                          index: 0,
                          fields: [],
                        },
                        {
                          title: "DatumHash",
                          description: "A datum referenced by its hash digest.",
                          dataType: "constructor",
                          index: 1,
                          fields: [{ dataType: "bytes" }],
                        },
                        {
                          title: "InlineDatum",
                          description:
                            "A datum completely inlined in the output.",
                          dataType: "constructor",
                          index: 2,
                          fields: [{ description: "Any Plutus data." }],
                        },
                      ],
                    },
                    {
                      title: "referenceScript",
                      anyOf: [
                        {
                          title: "Some",
                          description: "An optional value.",
                          dataType: "constructor",
                          index: 0,
                          fields: [{ dataType: "bytes" }],
                        },
                        {
                          title: "None",
                          description: "Nothing.",
                          dataType: "constructor",
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
  },
) as unknown as TypesInvoice;

export interface TypesOutput {
  new (): Validator;
  _r: {
    address: {
      paymentCredential:
        | { VerificationKeyCredential: [string] }
        | { ScriptCredential: [string] };
      stakeCredential:
        | {
            Inline: [
              | { VerificationKeyCredential: [string] }
              | { ScriptCredential: [string] },
            ];
          }
        | {
            Pointer: {
              slotNumber: bigint;
              transactionIndex: bigint;
              certificateIndex: bigint;
            };
          }
        | null;
    };
    value: Map<string, Map<string, bigint>>;
    datum: "NoDatum" | { DatumHash: [string] } | { InlineDatum: [Data] };
    referenceScript: string | null;
  };
}

export const TypesOutput = Object.assign(
  function () {
    return { type: "PlutusV2", script: "51010000322253330034a029309b2b2b9a01" };
  },

  {
    _r: {
      title: "Output",
      description:
        "A transaction `Output`, with an address, a value and optional datums and script references.",
      anyOf: [
        {
          title: "Output",
          dataType: "constructor",
          index: 0,
          fields: [
            {
              title: "address",
              description:
                "A Cardano `Address` typically holding one or two credential references.\n\n Note that legacy bootstrap addresses (a.k.a. 'Byron addresses') are\n completely excluded from Plutus contexts. Thus, from an on-chain\n perspective only exists addresses of type 00, 01, ..., 07 as detailed\n in [CIP-0019 :: Shelley Addresses](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0019/#shelley-addresses).",
              anyOf: [
                {
                  title: "Address",
                  dataType: "constructor",
                  index: 0,
                  fields: [
                    {
                      title: "paymentCredential",
                      description:
                        "A general structure for representing an on-chain `Credential`.\n\n Credentials are always one of two kinds: a direct public/private key\n pair, or a script (native or Plutus).",
                      anyOf: [
                        {
                          title: "VerificationKeyCredential",
                          dataType: "constructor",
                          index: 0,
                          fields: [{ dataType: "bytes" }],
                        },
                        {
                          title: "ScriptCredential",
                          dataType: "constructor",
                          index: 1,
                          fields: [{ dataType: "bytes" }],
                        },
                      ],
                    },
                    {
                      title: "stakeCredential",
                      anyOf: [
                        {
                          title: "Some",
                          description: "An optional value.",
                          dataType: "constructor",
                          index: 0,
                          fields: [
                            {
                              description:
                                "Represent a type of object that can be represented either inline (by hash)\n or via a reference (i.e. a pointer to an on-chain location).\n\n This is mainly use for capturing pointers to a stake credential\n registration certificate in the case of so-called pointer addresses.",
                              anyOf: [
                                {
                                  title: "Inline",
                                  dataType: "constructor",
                                  index: 0,
                                  fields: [
                                    {
                                      description:
                                        "A general structure for representing an on-chain `Credential`.\n\n Credentials are always one of two kinds: a direct public/private key\n pair, or a script (native or Plutus).",
                                      anyOf: [
                                        {
                                          title: "VerificationKeyCredential",
                                          dataType: "constructor",
                                          index: 0,
                                          fields: [{ dataType: "bytes" }],
                                        },
                                        {
                                          title: "ScriptCredential",
                                          dataType: "constructor",
                                          index: 1,
                                          fields: [{ dataType: "bytes" }],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  title: "Pointer",
                                  dataType: "constructor",
                                  index: 1,
                                  fields: [
                                    {
                                      dataType: "integer",
                                      title: "slotNumber",
                                    },
                                    {
                                      dataType: "integer",
                                      title: "transactionIndex",
                                    },
                                    {
                                      dataType: "integer",
                                      title: "certificateIndex",
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          title: "None",
                          description: "Nothing.",
                          dataType: "constructor",
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
              title: "value",
              description:
                "A multi-asset output `Value`. Contains tokens indexed by [PolicyId](#PolicyId) and [AssetName](#AssetName).\n\n This type maintain some invariants by construction; in particular, a `Value` will never contain a\n zero quantity of a particular token.",
              dataType: "map",
              keys: { dataType: "bytes" },
              values: {
                title: "Dict",
                description:
                  "An opaque `Dict`. The type is opaque because the module maintains some\n invariant, namely: there's only one occurrence of a given key in the dictionary.\n\n Note that the `key` parameter is a phantom-type, and only present as a\n means of documentation. Keys can be any type, yet will need to comparable\n to use functions like `insert`.\n\n See for example:\n\n ```aiken\n pub type Value =\n   Dict<PolicyId, Dict<AssetName, Int>>\n ```",
                dataType: "map",
                keys: { dataType: "bytes" },
                values: { dataType: "integer" },
              },
            },
            {
              title: "datum",
              description: "An output `Datum`.",
              anyOf: [
                {
                  title: "NoDatum",
                  dataType: "constructor",
                  index: 0,
                  fields: [],
                },
                {
                  title: "DatumHash",
                  description: "A datum referenced by its hash digest.",
                  dataType: "constructor",
                  index: 1,
                  fields: [{ dataType: "bytes" }],
                },
                {
                  title: "InlineDatum",
                  description: "A datum completely inlined in the output.",
                  dataType: "constructor",
                  index: 2,
                  fields: [{ description: "Any Plutus data." }],
                },
              ],
            },
            {
              title: "referenceScript",
              anyOf: [
                {
                  title: "Some",
                  description: "An optional value.",
                  dataType: "constructor",
                  index: 0,
                  fields: [{ dataType: "bytes" }],
                },
                {
                  title: "None",
                  description: "Nothing.",
                  dataType: "constructor",
                  index: 1,
                  fields: [],
                },
              ],
            },
          ],
        },
      ],
    },
  },
) as unknown as TypesOutput;

export interface TypesValue {
  new (): Validator;
  _r: Map<string, Map<string, bigint>>;
}

export const TypesValue = Object.assign(
  function () {
    return { type: "PlutusV2", script: "51010000322253330034a029309b2b2b9a01" };
  },

  {
    _r: {
      title: "Value",
      description:
        "A multi-asset output `Value`. Contains tokens indexed by [PolicyId](#PolicyId) and [AssetName](#AssetName).\n\n This type maintain some invariants by construction; in particular, a `Value` will never contain a\n zero quantity of a particular token.",
      dataType: "map",
      keys: { dataType: "bytes" },
      values: {
        title: "Dict",
        description:
          "An opaque `Dict`. The type is opaque because the module maintains some\n invariant, namely: there's only one occurrence of a given key in the dictionary.\n\n Note that the `key` parameter is a phantom-type, and only present as a\n means of documentation. Keys can be any type, yet will need to comparable\n to use functions like `insert`.\n\n See for example:\n\n ```aiken\n pub type Value =\n   Dict<PolicyId, Dict<AssetName, Int>>\n ```",
        dataType: "map",
        keys: { dataType: "bytes" },
        values: { dataType: "integer" },
      },
    },
  },
) as unknown as TypesValue;
