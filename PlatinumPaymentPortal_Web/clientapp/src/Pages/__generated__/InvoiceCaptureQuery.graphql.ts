/**
 * @generated SignedSource<<b7f4cfdc84945b892db7a4776858e2c2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InvoiceCaptureQuery$variables = Record<PropertyKey, never>;
export type InvoiceCaptureQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"InvoiceCapture_Query">;
};
export type InvoiceCaptureQuery = {
  response: InvoiceCaptureQuery$data;
  variables: InvoiceCaptureQuery$variables;
};

const node: ConcreteRequest = {
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
        "concreteType": "PaymentRequest",
        "kind": "LinkedField",
        "name": "paymentRequests",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "96bb05203cc19a64ab035cc9b55bdb06",
    "id": null,
    "metadata": {},
    "name": "InvoiceCaptureQuery",
    "operationKind": "query",
    "text": "query InvoiceCaptureQuery {\n  ...InvoiceCapture_Query\n}\n\nfragment InvoiceCapture_Query on Query {\n  paymentRequests {\n    id\n  }\n}\n"
  }
};

(node as any).hash = "1d780beb34777d1004cad16a0a7e3060";

export default node;
