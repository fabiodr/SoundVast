/**
 * @flow
 * @relayHash 4e533555ceb3e0136d94cd41c3b5bace
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type generateResetPasswordTokenMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    email: string;
  };
|};
export type generateResetPasswordTokenMutationResponse = {|
  +generateResetPasswordToken: ?{|
    +user: ?{|
      +id: ?string;
    |};
    +passwordResetToken: ?string;
  |};
|};
*/


/*
mutation generateResetPasswordTokenMutation(
  $input: GenerateResetPasswordTokenInput!
) {
  generateResetPasswordToken(input: $input) {
    user {
      id
    }
    passwordResetToken
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "GenerateResetPasswordTokenInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "generateResetPasswordTokenMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "GenerateResetPasswordTokenInput!"
          }
        ],
        "concreteType": "GenerateResetPasswordTokenPayload",
        "name": "generateResetPasswordToken",
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
            "name": "passwordResetToken",
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
  "name": "generateResetPasswordTokenMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "GenerateResetPasswordTokenInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "generateResetPasswordTokenMutation",
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
            "type": "GenerateResetPasswordTokenInput!"
          }
        ],
        "concreteType": "GenerateResetPasswordTokenPayload",
        "name": "generateResetPasswordToken",
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
            "name": "passwordResetToken",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation generateResetPasswordTokenMutation(\n  $input: GenerateResetPasswordTokenInput!\n) {\n  generateResetPasswordToken(input: $input) {\n    user {\n      id\n    }\n    passwordResetToken\n  }\n}\n"
};

module.exports = batch;
