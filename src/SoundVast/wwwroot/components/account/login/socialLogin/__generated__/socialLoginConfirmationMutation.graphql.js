/**
 * @flow
 * @relayHash 377dfd68f375c4a610a46489e4835aaa
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type socialLoginConfirmationMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    email: string;
  };
|};
export type socialLoginConfirmationMutationResponse = {|
  +externalLoginConfirmation: ?{|
    +clientMutationId: ?string;
  |};
|};
*/


/*
mutation socialLoginConfirmationMutation(
  $input: ExternalLoginConfirmationInput!
) {
  externalLoginConfirmation(input: $input) {
    clientMutationId
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "ExternalLoginConfirmationInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "socialLoginConfirmationMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "ExternalLoginConfirmationInput!"
          }
        ],
        "concreteType": "ExternalLoginConfirmationPayload",
        "name": "externalLoginConfirmation",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "clientMutationId",
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
  "name": "socialLoginConfirmationMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "ExternalLoginConfirmationInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "socialLoginConfirmationMutation",
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
            "type": "ExternalLoginConfirmationInput!"
          }
        ],
        "concreteType": "ExternalLoginConfirmationPayload",
        "name": "externalLoginConfirmation",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "clientMutationId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation socialLoginConfirmationMutation(\n  $input: ExternalLoginConfirmationInput!\n) {\n  externalLoginConfirmation(input: $input) {\n    clientMutationId\n  }\n}\n"
};

module.exports = batch;
