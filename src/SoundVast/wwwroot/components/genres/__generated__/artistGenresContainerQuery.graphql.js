/**
 * @flow
 * @relayHash 7622f7d123f9acbcd942bfee30a81f78
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type artistGenresContainerQueryResponse = {|
  +genres: ?$ReadOnlyArray<?{| |}>;
|};
*/


/*
query artistGenresContainerQuery {
  genres {
    ...artistGenresContainer_genres
    id
  }
}

fragment artistGenresContainer_genres on Genre {
  id
  name
  coverImageUrl
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "artistGenresContainerQuery",
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
            "name": "artistGenresContainer_genres",
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
  "name": "artistGenresContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "artistGenresContainerQuery",
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "coverImageUrl",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query artistGenresContainerQuery {\n  genres {\n    ...artistGenresContainer_genres\n    id\n  }\n}\n\nfragment artistGenresContainer_genres on Genre {\n  id\n  name\n  coverImageUrl\n}\n"
};

module.exports = batch;
