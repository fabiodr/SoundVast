/**
 * @flow
 * @relayHash cd73f9a3d4f832359d5f4acd19e4934b
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type editSongModalContainerQueryResponse = {| |};
*/


/*
query editSongModalContainerQuery(
  $songId: Int
) {
  ...editSongModalContainer_1AE3IT
}

fragment editSongModalContainer_1AE3IT on Query {
  user {
    id
  }
  songGenres {
    ...songGenresFieldContainer_genres
    id
  }
  song(id: $songId) {
    name
    coverImageUrl
    free
    artists {
      name
      id
    }
    genres {
      id
      name
    }
    id
  }
}

fragment songGenresFieldContainer_genres on Genre {
  id
  name
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "songId",
        "type": "Int",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "editSongModalContainerQuery",
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "editSongModalContainer",
        "args": [
          {
            "kind": "Variable",
            "name": "songId",
            "variableName": "songId",
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
  "name": "editSongModalContainerQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "songId",
        "type": "Int",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "editSongModalContainerQuery",
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
        "concreteType": "SongGenre",
        "name": "songGenres",
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
          }
        ],
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "songId",
            "type": "Int"
          }
        ],
        "concreteType": "Song",
        "name": "song",
        "plural": false,
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "free",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Artist",
            "name": "artists",
            "plural": true,
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
            "concreteType": "SongGenre",
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
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              }
            ],
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
  "text": "query editSongModalContainerQuery(\n  $songId: Int\n) {\n  ...editSongModalContainer_1AE3IT\n}\n\nfragment editSongModalContainer_1AE3IT on Query {\n  user {\n    id\n  }\n  songGenres {\n    ...songGenresFieldContainer_genres\n    id\n  }\n  song(id: $songId) {\n    name\n    coverImageUrl\n    free\n    artists {\n      name\n      id\n    }\n    genres {\n      id\n      name\n    }\n    id\n  }\n}\n\nfragment songGenresFieldContainer_genres on Genre {\n  id\n  name\n}\n"
};

module.exports = batch;
