/**
 * @flow
 * @relayHash afdd0c48f3a1af4d2694aed0500551b7
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type saveSongMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    name: string;
    artist?: ?string;
    coverImageUrl: string;
    genreId?: ?number;
  };
|};
export type saveSongMutationResponse = {|
  +saveSong: ?{|
    +song: ?{|
      +audioId: number;
    |};
  |};
|};
*/


/*
mutation saveSongMutation(
  $input: SaveSongInput!
) {
  saveSong(input: $input) {
    song {
      audioId
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
        "type": "SaveSongInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "saveSongMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "SaveSongInput!"
          }
        ],
        "concreteType": "SaveSongPayload",
        "name": "saveSong",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Song",
            "name": "song",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "audioId",
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
  "name": "saveSongMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "SaveSongInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "saveSongMutation",
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
            "type": "SaveSongInput!"
          }
        ],
        "concreteType": "SaveSongPayload",
        "name": "saveSong",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Song",
            "name": "song",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "audioId",
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
  "text": "mutation saveSongMutation(\n  $input: SaveSongInput!\n) {\n  saveSong(input: $input) {\n    song {\n      audioId\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
