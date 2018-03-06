/**
 * @flow
 * @relayHash a3eb8efad379df99867b96d99965ac0f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type genresFieldContainer_genres$ref = any;
type withAuthorization_user$ref = any;
export type uploadContainerQueryVariables = {| |};
export type uploadContainerQueryResponse = {|
  +genres: ?$ReadOnlyArray<?{|
    +$fragmentRefs: genresFieldContainer_genres$ref,
  |}>,
  +user: ?{|
    +$fragmentRefs: withAuthorization_user$ref,
  |},
|};
*/


/*
query uploadContainerQuery {
  genres {
    ...genresFieldContainer_genres
    id
  }
  user {
    ...withAuthorization_user
    id
  }
}

fragment genresFieldContainer_genres on Genre {
  id
  name
}

fragment withAuthorization_user on ApplicationUser {
  userName
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "uploadContainerQuery",
  "id": null,
  "text": "query uploadContainerQuery {\n  genres {\n    ...genresFieldContainer_genres\n    id\n  }\n  user {\n    ...withAuthorization_user\n    id\n  }\n}\n\nfragment genresFieldContainer_genres on Genre {\n  id\n  name\n}\n\nfragment withAuthorization_user on ApplicationUser {\n  userName\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "uploadContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "genres",
        "storageKey": null,
        "args": null,
        "concreteType": "Genre",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "genresFieldContainer_genres",
            "args": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "ApplicationUser",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "withAuthorization_user",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "uploadContainerQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "genres",
        "storageKey": null,
        "args": null,
        "concreteType": "Genre",
        "plural": true,
        "selections": [
          v0,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "ApplicationUser",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "userName",
            "args": null,
            "storageKey": null
          },
          v0
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '93ee52d03f626ea98cd99c6ef1b50af7';
module.exports = node;
