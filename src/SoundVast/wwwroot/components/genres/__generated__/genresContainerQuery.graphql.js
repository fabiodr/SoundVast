/**
 * @flow
 * @relayHash d9029d55c6296c5c784ea12cb2ed1bda
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type genresContainerQueryResponse = {|
  +genres: ?$ReadOnlyArray<?{| |}>;
|};
*/


/*
query genresContainerQuery {
  genres {
    ...genresContainer_genres
    id
  }
}

fragment genresContainer_genres on Genre {
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
    "name": "genresContainerQuery",
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
            "name": "genresContainer_genres",
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
  "name": "genresContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "genresContainerQuery",
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
  "text": "query genresContainerQuery {\n  genres {\n    ...genresContainer_genres\n    id\n  }\n}\n\nfragment genresContainer_genres on Genre {\n  id\n  name\n  coverImageUrl\n}\n"
};

module.exports = batch;