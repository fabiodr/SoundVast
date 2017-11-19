/**
 * @flow
 * @relayHash 083acc7ad9ff60eee906a568235e494e
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type confirmEmailContainerQueryResponse = {|
  +confirmEmail: ?boolean;
|};
*/


/*
query confirmEmailContainerQuery(
  $userId: String!
  $token: String!
) {
  confirmEmail(userId: $userId, token: $token)
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "userId",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "token",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "confirmEmailContainerQuery",
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "token",
            "variableName": "token",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "userId",
            "variableName": "userId",
            "type": "String!"
          }
        ],
        "name": "confirmEmail",
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "confirmEmailContainerQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "userId",
        "type": "String!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "token",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "confirmEmailContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "token",
            "variableName": "token",
            "type": "String!"
          },
          {
            "kind": "Variable",
            "name": "userId",
            "variableName": "userId",
            "type": "String!"
          }
        ],
        "name": "confirmEmail",
        "storageKey": null
      }
    ]
  },
  "text": "query confirmEmailContainerQuery(\n  $userId: String!\n  $token: String!\n) {\n  confirmEmail(userId: $userId, token: $token)\n}\n"
};

module.exports = batch;
