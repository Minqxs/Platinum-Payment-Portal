/**
 * @generated SignedSource<<26d6a382d87391d0febdb9ac8824eae7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type  Invoices_paymentRequestsReFetchQuery$variables = {};
export type  Invoices_paymentRequestsReFetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"Invoices_paymentRequests">;
};
export type  Invoices_paymentRequestsReFetchQuery = {
  response:  Invoices_paymentRequestsReFetchQuery$data;
  variables:  Invoices_paymentRequestsReFetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": "value",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": " Invoices_paymentRequestsReFetchQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "Invoices_paymentRequests"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": " Invoices_paymentRequestsReFetchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PaymentRequest",
        "kind": "LinkedField",
        "name": "paymentRequests",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "submittedBy",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fullName",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
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
              (v1/*: any*/),
              {
                "alias": "label",
                "args": null,
                "kind": "ScalarField",
                "name": "nameOfDepartment",
                "storageKey": null
              },
              (v0/*: any*/)
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
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "manager",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": "label",
                "args": null,
                "kind": "ScalarField",
                "name": "fullName",
                "storageKey": null
              },
              (v0/*: any*/)
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "paymentRequestNumber",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "df51d9ed2b80b83d0d424427d7d24310",
    "id": null,
    "metadata": {},
    "name": " Invoices_paymentRequestsReFetchQuery",
    "operationKind": "query",
    "text": "query  Invoices_paymentRequestsReFetchQuery {\n  ...Invoices_paymentRequests\n}\n\nfragment Invoices_paymentRequests on Query {\n  paymentRequests {\n    id\n    submittedBy {\n      id\n      fullName\n    }\n    coverSheetPdfPath\n    department {\n      value: id\n      label: nameOfDepartment\n      id\n    }\n    invoiceDate\n    invoiceFile\n    invoiceFileName\n    isSignedOff\n    manager {\n      value: id\n      label: fullName\n      id\n    }\n    paymentDateRequested\n    paymentDescription\n    paymentRicpientName\n    proofOfPaymentFile\n    proofOfPaymentFileName\n    ricpientBankDetails\n    paymentRequestNumber\n  }\n}\n"
  }
};
})();

(node as any).hash = "b4cdbd3a2eae1a3c25aab24f7d601c91";

export default node;
