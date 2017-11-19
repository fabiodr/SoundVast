/**
 * @flow
 * @relayHash 7058a402cc1005b70e48865c98bb5d60
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type socialLoginCallbackContainerQueryResponse = {|
  +externalLoginCallback: ?{|
    +loginProvider: ?string;
    +userName: ?string;
    +user: ?{|
      +userName: string;
    |};
  |};
|};
*/


/*
query socialLoginCallbackContainerQuery {
  externalLoginCallback {
    loginProvider
    userName
    user {
      userName
      id
    }
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
            "name": "userName",
            "storageKey": null
          },
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
              }
            ],
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
            "name": "userName",
            "storageKey": null
          },
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
  "text": "query socialLoginCallbackContainerQuery {\n  externalLoginCallback {\n    loginProvider\n    userName\n    user {\n      userName\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
