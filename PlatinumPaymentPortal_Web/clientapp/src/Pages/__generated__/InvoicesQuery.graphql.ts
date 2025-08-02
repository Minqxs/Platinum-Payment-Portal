/**
 * @generated SignedSource<<0d1a6f7fb1d4465fcc1bed738383f372>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InvoicesQuery$variables = {};
export type InvoicesQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"Invoices_paymentRequests">;
};
export type InvoicesQuery = {
  response: InvoicesQuery$data;
  variables: InvoicesQuery$variables;
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
    "name": "InvoicesQuery",
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
    "name": "InvoicesQuery",
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9d8773ddb44d2312186f22fb1e739e7b",
    "id": null,
    "metadata": {},
    "name": "InvoicesQuery",
    "operationKind": "query",
    "text": "query InvoicesQuery {\n  ...Invoices_paymentRequests\n}\n\nfragment Invoices_paymentRequests on Query {\n  paymentRequests {\n    id\n    coverSheetPdfPath\n    department {\n      value: id\n      label: nameOfDepartment\n      id\n    }\n    invoiceDate\n    invoiceFile\n    invoiceFileName\n    isSignedOff\n    manager {\n      value: id\n      label: fullName\n      id\n    }\n    paymentDateRequested\n    paymentDescription\n    paymentRicpientName\n    proofOfPaymentFile\n    proofOfPaymentFileName\n    ricpientBankDetails\n  }\n}\n"
  }
};
})();

(node as any).hash = "c1a9ad0162979f2f37877c83847e46bf";

export default node;
