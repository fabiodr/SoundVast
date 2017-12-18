/**
 * @flow
 * @relayHash bdf4f9043651f03d4f67a1190d58bfc3
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type editSongModalContainerQueryResponse = {|
  +user: ?{|
    +id: ?string;
  |};
  +song: ?{| |};
|};
*/


/*
query editSongModalContainerQuery(
  $songId: Int!
) {
  user {
    id
  }
  song(id: $songId) {
    ...editSongModalContainer_song
    id
  }
}

fragment editSongModalContainer_song on Song {
  name
  coverImageUrl
  artist
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "songId",
        "type": "Int!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "editSongModalContainerQuery",
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
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "songId",
            "type": "Int!"
          }
        ],
        "concreteType": "Song",
        "name": "song",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "editSongModalContainer_song",
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
  "name": "editSongModalContainerQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "songId",
        "type": "Int!",
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
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "songId",
            "type": "Int!"
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
      }
    ]
  },
  "text": "query editSongModalContainerQuery(\n  $songId: Int!\n) {\n  user {\n    id\n  }\n  song(id: $songId) {\n    ...editSongModalContainer_song\n    id\n  }\n}\n\nfragment editSongModalContainer_song on Song {\n  name\n  coverImageUrl\n  artist\n}\n"
};

module.exports = batch;
