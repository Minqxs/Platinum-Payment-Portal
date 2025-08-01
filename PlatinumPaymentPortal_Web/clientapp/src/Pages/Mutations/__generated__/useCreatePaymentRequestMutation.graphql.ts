/**
 * @generated SignedSource<<fe9587737711c174c314727b12babb0c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreatePaymentRequestInput = {
  input: PaymentRequestCreateInput;
};
export type PaymentRequestCreateInput = {
  departmentId: string;
  description: string;
  invoiceDate: string;
  managerId: string;
  paymentDetails: string;
  paymentRecipient: string;
  paymentRequestedDate: string;
  proofOfPayment?: File | null;
  supplierInvoice?: File | null;
};
export type useCreatePaymentRequestMutation$variables = {
  input: CreatePaymentRequestInput;
};
export type useCreatePaymentRequestMutation$data = {
  readonly createPaymentRequest: {
    readonly paymentRequest: {
      readonly coverSheetPdfPath: string | null;
      readonly id: string;
    } | null;
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "coverSheetPdfPath",
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
    "cacheID": "e43b73a3a7548fe2239edffd9cee56f1",
    "id": null,
    "metadata": {},
    "name": "useCreatePaymentRequestMutation",
    "operationKind": "mutation",
    "text": "mutation useCreatePaymentRequestMutation(\n  $input: CreatePaymentRequestInput!\n) {\n  createPaymentRequest(input: $input) {\n    paymentRequest {\n      id\n      coverSheetPdfPath\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ee511854093baf8d4c0d27784ad409e6";

export default node;
