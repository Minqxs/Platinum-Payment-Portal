/**
 * @generated SignedSource<<1ae41bad5a6af23e9179724040ecb24b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InvoiceCapture_Query$data = {
  readonly departments: ReadonlyArray<{
    readonly label: string;
    readonly value: string;
  }>;
  readonly managers: ReadonlyArray<{
    readonly label: string;
    readonly value: string;
  }>;
  readonly " $fragmentType": "InvoiceCapture_Query";
};
export type InvoiceCapture_Query$key = {
  readonly " $data"?: InvoiceCapture_Query$data;
  readonly " $fragmentSpreads": FragmentRefs<"InvoiceCapture_Query">;
};

import InvoiceCaptureRefetchQuery_graphql from './InvoiceCaptureRefetchQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = {
  "alias": "value",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
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
        }
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "316c7b2ff8000677f4464228f35c9893";

export default node;
