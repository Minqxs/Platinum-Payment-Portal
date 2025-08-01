/**
 * @generated SignedSource<<dc98ebad0864f8070369359a3c0fdae1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ReaderFragment} from 'relay-runtime';
import {FragmentRefs} from "relay-runtime";

export type InvoiceCapture_requestPayment$data = {
    readonly coverSheetPdfPath: string | null | undefined;
    readonly department: {
        readonly label: string;
        readonly value: number;
    };
    readonly id: string;
    readonly invoiceDate: any;
    readonly invoiceFile: ReadonlyArray<any>;
    readonly invoiceFileName: string;
    readonly isSignedOff: boolean;
    readonly manager: {
        readonly label: string;
        readonly value: string;
    };
    readonly paymentDateRequested: any;
    readonly paymentDescription: string;
    readonly paymentRicpientName: string;
    readonly proofOfPaymentFile: ReadonlyArray<any> | null | undefined;
    readonly proofOfPaymentFileName: string | null | undefined;
    readonly ricpientBankDetails: string;
    readonly " $fragmentType": "InvoiceCapture_requestPayment";
};
export type InvoiceCapture_requestPayment$key = {
    readonly " $data"?: InvoiceCapture_requestPayment$data;
    readonly " $fragmentSpreads": FragmentRefs<"InvoiceCapture_requestPayment">;
};

const node: ReaderFragment = (function () {
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
        "metadata": null,
        "name": "InvoiceCapture_requestPayment",
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
                    {
                        "alias": "label",
                        "args": null,
                        "kind": "ScalarField",
                        "name": "firstName",
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

(node as any).hash = "406acb1fa46cbd1eef449f3b52abad3e";

export default node;
