/**
 * @generated SignedSource<<dc07114ede04150ac53bfc06d3532a79>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InvoiceCaptureRefetchQuery$variables = {};
export type InvoiceCaptureRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"InvoiceCapture_Query">;
};
export type InvoiceCaptureRefetchQuery = {
  response: InvoiceCaptureRefetchQuery$data;
  variables: InvoiceCaptureRefetchQuery$variables;
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
    "name": "InvoiceCaptureRefetchQuery",
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
    "name": "InvoiceCaptureRefetchQuery",
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
    "cacheID": "233126b388491a0680d7502f6b9921f2",
    "id": null,
    "metadata": {},
    "name": "InvoiceCaptureRefetchQuery",
    "operationKind": "query",
    "text": "query InvoiceCaptureRefetchQuery {\n  ...InvoiceCapture_Query\n}\n\nfragment InvoiceCapture_Query on Query {\n  managers {\n    value: id\n    label: fullName\n    id\n  }\n  departments {\n    value: id\n    label: nameOfDepartment\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "316c7b2ff8000677f4464228f35c9893";

export default node;
