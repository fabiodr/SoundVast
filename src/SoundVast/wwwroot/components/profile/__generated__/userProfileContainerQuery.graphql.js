/**
 * @flow
 * @relayHash 975be592b26b2548cbeefc12f215684c
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type userProfileContainerQueryResponse = {|
  +user: ?{| |};
|};
*/


/*
query userProfileContainerQuery {
  user {
    ...userProfileContainer_user
    id
  }
}

fragment userProfileContainer_user on ApplicationUser {
  userName
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "userProfileContainerQuery",
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
            "name": "userProfileContainer_user",
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
  "name": "userProfileContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "userProfileContainerQuery",
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
  "text": "query userProfileContainerQuery {\n  user {\n    ...userProfileContainer_user\n    id\n  }\n}\n\nfragment userProfileContainer_user on ApplicationUser {\n  userName\n}\n"
};

module.exports = batch;
