/**
 * @generated SignedSource<<e1bbdf424e09c8af1657f2471e44319e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InvoiceCaptureQuery$variables = {};
export type InvoiceCaptureQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"InvoiceCapture_Query">;
};
export type InvoiceCaptureQuery = {
  response: InvoiceCaptureQuery$data;
  variables: InvoiceCaptureQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": "value",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
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
    "name": "InvoiceCaptureQuery",
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
    "name": "InvoiceCaptureQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "managers",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": "label",
            "args": null,
            "kind": "ScalarField",
            "name": "fullName",
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Department",
        "kind": "LinkedField",
        "name": "departments",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": "label",
            "args": null,
            "kind": "ScalarField",
            "name": "nameOfDepartment",
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bb18147e48bc9a15c35fda9e1d6b4c12",
    "id": null,
    "metadata": {},
    "name": "InvoiceCaptureQuery",
    "operationKind": "query",
    "text": "query InvoiceCaptureQuery {\n  ...InvoiceCapture_Query\n}\n\nfragment InvoiceCapture_Query on Query {\n  managers {\n    value: id\n    label: fullName\n    id\n  }\n  departments {\n    value: id\n    label: nameOfDepartment\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "1d780beb34777d1004cad16a0a7e3060";

export default node;
