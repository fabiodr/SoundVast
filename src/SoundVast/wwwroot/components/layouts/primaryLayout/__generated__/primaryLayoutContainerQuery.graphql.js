/**
 * @flow
 * @relayHash 29e0f606e4420fbc3fe331818c2b3f4e
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type primaryLayoutContainerQueryResponse = {|
  +user: ?{|
    +userId: string;
    +userName: string;
  |};
  +loginProviders: ?$ReadOnlyArray<?{| |}>;
|};
*/


/*
query primaryLayoutContainerQuery {
  user {
    userId
    userName
    id
  }
  loginProviders {
    ...socialLoginsContainer_loginProviders
  }
}

fragment socialLoginsContainer_loginProviders on LoginProvider {
  name
  displayName
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "primaryLayoutContainerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "ApplicationUser",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "userId",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "userName",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "LoginProvider",
        "name": "loginProviders",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "socialLoginsContainer_loginProviders",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "primaryLayoutContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "primaryLayoutContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "ApplicationUser",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "userId",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "userName",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "LoginProvider",
        "name": "loginProviders",
        "plural": true,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "LoginProvider",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "displayName",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query primaryLayoutContainerQuery {\n  user {\n    userId\n    userName\n    id\n  }\n  loginProviders {\n    ...socialLoginsContainer_loginProviders\n  }\n}\n\nfragment socialLoginsContainer_loginProviders on LoginProvider {\n  name\n  displayName\n}\n"
};

module.exports = batch;
