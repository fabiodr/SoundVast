/**
 * @flow
 * @relayHash 2e35c156f7c13cd2f47c197c873368ca
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type primaryLayoutContainerQueryResponse = {|
  +user: ?{| |};
  +loginProviders: ?$ReadOnlyArray<?{| |}>;
|};
*/


/*
query primaryLayoutContainerQuery {
  user {
    ...headerContainer_user
    id
  }
  loginProviders {
    ...socialLoginsContainer_loginProviders
  }
}

fragment headerContainer_user on ApplicationUser {
  userName
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
            "kind": "FragmentSpread",
            "name": "headerContainer_user",
            "args": null
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
  "text": "query primaryLayoutContainerQuery {\n  user {\n    ...headerContainer_user\n    id\n  }\n  loginProviders {\n    ...socialLoginsContainer_loginProviders\n  }\n}\n\nfragment headerContainer_user on ApplicationUser {\n  userName\n}\n\nfragment socialLoginsContainer_loginProviders on LoginProvider {\n  name\n  displayName\n}\n"
};

module.exports = batch;
