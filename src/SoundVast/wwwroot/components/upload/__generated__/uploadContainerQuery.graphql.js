/**
 * @flow
 * @relayHash 2f4af600d2bc8706a005b01647558bee
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type uploadContainerQueryResponse = {|
  +genres: ?$ReadOnlyArray<?{| |}>;
  +user: ?{| |};
|};
*/


/*
query uploadContainerQuery {
  genres {
    ...genresFieldContainer_genres
    id
  }
  user {
    ...withAuthorization_user
    id
  }
}

fragment genresFieldContainer_genres on Genre {
  id
  name
}

fragment withAuthorization_user on ApplicationUser {
  userName
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "uploadContainerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Genre",
        "name": "genres",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "genresFieldContainer_genres",
            "args": null
          }
        ],
        "storageKey": null
      },
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
            "name": "withAuthorization_user",
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
  "name": "uploadContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "uploadContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Genre",
        "name": "genres",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "Genre",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      },
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
  "text": "query uploadContainerQuery {\n  genres {\n    ...genresFieldContainer_genres\n    id\n  }\n  user {\n    ...withAuthorization_user\n    id\n  }\n}\n\nfragment genresFieldContainer_genres on Genre {\n  id\n  name\n}\n\nfragment withAuthorization_user on ApplicationUser {\n  userName\n}\n"
};

module.exports = batch;
