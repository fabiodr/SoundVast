/**
 * @flow
 * @relayHash fe97b18101f5080bae63881104a05f53
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type resetPasswordMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    password: string;
    userId: string;
    token: string;
  };
|};
export type resetPasswordMutationResponse = {|
  +resetPassword: ?{|
    +clientMutationId: ?string;
  |};
|};
*/


/*
mutation resetPasswordMutation(
  $input: ResetPasswordInput!
) {
  resetPassword(input: $input) {
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
        "type": "ResetPasswordInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "resetPasswordMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "ResetPasswordInput!"
          }
        ],
        "concreteType": "ResetPasswordPayload",
        "name": "resetPassword",
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
  "name": "resetPasswordMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "ResetPasswordInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "resetPasswordMutation",
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
            "type": "ResetPasswordInput!"
          }
        ],
        "concreteType": "ResetPasswordPayload",
        "name": "resetPassword",
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
  "text": "mutation resetPasswordMutation(\n  $input: ResetPasswordInput!\n) {\n  resetPassword(input: $input) {\n    clientMutationId\n  }\n}\n"
};

module.exports = batch;
