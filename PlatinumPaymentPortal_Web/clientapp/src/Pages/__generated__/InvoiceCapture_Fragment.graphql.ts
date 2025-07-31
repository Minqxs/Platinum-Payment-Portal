/**
 * @generated SignedSource<<33f454fa1fd2a44c5601632bd829331c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InvoiceCapture_Fragment$data = {
  readonly coverSheetPdfPath: string | null | undefined;
  readonly department: {
    readonly id: number;
    readonly nameOfDepartment: string;
  };
  readonly invoiceDate: any;
  readonly invoiceFile: ReadonlyArray<any>;
  readonly invoiceFileName: string;
  readonly isSignedOff: boolean;
  readonly manager: {
    readonly fullName: string;
    readonly id: number;
  };
  readonly paymentDateRequested: any;
  readonly paymentDescription: string;
  readonly paymentRicpientName: string;
  readonly proofOfPaymentFile: ReadonlyArray<any> | null | undefined;
  readonly proofOfPaymentFileName: string | null | undefined;
  readonly ricpientBankDetails: string;
  readonly " $fragmentType": "InvoiceCapture_Fragment";
};
export type InvoiceCapture_Fragment$key = {
  readonly " $data"?: InvoiceCapture_Fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"InvoiceCapture_Fragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InvoiceCapture_Fragment",
  "selections": [
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
          "alias": null,
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
      "concreteType": "Manager",
      "kind": "LinkedField",
      "name": "manager",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "fullName",
          "storageKey": null
        },
        (v0/*: any*/)
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
  "type": "PaymentRequest",
  "abstractKey": null
};
})();

(node as any).hash = "46b36fd9e27540e7203374ec523d7f95";

export default node;
