/**
 * @generated SignedSource<<d2c6a7f1704e7c05822c677d50d0ff8b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type RoleEnum = "ADMIN" | "EMPLOYEE" | "MANAGER" | "%future added value";
export type UserContextQuery$variables = {};
export type UserContextQuery$data = {
  readonly me: {
    readonly id: string;
    readonly roles: ReadonlyArray<RoleEnum>;
    readonly userName: string | null;
  };
};
export type UserContextQuery = {
  response: UserContextQuery$data;
  variables: UserContextQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "me",
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserContextQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UserContextQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "5a38576f6b532a1cd83d284030d8d391",
    "id": null,
    "metadata": {},
    "name": "UserContextQuery",
    "operationKind": "query",
    "text": "query UserContextQuery {\n  me {\n    id\n    userName\n    roles\n  }\n}\n"
  }
};
})();

(node as any).hash = "dc1a0610f353276f41acc43377e3833c";

export default node;
