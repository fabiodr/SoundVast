/**
 * @flow
 * @relayHash 46e510f5ebde8d4530d4cc166c85b155
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type loginMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    username: string;
    password: string;
    rememberMe?: ?boolean;
  };
|};
export type loginMutationResponse = {|
  +login: ?{|
    +user: ?{| |};
  |};
|};
*/


/*
mutation loginMutation(
  $input: LoginInput!
) {
  login(input: $input) {
    user {
      ...authorizedListContainer_user
      id
    }
  }
}

fragment authorizedListContainer_user on ApplicationUser {
  userName
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "LoginInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "loginMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "LoginInput!"
          }
        ],
        "concreteType": "LoginPayload",
        "name": "login",
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
                "kind": "FragmentSpread",
                "name": "authorizedListContainer_user",
                "args": null
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
  "name": "loginMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "LoginInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "loginMutation",
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
            "type": "LoginInput!"
          }
        ],
        "concreteType": "LoginPayload",
        "name": "login",
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
                "name": "userName",
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
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation loginMutation(\n  $input: LoginInput!\n) {\n  login(input: $input) {\n    user {\n      ...authorizedListContainer_user\n      id\n    }\n  }\n}\n\nfragment authorizedListContainer_user on ApplicationUser {\n  userName\n}\n"
};

module.exports = batch;
