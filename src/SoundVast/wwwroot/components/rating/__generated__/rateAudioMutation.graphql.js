/**
 * @flow
 * @relayHash 775c0b00cb522e8880087e9a395a987b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type rateAudioMutationVariables = {|
  input: {
    clientMutationId?: ?string,
    id: number,
    liked: boolean,
  },
|};
export type rateAudioMutationResponse = {|
  +rateAudio: ?{|
    +rating: ?{|
      +audio: ?{|
        +likes: number,
        +dislikes: number,
      |},
    |},
  |},
|};
*/


/*
mutation rateAudioMutation(
  $input: RateInput!
) {
  rateAudio(input: $input) {
    rating {
      audio {
        __typename
        likes
        dislikes
        id
      }
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RateInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "RateInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "likes",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "dislikes",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "rateAudioMutation",
  "id": null,
  "text": "mutation rateAudioMutation(\n  $input: RateInput!\n) {\n  rateAudio(input: $input) {\n    rating {\n      audio {\n        __typename\n        likes\n        dislikes\n        id\n      }\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "rateAudioMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "rateAudio",
        "storageKey": null,
        "args": v1,
        "concreteType": "RateAudioPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "rating",
            "storageKey": null,
            "args": null,
            "concreteType": "Rating",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "audio",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                  v2,
                  v3
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "rateAudioMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "rateAudio",
        "storageKey": null,
        "args": v1,
        "concreteType": "RateAudioPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "rating",
            "storageKey": null,
            "args": null,
            "concreteType": "Rating",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "audio",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  },
                  v2,
                  v3,
                  v4
                ]
              },
              v4
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '6c6ddc6a2b3ac98fb51cde8950bc1cb4';
module.exports = node;
