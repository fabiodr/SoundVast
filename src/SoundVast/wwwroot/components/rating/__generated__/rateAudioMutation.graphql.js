/**
 * @flow
 * @relayHash 9358071a5e304c76371aeb163695619a
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type rateAudioMutationVariables = {|
  audioRating: {
    audioId: number;
    liked: boolean;
  };
|};
export type rateAudioMutationResponse = {|
  +rateAudio: ?{|
    +audio: ?{|
      +likes: number;
      +dislikes: number;
    |};
  |};
|};
*/


/*
mutation rateAudioMutation(
  $audioRating: AudioRatingInput!
) {
  rateAudio(audioRating: $audioRating) {
    audio {
      __typename
      likes
      dislikes
      id
    }
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "audioRating",
        "type": "AudioRatingInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "rateAudioMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "audioRating",
            "variableName": "audioRating",
            "type": "AudioRatingInput!"
          }
        ],
        "concreteType": "Rating",
        "name": "rateAudio",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": null,
            "name": "audio",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "likes",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "dislikes",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "AppMutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "rateAudioMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "audioRating",
        "type": "AudioRatingInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "rateAudioMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "audioRating",
            "variableName": "audioRating",
            "type": "AudioRatingInput!"
          }
        ],
        "concreteType": "Rating",
        "name": "rateAudio",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": null,
            "name": "audio",
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
                "name": "likes",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "dislikes",
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
      }
    ]
  },
  "text": "mutation rateAudioMutation(\n  $audioRating: AudioRatingInput!\n) {\n  rateAudio(audioRating: $audioRating) {\n    audio {\n      __typename\n      likes\n      dislikes\n      id\n    }\n    id\n  }\n}\n"
};

module.exports = batch;
