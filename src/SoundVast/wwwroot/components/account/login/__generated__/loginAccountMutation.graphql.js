/**
 * @flow
 * @relayHash e421413c29dc6852da7dcebc995dff66
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type loginAccountMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    username: string;
    password: string;
    rememberMe: boolean;
  };
|};
export type loginAccountMutationResponse = {|
  +login: ?{|
    +clientMutationId: ?string;
  |};
|};
*/


/*
mutation loginAccountMutation(
  $input: LoginAccountInput!
) {
  login(input: $input) {
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
        "type": "LoginAccountInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "loginAccountMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "LoginAccountInput!"
          }
        ],
        "concreteType": "LoginAccountPayload",
        "name": "login",
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
  "name": "loginAccountMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "LoginAccountInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "loginAccountMutation",
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
            "type": "LoginAccountInput!"
          }
        ],
        "concreteType": "LoginAccountPayload",
        "name": "login",
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
  "text": "mutation loginAccountMutation(\n  $input: LoginAccountInput!\n) {\n  login(input: $input) {\n    clientMutationId\n  }\n}\n"
};

module.exports = batch;
