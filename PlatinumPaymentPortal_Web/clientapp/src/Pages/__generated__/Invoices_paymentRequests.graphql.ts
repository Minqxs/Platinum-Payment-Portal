/**
 * @generated SignedSource<<152f1da8ded15465857b9b66a5de3353>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Invoices_paymentRequests$data = {
  readonly paymentRequests: ReadonlyArray<{
    readonly coverSheetPdfPath: string | null;
    readonly department: {
      readonly label: string;
      readonly value: string;
    };
    readonly id: string;
    readonly invoiceDate: string;
    readonly invoiceFile: ReadonlyArray<any>;
    readonly invoiceFileName: string;
    readonly isSignedOff: boolean;
    readonly manager: {
      readonly label: string;
      readonly value: string;
    };
    readonly paymentDateRequested: string;
    readonly paymentDescription: string;
    readonly paymentRicpientName: string;
    readonly proofOfPaymentFile: ReadonlyArray<any> | null;
    readonly proofOfPaymentFileName: string | null;
    readonly ricpientBankDetails: string;
  }>;
  readonly " $fragmentType": "Invoices_paymentRequests";
};
export type Invoices_paymentRequests$key = {
  readonly " $data"?: Invoices_paymentRequests$data;
  readonly " $fragmentSpreads": FragmentRefs<"Invoices_paymentRequests">;
};

import  Invoices_paymentRequestsReFetchQuery_graphql from './ Invoices_paymentRequestsReFetchQuery.graphql';

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
      "operation":  Invoices_paymentRequestsReFetchQuery_graphql
    }
  },
  "name": "Invoices_paymentRequests",
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
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "coverSheetPdfPath",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Department",
          "kind": "LinkedField",
          "name": "department",
          "plural": false,
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
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "invoiceDate",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "invoiceFile",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "invoiceFileName",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isSignedOff",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "manager",
          "plural": false,
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
          "kind": "ScalarField",
          "name": "paymentDateRequested",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "paymentDescription",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "paymentRicpientName",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "proofOfPaymentFile",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "proofOfPaymentFileName",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "ricpientBankDetails",
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

(node as any).hash = "c970239e14faf88145e33518f9056d30";

export default node;
