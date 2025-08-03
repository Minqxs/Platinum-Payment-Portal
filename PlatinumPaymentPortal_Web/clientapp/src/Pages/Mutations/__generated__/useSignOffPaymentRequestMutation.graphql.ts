/**
 * @generated SignedSource<<6c6746e618b8a8f34dbb7de92b1e4e36>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SignOffPaymentRequestInput = {
  input: PaymentRequestDeleteInput;
};
export type PaymentRequestDeleteInput = {
  paymentRequestId: string;
};
export type useSignOffPaymentRequestMutation$variables = {
  input: SignOffPaymentRequestInput;
};
export type useSignOffPaymentRequestMutation$data = {
  readonly signOffPaymentRequest: {
    readonly paymentRequest: {
      readonly id: string;
    } | null;
  };
};
export type useSignOffPaymentRequestMutation = {
  response: useSignOffPaymentRequestMutation$data;
  variables: useSignOffPaymentRequestMutation$variables;
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
    "concreteType": "SignOffPaymentRequestPayload",
    "kind": "LinkedField",
    "name": "signOffPaymentRequest",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PaymentRequest",
        "kind": "LinkedField",
        "name": "paymentRequest",
        "plural": false,
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useSignOffPaymentRequestMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useSignOffPaymentRequestMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "309e348ef230f606e29cad9f37d6be23",
    "id": null,
    "metadata": {},
    "name": "useSignOffPaymentRequestMutation",
    "operationKind": "mutation",
    "text": "mutation useSignOffPaymentRequestMutation(\n  $input: SignOffPaymentRequestInput!\n) {\n  signOffPaymentRequest(input: $input) {\n    paymentRequest {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "83773b66725d37eb25c93232a740440d";

export default node;
