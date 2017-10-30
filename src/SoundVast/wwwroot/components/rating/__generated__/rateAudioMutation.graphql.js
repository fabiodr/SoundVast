/**
 * @flow
 * @relayHash 96cef923a9e3ae2e4f2a7cfd4006f244
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
    +likes: number;
    +dislikes: number;
  |};
|};
*/


/*
mutation rateAudioMutation(
  $audioRating: AudioRatingInput!
) {
  rateAudio(audioRating: $audioRating) {
    likes
    dislikes
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
      }
    ]
  },
  "text": "mutation rateAudioMutation(\n  $audioRating: AudioRatingInput!\n) {\n  rateAudio(audioRating: $audioRating) {\n    likes\n    dislikes\n    id\n  }\n}\n"
};

module.exports = batch;
