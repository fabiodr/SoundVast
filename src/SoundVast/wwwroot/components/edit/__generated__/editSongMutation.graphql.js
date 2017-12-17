/**
 * @flow
 * @relayHash 3e2ba140da5df8243cb7d55f4c26502c
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type editSongMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    songId: number;
    name: string;
    artist?: ?string;
    free: boolean;
    coverImageUrl: string;
    genreId?: ?number;
  };
|};
export type editSongMutationResponse = {|
  +editSong: ?{|
    +song: {|
      +id: string;
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
                "name": "id",
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
  "text": "mutation editSongMutation(\n  $input: EditSongInput!\n) {\n  editSong(input: $input) {\n    song {\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
