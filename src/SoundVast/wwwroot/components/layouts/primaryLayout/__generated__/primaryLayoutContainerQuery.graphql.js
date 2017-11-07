/**
 * @flow
 * @relayHash 28bc4f9a8fb26830dfc3e3da9e7b3a6b
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type primaryLayoutContainerQueryResponse = {|
  +user: ?{| |};
|};
*/


/*
query primaryLayoutContainerQuery {
  user {
    ...authorizedListContainer_user
    ...unAuthorizedListContainer_user
    id
  }
}

fragment authorizedListContainer_user on ApplicationUser {
  userName
}

fragment unAuthorizedListContainer_user on ApplicationUser {
  userName
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
            "name": "authorizedListContainer_user",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "unAuthorizedListContainer_user",
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
      }
    ]
  },
  "text": "query primaryLayoutContainerQuery {\n  user {\n    ...authorizedListContainer_user\n    ...unAuthorizedListContainer_user\n    id\n  }\n}\n\nfragment authorizedListContainer_user on ApplicationUser {\n  userName\n}\n\nfragment unAuthorizedListContainer_user on ApplicationUser {\n  userName\n}\n"
};

module.exports = batch;
