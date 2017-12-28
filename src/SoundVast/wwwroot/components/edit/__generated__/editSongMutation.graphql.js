/**
 * @flow
 * @relayHash e4bde66d28706fa658bbbad548b17a1a
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type editSongMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    pendingSongId: number;
    editAccepted: boolean;
  };
|};
export type editSongMutationResponse = {|
  +editSong: ?{|
    +song: {|
      +audioId: number;
      +name: string;
      +artist: ?string;
      +coverImageUrl: string;
    |};
  |};
|};
*/


/*
mutation editSongMutation(
  $input: EditSongInput!
) {
  editSong(input: $input) {
    song {
      audioId
      name
      artist
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
        "type": "EditSongInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "editSongMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "EditSongInput!"
          }
        ],
        "concreteType": "EditSongPayload",
        "name": "editSong",
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
                "name": "name",
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
  "name": "editSongMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "EditSongInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "editSongMutation",
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
            "type": "EditSongInput!"
          }
        ],
        "concreteType": "EditSongPayload",
        "name": "editSong",
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
                "name": "name",
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
  "text": "mutation editSongMutation(\n  $input: EditSongInput!\n) {\n  editSong(input: $input) {\n    song {\n      audioId\n      name\n      artist\n      coverImageUrl\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
