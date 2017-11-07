/**
 * @flow
 * @relayHash a9246bccfec2093ede709a57a710a420
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type registerMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    username: string;
    email: string;
    password: string;
  };
|};
export type registerMutationResponse = {|
  +register: ?{|
    +user: ?{|
      +id: ?string;
      +email: ?string;
    |};
    +emailConfirmationToken: ?string;
  |};
|};
*/


/*
mutation registerMutation(
  $input: RegisterInput!
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
        "type": "RegisterInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "registerMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "RegisterInput!"
          }
        ],
        "concreteType": "RegisterPayload",
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
  "name": "registerMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "RegisterInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "registerMutation",
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
            "type": "RegisterInput!"
          }
        ],
        "concreteType": "RegisterPayload",
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
  "text": "mutation registerMutation(\n  $input: RegisterInput!\n) {\n  register(input: $input) {\n    user {\n      id\n      email\n    }\n    emailConfirmationToken\n  }\n}\n"
};

module.exports = batch;
