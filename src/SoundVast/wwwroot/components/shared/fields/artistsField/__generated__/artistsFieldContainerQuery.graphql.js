/**
 * @flow
 * @relayHash b5f74385b0b9cddece57a5dd5f33113e
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type artistsFieldContainerQueryResponse = {| |};
*/


/*
query artistsFieldContainerQuery(
  $artistsCount: Int!
  $searchQuery: String
) {
  ...artistsFieldContainer_artists_3EQJ3t
}

fragment artistsFieldContainer_artists_3EQJ3t on Query {
  artists(first: $artistsCount, searchQuery: $searchQuery) {
    items {
      id
      name
      coverImageUrl
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "artistsCount",
        "type": "Int!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "searchQuery",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "artistsFieldContainerQuery",
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "artistsFieldContainer_artists",
        "args": [
          {
            "kind": "Variable",
            "name": "artistsCount",
            "variableName": "artistsCount",
            "type": null
          }
        ]
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "artistsFieldContainerQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "artistsCount",
        "type": "Int!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "searchQuery",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "artistsFieldContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "artistsCount",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "searchQuery",
            "variableName": "searchQuery",
            "type": "String"
          }
        ],
        "concreteType": "ArtistPayloadConnection",
        "name": "artists",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Artist",
            "name": "items",
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
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query artistsFieldContainerQuery(\n  $artistsCount: Int!\n  $searchQuery: String\n) {\n  ...artistsFieldContainer_artists_3EQJ3t\n}\n\nfragment artistsFieldContainer_artists_3EQJ3t on Query {\n  artists(first: $artistsCount, searchQuery: $searchQuery) {\n    items {\n      id\n      name\n      coverImageUrl\n    }\n  }\n}\n"
};

module.exports = batch;
