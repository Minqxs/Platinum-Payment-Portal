/**
 * @generated SignedSource<<aa33da2f793fa8b1a437901f5dc81e09>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdatePaymentRequestInput = {
  input: PaymentRequestEditInput;
};
export type PaymentRequestEditInput = {
  departmentId: string;
  description: string;
  invoiceDate: string;
  managerId: string;
  paymentDetails: string;
  paymentRecipient: string;
  paymentRequestId: string;
  paymentRequestedDate: string;
  proofOfPayment?: File | null;
  supplierInvoice?: File | null;
};
export type useEditPaymentRequestMutation$variables = {
  input: UpdatePaymentRequestInput;
};
export type useEditPaymentRequestMutation$data = {
  readonly updatePaymentRequest: {
    readonly paymentRequest: {
      readonly id: string;
    } | null;
  };
};
export type useEditPaymentRequestMutation = {
  response: useEditPaymentRequestMutation$data;
  variables: useEditPaymentRequestMutation$variables;
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
    "concreteType": "UpdatePaymentRequestPayload",
    "kind": "LinkedField",
    "name": "updatePaymentRequest",
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
    "name": "useEditPaymentRequestMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useEditPaymentRequestMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ffca1f1c95aa62374643b058959c23ae",
    "id": null,
    "metadata": {},
    "name": "useEditPaymentRequestMutation",
    "operationKind": "mutation",
    "text": "mutation useEditPaymentRequestMutation(\n  $input: UpdatePaymentRequestInput!\n) {\n  updatePaymentRequest(input: $input) {\n    paymentRequest {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ccdcb3fb0b33707d99d6103a3f344c8a";

export default node;
