/**
 * @flow
 * @relayHash 10a97eaf50c62e6b6fd29be48df6865e
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type saveLiveStreamMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    name: string;
    liveStreamUrl: string;
    coverImageUrl: string;
    genreId?: ?number;
  };
|};
export type saveLiveStreamMutationResponse = {|
  +saveLiveStream: ?{|
    +liveStream: {|
      +user: ?{|
        +contributionScore: number;
      |};
    |};
    +contributionPoints: number;
  |};
|};
*/


/*
mutation saveLiveStreamMutation(
  $input: SaveLiveStreamInput!
) {
  saveLiveStream(input: $input) {
    liveStream {
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
        "type": "SaveLiveStreamInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "saveLiveStreamMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "SaveLiveStreamInput!"
          }
        ],
        "concreteType": "SaveLiveStreamPayload",
        "name": "saveLiveStream",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "LiveStream",
            "name": "liveStream",
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
  "name": "saveLiveStreamMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "SaveLiveStreamInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "saveLiveStreamMutation",
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
            "type": "SaveLiveStreamInput!"
          }
        ],
        "concreteType": "SaveLiveStreamPayload",
        "name": "saveLiveStream",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "LiveStream",
            "name": "liveStream",
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
  "text": "mutation saveLiveStreamMutation(\n  $input: SaveLiveStreamInput!\n) {\n  saveLiveStream(input: $input) {\n    liveStream {\n      user {\n        contributionScore\n        id\n      }\n      id\n    }\n    contributionPoints\n  }\n}\n"
};

module.exports = batch;
