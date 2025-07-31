/**
 * @generated SignedSource<<0644dc5ea81b461af662b8dcc9362185>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InvoiceCaptureNodeQuery$variables = {
  id: string;
  skip: boolean;
};
export type InvoiceCaptureNodeQuery$data = {
  readonly node?: {
    readonly " $fragmentSpreads": FragmentRefs<"InvoiceCapture_requestPayment">;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"InvoiceCapture_Query">;
};
export type InvoiceCaptureNodeQuery = {
  response: InvoiceCaptureNodeQuery$data;
  variables: InvoiceCaptureNodeQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "skip"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": "value",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "InvoiceCaptureNodeQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "InvoiceCapture_Query"
      },
      {
        "condition": "skip",
        "kind": "Condition",
        "passingValue": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "InvoiceCapture_requestPayment"
                  }
                ],
                "type": "PaymentRequest",
                "abstractKey": null
              }
            ],
            "storageKey": null
          }
        ]
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "InvoiceCaptureNodeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PaymentRequest",
        "kind": "LinkedField",
        "name": "paymentRequests",
        "plural": true,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      {
        "condition": "skip",
        "kind": "Condition",
        "passingValue": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v2/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "coverSheetPdfPath",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Department",
                    "kind": "LinkedField",
                    "name": "department",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "alias": "label",
                        "args": null,
                        "kind": "ScalarField",
                        "name": "nameOfDepartment",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "invoiceDate",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "invoiceFile",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "invoiceFileName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isSignedOff",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Manager",
                    "kind": "LinkedField",
                    "name": "manager",
                    "plural": false,
                    "selections": [
                      {
                        "alias": "label",
                        "args": null,
                        "kind": "ScalarField",
                        "name": "fullName",
                        "storageKey": null
                      },
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "paymentDateRequested",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "paymentDescription",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "paymentRicpientName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "proofOfPaymentFile",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "proofOfPaymentFileName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "ricpientBankDetails",
                    "storageKey": null
                  }
                ],
                "type": "PaymentRequest",
                "abstractKey": null
              }
            ],
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "e214ad755803e65204cdfbc12c1d1da4",
    "id": null,
    "metadata": {},
    "name": "InvoiceCaptureNodeQuery",
    "operationKind": "query",
    "text": "query InvoiceCaptureNodeQuery(\n  $id: ID!\n  $skip: Boolean!\n) {\n  ...InvoiceCapture_Query\n  node(id: $id) @skip(if: $skip) {\n    __typename\n    ... on PaymentRequest {\n      ...InvoiceCapture_requestPayment\n    }\n    id\n  }\n}\n\nfragment InvoiceCapture_Query on Query {\n  paymentRequests {\n    id\n  }\n}\n\nfragment InvoiceCapture_requestPayment on PaymentRequest {\n  id\n  coverSheetPdfPath\n  department {\n    value: id\n    label: nameOfDepartment\n  }\n  invoiceDate\n  invoiceFile\n  invoiceFileName\n  isSignedOff\n  manager {\n    label: fullName\n    value: id\n  }\n  paymentDateRequested\n  paymentDescription\n  paymentRicpientName\n  proofOfPaymentFile\n  proofOfPaymentFileName\n  ricpientBankDetails\n}\n"
  }
};
})();

(node as any).hash = "0ea9e72d7a73b56528dd7aba87021e60";

export default node;
