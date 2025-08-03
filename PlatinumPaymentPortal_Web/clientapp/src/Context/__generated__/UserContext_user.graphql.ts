/**
 * @generated SignedSource<<eb7642dde5359384fad1c4ed588ccc5a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type RoleEnum = "ADMIN" | "EMPLOYEE" | "MANAGER" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type UserContext_user$data = {
  readonly fullName: string;
  readonly id: string;
  readonly roles: ReadonlyArray<RoleEnum>;
  readonly userName: string | null;
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fullName",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "f5da441e917555daac765e3a3304541d";

export default node;
