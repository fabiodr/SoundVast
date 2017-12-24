/**
 * @flow
 * @relayHash 7f8d502131807cce031d7e09cb16429f
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type createPlaylistMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    name: string;
    songId?: ?number;
  };
|};
export type createPlaylistMutationResponse = {|
  +createPlaylist: ?{|
    +playlist: ?{|
      +id: string;
    |};
  |};
|};
*/


/*
mutation createPlaylistMutation(
  $input: CreatePlaylistInput!
) {
  createPlaylist(input: $input) {
    playlist {
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
        "type": "CreatePlaylistInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "createPlaylistMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreatePlaylistInput!"
          }
        ],
        "concreteType": "CreatePlaylstPayload",
        "name": "createPlaylist",
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
  "name": "createPlaylistMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreatePlaylistInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "createPlaylistMutation",
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
            "type": "CreatePlaylistInput!"
          }
        ],
        "concreteType": "CreatePlaylstPayload",
        "name": "createPlaylist",
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
  "text": "mutation createPlaylistMutation(\n  $input: CreatePlaylistInput!\n) {\n  createPlaylist(input: $input) {\n    playlist {\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
