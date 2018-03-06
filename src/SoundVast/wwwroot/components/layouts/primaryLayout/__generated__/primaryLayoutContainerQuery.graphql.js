/**
 * @flow
 * @relayHash 87cc9cc7657065d664247ee645025560
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type socialLoginsContainer_loginProviders$ref = any;
export type primaryLayoutContainerQueryVariables = {| |};
export type primaryLayoutContainerQueryResponse = {|
  +user: ?{|
    +userId: string,
    +userName: string,
  |},
  +loginProviders: ?$ReadOnlyArray<?{|
    +$fragmentRefs: socialLoginsContainer_loginProviders$ref,
  |}>,
|};
*/


/*
query primaryLayoutContainerQuery {
  user {
    userId
    userName
    id
  }
  loginProviders {
    ...socialLoginsContainer_loginProviders
  }
}

fragment socialLoginsContainer_loginProviders on LoginProvider {
  name
  displayName
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "userId",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "userName",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "primaryLayoutContainerQuery",
  "id": null,
  "text": "query primaryLayoutContainerQuery {\n  user {\n    userId\n    userName\n    id\n  }\n  loginProviders {\n    ...socialLoginsContainer_loginProviders\n  }\n}\n\nfragment socialLoginsContainer_loginProviders on LoginProvider {\n  name\n  displayName\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "primaryLayoutContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "ApplicationUser",
        "plural": false,
        "selections": [
          v0,
          v1
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "loginProviders",
        "storageKey": null,
        "args": null,
        "concreteType": "LoginProvider",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "socialLoginsContainer_loginProviders",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "primaryLayoutContainerQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "ApplicationUser",
        "plural": false,
        "selections": [
          v0,
          v1,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "loginProviders",
        "storageKey": null,
        "args": null,
        "concreteType": "LoginProvider",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "displayName",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'ca481fd2f8d5bd6ab9e8868f5aebf740';
module.exports = node;
