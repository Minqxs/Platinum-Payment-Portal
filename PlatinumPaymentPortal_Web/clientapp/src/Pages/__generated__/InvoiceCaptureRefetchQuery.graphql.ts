/**
 * @generated SignedSource<<a304bc7d9a953c33aa1f23e72965d747>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest} from 'relay-runtime';
import {FragmentRefs} from "relay-runtime";

export type InvoiceCaptureRefetchQuery$variables = Record<PropertyKey, never>;
export type InvoiceCaptureRefetchQuery$data = {
    readonly " $fragmentSpreads": FragmentRefs<"InvoiceCapture_Query">;
};
export type InvoiceCaptureRefetchQuery = {
    response: InvoiceCaptureRefetchQuery$data;
    variables: InvoiceCaptureRefetchQuery$variables;
};

const node: ConcreteRequest = {
    "fragment": {
        "argumentDefinitions": [],
        "kind": "Fragment",
        "metadata": null,
        "name": "InvoiceCaptureRefetchQuery",
        "selections": [
            {
                "args": null,
                "kind": "FragmentSpread",
                "name": "InvoiceCapture_Query"
            }
        ],
        "type": "Query",
        "abstractKey": null
    },
    "kind": "Request",
    "operation": {
        "argumentDefinitions": [],
        "kind": "Operation",
        "name": "InvoiceCaptureRefetchQuery",
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
        ]
    },
    "params": {
        "cacheID": "7505fd525e5dd3f41447f18785293944",
        "id": null,
        "metadata": {},
        "name": "InvoiceCaptureRefetchQuery",
        "operationKind": "query",
        "text": "query InvoiceCaptureRefetchQuery {\n  ...InvoiceCapture_Query\n}\n\nfragment InvoiceCapture_Query on Query {\n  paymentRequests {\n    id\n  }\n}\n"
    }
};

(node as any).hash = "d867ce6c16a7e3d04488622119c3abb5";

export default node;
