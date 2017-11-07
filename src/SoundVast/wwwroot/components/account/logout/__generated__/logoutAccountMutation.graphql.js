/**
 * @flow
 * @relayHash 732a381b72f1f84dafc4e05d63aeffca
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type logoutAccountMutationVariables = {| |};
export type logoutAccountMutationResponse = {|
  +logout: ?{|
    +clientMutationId: ?string;
  |};
|};
*/


/*
mutation logoutAccountMutation {
  logout {
    clientMutationId
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "logoutAccountMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "LogoutPayload",
        "name": "logout",
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
  "name": "logoutAccountMutation",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "logoutAccountMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "LogoutPayload",
        "name": "logout",
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
  "text": "mutation logoutAccountMutation {\n  logout {\n    clientMutationId\n  }\n}\n"
};

module.exports = batch;
