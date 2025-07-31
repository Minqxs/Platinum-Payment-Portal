/**
 * @generated SignedSource<<dfcebd283c6d477a8fabc0edf0c04522>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InvoiceCapture_Query$data = {
  readonly paymentRequests: ReadonlyArray<{
    readonly id: string;
  }>;
  readonly " $fragmentType": "InvoiceCapture_Query";
};
export type InvoiceCapture_Query$key = {
  readonly " $data"?: InvoiceCapture_Query$data;
  readonly " $fragmentSpreads": FragmentRefs<"InvoiceCapture_Query">;
};

import InvoiceCaptureRefetchQuery_graphql from './InvoiceCaptureRefetchQuery.graphql';

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": InvoiceCaptureRefetchQuery_graphql
    }
  },
  "name": "InvoiceCapture_Query",
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
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "d867ce6c16a7e3d04488622119c3abb5";

export default node;
