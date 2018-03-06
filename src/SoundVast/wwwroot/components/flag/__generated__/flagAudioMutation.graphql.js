/**
 * @flow
 * @relayHash 767ab2744522ae9caf0ae92d5359515b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type flagAudioMutationVariables = {|
  input: {
    clientMutationId?: ?string,
    audioId: number,
    reason: string,
    additionalDetails?: ?string,
  },
|};
export type flagAudioMutationResponse = {|
  +flagAudio: ?{|
    +flag: ?{|
      +id: string,
    |},
  |},
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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "FlagAudioInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "flagAudio",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "FlagAudioInput!"
      }
    ],
    "concreteType": "FlagObjectPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "flag",
        "storageKey": null,
        "args": null,
        "concreteType": "Flag",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "flagAudioMutation",
  "id": null,
  "text": "mutation flagAudioMutation(\n  $input: FlagAudioInput!\n) {\n  flagAudio(input: $input) {\n    flag {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "flagAudioMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "flagAudioMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = 'cca47d2f6e7cea08123adc8e703f9508';
module.exports = node;
