/**
 * @flow
 * @relayHash d9b234736984efca3914c9bfdcbc2245
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type headerContainerQueryResponse = {|
  +user: ?{| |};
|};
*/


/*
query headerContainerQuery {
  user {
    ...authorizedListContainer_user
    id
  }
}

fragment authorizedListContainer_user on ApplicationUser {
  userName
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "headerContainerQuery",
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
  "name": "headerContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "headerContainerQuery",
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
  "text": "query headerContainerQuery {\n  user {\n    ...authorizedListContainer_user\n    id\n  }\n}\n\nfragment authorizedListContainer_user on ApplicationUser {\n  userName\n}\n"
};

module.exports = batch;
