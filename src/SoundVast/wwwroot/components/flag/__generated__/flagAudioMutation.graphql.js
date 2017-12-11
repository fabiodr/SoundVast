/**
 * @flow
 * @relayHash 5832b777c3b82ceceac079cb9db91c12
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type flagAudioMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    audioId: number;
    reason: string;
    additionalDetails?: ?string;
  };
|};
export type flagAudioMutationResponse = {|
  +flagAudio: ?{|
    +flag: ?{|
      +id: string;
    |};
  |};
|};
*/


/*
mutation flagAudioMutation(
  $input: FlagAudioInput!
) {
  flagAudio(input: $input) {
    flag {
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
        "type": "FlagAudioInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "flagAudioMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "FlagAudioInput!"
          }
        ],
        "concreteType": "FlagObjectPayload",
        "name": "flagAudio",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Flag",
            "name": "flag",
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
  "name": "flagAudioMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "FlagAudioInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "flagAudioMutation",
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
            "type": "FlagAudioInput!"
          }
        ],
        "concreteType": "FlagObjectPayload",
        "name": "flagAudio",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Flag",
            "name": "flag",
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
  "text": "mutation flagAudioMutation(\n  $input: FlagAudioInput!\n) {\n  flagAudio(input: $input) {\n    flag {\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
