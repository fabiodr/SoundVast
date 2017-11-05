/**
 * @flow
 * @relayHash 04ddb86e400d723300b362beb0f07f33
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type registerAccountMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    username: string;
    email: string;
    password: string;
  };
|};
export type registerAccountMutationResponse = {|
  +register: ?{|
    +user: ?{|
      +id: ?string;
      +email: string;
    |};
    +emailConfirmationToken: ?string;
  |};
|};
*/


/*
mutation registerAccountMutation(
  $input: RegisterAccountInput!
) {
  register(input: $input) {
    user {
      id
      email
    }
    emailConfirmationToken
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "RegisterAccountInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "registerAccountMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "RegisterAccountInput!"
          }
        ],
        "concreteType": "RegisterAccountPayload",
        "name": "register",
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "email",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "emailConfirmationToken",
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
  "name": "registerAccountMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "RegisterAccountInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "registerAccountMutation",
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
            "type": "RegisterAccountInput!"
          }
        ],
        "concreteType": "RegisterAccountPayload",
        "name": "register",
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "email",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "emailConfirmationToken",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation registerAccountMutation(\n  $input: RegisterAccountInput!\n) {\n  register(input: $input) {\n    user {\n      id\n      email\n    }\n    emailConfirmationToken\n  }\n}\n"
};

module.exports = batch;
