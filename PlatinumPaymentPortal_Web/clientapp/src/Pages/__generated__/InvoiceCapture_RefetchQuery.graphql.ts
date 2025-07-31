/**
 * @generated SignedSource<<ec98025e51045af31adec5c48ce6be0f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InvoiceCapture_RefetchQuery$variables = Record<PropertyKey, never>;
export type InvoiceCapture_RefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"InvoiceCapture_Query">;
};
export type InvoiceCapture_RefetchQuery = {
  response: InvoiceCapture_RefetchQuery$data;
  variables: InvoiceCapture_RefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
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
    "name": "InvoiceCapture_RefetchQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "InvoiceCapture_Query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "InvoiceCapture_RefetchQuery",
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
              (v0/*: any*/),
              {
                "alias": null,
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
                "alias": null,
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
    "cacheID": "243833ed7146472fabf301955389ffdd",
    "id": null,
    "metadata": {},
    "name": "InvoiceCapture_RefetchQuery",
    "operationKind": "query",
    "text": "query InvoiceCapture_RefetchQuery {\n  ...InvoiceCapture_Query\n}\n\nfragment InvoiceCapture_Fragment on PaymentRequest {\n  coverSheetPdfPath\n  department {\n    id\n    nameOfDepartment\n  }\n  invoiceDate\n  invoiceFile\n  invoiceFileName\n  isSignedOff\n  manager {\n    fullName\n    id\n  }\n  paymentDateRequested\n  paymentDescription\n  paymentRicpientName\n  proofOfPaymentFile\n  proofOfPaymentFileName\n  ricpientBankDetails\n}\n\nfragment InvoiceCapture_Query on Query {\n  paymentRequests {\n    id\n    ...InvoiceCapture_Fragment\n  }\n}\n"
  }
};
})();

(node as any).hash = "4d73b23149a94df2d2f18c31749cf4c5";

export default node;
