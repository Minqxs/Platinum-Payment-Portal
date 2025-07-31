/**
 * @generated SignedSource<<b31e96d9b5a3b3ffbaf2d91e59136ece>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CreatePaymentRequestInput = {
  input: PaymentRequestCreateInput;
};
export type PaymentRequestCreateInput = {
  departmentId: string;
  description: string;
  invoiceDate: any;
  managerId: string;
  paymentDetails: string;
  paymentRecipient: string;
  paymentRequestId: string;
  paymentRequestedDate: any;
  proofOfPayment?: any | null | undefined;
  submittedById: string;
  supplierInvoice?: any | null | undefined;
};
export type useCreatePaymentRequestMutation$variables = {
  input: CreatePaymentRequestInput;
};
export type useCreatePaymentRequestMutation$data = {
  readonly createPaymentRequest: {
    readonly paymentRequest: {
      readonly id: string;
    } | null | undefined;
  };
};
export type useCreatePaymentRequestMutation = {
  response: useCreatePaymentRequestMutation$data;
  variables: useCreatePaymentRequestMutation$variables;
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
    "concreteType": "CreatePaymentRequestPayload",
    "kind": "LinkedField",
    "name": "createPaymentRequest",
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
    "name": "useCreatePaymentRequestMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useCreatePaymentRequestMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7049697d87c3d589f979a17ce9b7fb73",
    "id": null,
    "metadata": {},
    "name": "useCreatePaymentRequestMutation",
    "operationKind": "mutation",
    "text": "mutation useCreatePaymentRequestMutation(\n  $input: CreatePaymentRequestInput!\n) {\n  createPaymentRequest(input: $input) {\n    paymentRequest {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ad949e7b6fb7e3114c100e9304248bf8";

export default node;
