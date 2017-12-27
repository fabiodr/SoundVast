/**
 * @flow
 * @relayHash a6a1ccdbedbafd0dfdde66ae71766346
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type addSongToPlaylistMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    playlistId: number;
    songId: number;
  };
|};
export type addSongToPlaylistMutationResponse = {|
  +addSongToPlaylist: ?{|
    +playlist: ?{|
      +playlistId: number;
      +name: string;
      +coverImageUrl: ?string;
    |};
  |};
|};
*/


/*
mutation addSongToPlaylistMutation(
  $input: AddSongToPlaylistInput!
) {
  addSongToPlaylist(input: $input) {
    playlist {
      playlistId
      name
      coverImageUrl
      id
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "AddSongToPlaylistInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "addSongToPlaylistMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "AddSongToPlaylistInput!"
          }
        ],
        "concreteType": "AddSongToPlaylistPayload",
        "name": "addSongToPlaylist",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Playlist",
            "name": "playlist",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "playlistId",
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
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "addSongToPlaylistMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "AddSongToPlaylistInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "addSongToPlaylistMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "AddSongToPlaylistInput!"
          }
        ],
        "concreteType": "AddSongToPlaylistPayload",
        "name": "addSongToPlaylist",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Playlist",
            "name": "playlist",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "playlistId",
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
                "name": "id",
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
  "text": "mutation addSongToPlaylistMutation(\n  $input: AddSongToPlaylistInput!\n) {\n  addSongToPlaylist(input: $input) {\n    playlist {\n      playlistId\n      name\n      coverImageUrl\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
