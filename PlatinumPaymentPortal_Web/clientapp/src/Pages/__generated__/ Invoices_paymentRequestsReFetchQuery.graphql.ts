/**
 * @generated SignedSource<<d45782659748496ffe661cb236491b15>>
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
    "cacheID": "cce1f9480cd1ff23f8461f2a0ffa04b5",
    "id": null,
    "metadata": {},
    "name": " Invoices_paymentRequestsReFetchQuery",
    "operationKind": "query",
    "text": "query  Invoices_paymentRequestsReFetchQuery {\n  ...Invoices_paymentRequests\n}\n\nfragment Invoices_paymentRequests on Query {\n  paymentRequests {\n    id\n    coverSheetPdfPath\n    department {\n      value: id\n      label: nameOfDepartment\n      id\n    }\n    invoiceDate\n    invoiceFile\n    invoiceFileName\n    isSignedOff\n    manager {\n      value: id\n      label: fullName\n      id\n    }\n    paymentDateRequested\n    paymentDescription\n    paymentRicpientName\n    proofOfPaymentFile\n    proofOfPaymentFileName\n    ricpientBankDetails\n  }\n}\n"
  }
};
})();

(node as any).hash = "c970239e14faf88145e33518f9056d30";

export default node;
