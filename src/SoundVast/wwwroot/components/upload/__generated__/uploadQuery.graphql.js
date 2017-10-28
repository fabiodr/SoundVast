/**
 * @flow
 * @relayHash 4b0629f3c4efa2e01c88bb314d1ed4c6
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type uploadQueryResponse = {|
  +genres: ?$ReadOnlyArray<?{| |}>;
|};
*/


/*
query uploadQuery {
  genres {
    ...genreFieldContainer_genres
    id
  }
}

fragment genreFieldContainer_genres on Genre {
  id
  name
  type
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "uploadQuery",
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
            "name": "genreFieldContainer_genres",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "AppQuery"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "uploadQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "uploadQuery",
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
                "name": "type",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query uploadQuery {\n  genres {\n    ...genreFieldContainer_genres\n    id\n  }\n}\n\nfragment genreFieldContainer_genres on Genre {\n  id\n  name\n  type\n}\n"
};

module.exports = batch;
