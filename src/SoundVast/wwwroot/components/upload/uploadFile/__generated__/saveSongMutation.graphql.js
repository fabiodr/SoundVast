/**
 * @flow
 * @relayHash a77f3d0581393fdc5c7d5b5a397e0272
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type saveSongMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    name: string;
    artists?: ?$ReadOnlyArray<?{
      id?: ?number;
      artist?: ?string;
    }>;
    album?: ?{
      id?: ?number;
      album?: ?string;
    };
    releaseDate?: ?any;
    free?: ?boolean;
    tags?: ?$ReadOnlyArray<?{
      id?: ?number;
      tag?: ?string;
    }>;
    coverImageUrl: string;
    genreIds?: ?$ReadOnlyArray<?number>;
  };
|};
export type saveSongMutationResponse = {|
  +saveSong: ?{|
    +song: {|
      +user: ?{|
        +contributionScore: number;
      |};
    |};
    +contributionPoints: number;
  |};
|};
*/


/*
mutation saveSongMutation(
  $input: SaveSongInput!
) {
  saveSong(input: $input) {
    song {
      user {
        contributionScore
        id
      }
      id
    }
    contributionPoints
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
                    "name": "contributionScore",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "contributionPoints",
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
                    "name": "contributionScore",
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
            "name": "contributionPoints",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation saveSongMutation(\n  $input: SaveSongInput!\n) {\n  saveSong(input: $input) {\n    song {\n      user {\n        contributionScore\n        id\n      }\n      id\n    }\n    contributionPoints\n  }\n}\n"
};

module.exports = batch;
