/**
 * @generated SignedSource<<3eefb68c447632e2809e9adc6615199e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ReaderFragment} from 'relay-runtime';

export type RoleEnum = "ADMIN" | "DEPARTMENT_MANAGER" | "EMPLOYEE" | "%future added value";
import {FragmentRefs} from "relay-runtime";

export type UserContext_user$data = {
    readonly id: string;
    readonly roles: ReadonlyArray<RoleEnum>;
    readonly userName: string | null | undefined;
    readonly " $fragmentType": "UserContext_user";
};
export type UserContext_user$key = {
    readonly " $data"?: UserContext_user$data;
    readonly " $fragmentSpreads": FragmentRefs<"UserContext_user">;
};

const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserContext_user",
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
            "name": "userName",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "roles",
            "storageKey": null
        }
    ],
    "type": "User",
    "abstractKey": null
};

(node as any).hash = "2d8b4fa17f0227148c9bab53dd381b5b";

export default node;
