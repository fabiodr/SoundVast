/**
 * @flow
 * @relayHash 3e2355bb9c7d16787f6a2ea82db94a61
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type socialLoginCallbackContainerQueryResponse = {|
  +externalLoginCallback: ?{|
    +loginProvider: ?string;
    +email: ?string;
  |};
|};
*/


/*
query socialLoginCallbackContainerQuery {
  externalLoginCallback {
    loginProvider
    email
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "socialLoginCallbackContainerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "ExternalLoginCallbackPayload",
        "name": "externalLoginCallback",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "loginProvider",
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
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "socialLoginCallbackContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "socialLoginCallbackContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "ExternalLoginCallbackPayload",
        "name": "externalLoginCallback",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "loginProvider",
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
      }
    ]
  },
  "text": "query socialLoginCallbackContainerQuery {\n  externalLoginCallback {\n    loginProvider\n    email\n  }\n}\n"
};

module.exports = batch;
