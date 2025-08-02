/**
 * @generated SignedSource<<4f78950142ad304e8d052331aba1d623>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type GeneratePaymentRequestPdfInput = {
  paymentRequestId: number;
};
export type useGeneratePaymentRequestPdfMutation$variables = {
  input: GeneratePaymentRequestPdfInput;
};
export type useGeneratePaymentRequestPdfMutation$data = {
  readonly generatePaymentRequestPdf: {
    readonly string: string | null;
  };
};
export type useGeneratePaymentRequestPdfMutation = {
  response: useGeneratePaymentRequestPdfMutation$data;
  variables: useGeneratePaymentRequestPdfMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "GeneratePaymentRequestPdfPayload",
    "kind": "LinkedField",
    "name": "generatePaymentRequestPdf",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "string",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useGeneratePaymentRequestPdfMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useGeneratePaymentRequestPdfMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c51200432bba436599fb77c00af054b1",
    "id": null,
    "metadata": {},
    "name": "useGeneratePaymentRequestPdfMutation",
    "operationKind": "mutation",
    "text": "mutation useGeneratePaymentRequestPdfMutation(\n  $input: GeneratePaymentRequestPdfInput!\n) {\n  generatePaymentRequestPdf(input: $input) {\n    string\n  }\n}\n"
  }
};
})();

(node as any).hash = "98d5743d8e04009d838505b0bf1eaff2";

export default node;
