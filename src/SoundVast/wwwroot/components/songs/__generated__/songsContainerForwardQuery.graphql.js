/**
 * @flow
 * @relayHash 83940f42f6f1ada4d23bc9df7c1ef44c
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type songsContainerForwardQueryResponse = {| |};
*/


/*
query songsContainerForwardQuery(
  $first: Int!
  $after: String
) {
  ...songsContainer_songs
}

fragment songsContainer_songs on AppQuery {
  songs(first: $first, after: $after) {
    edges {
      node {
        __typename
        songId
        name
        coverImageUrl
        artist
        id
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "first",
        "type": "Int!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "after",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "songsContainerForwardQuery",
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "songsContainer_songs",
        "args": null
      }
    ],
    "type": "AppQuery"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "songsContainerForwardQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "first",
        "type": "Int!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "after",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "songsContainerForwardQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "after",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "first",
            "type": "Int"
          }
        ],
        "concreteType": "SongConnection",
        "name": "songs",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "SongEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Song",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "songId",
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
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "artist",
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
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "endCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "after",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "first",
            "type": "Int"
          }
        ],
        "handle": "connection",
        "name": "songs",
        "key": "songsContainer_songs",
        "filters": null
      }
    ]
  },
  "text": "query songsContainerForwardQuery(\n  $first: Int!\n  $after: String\n) {\n  ...songsContainer_songs\n}\n\nfragment songsContainer_songs on AppQuery {\n  songs(first: $first, after: $after) {\n    edges {\n      node {\n        __typename\n        songId\n        name\n        coverImageUrl\n        artist\n        id\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n"
};

module.exports = batch;
