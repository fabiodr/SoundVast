/**
 * @flow
 * @relayHash dd3431dd71a401566c9127a07af50d78
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type genresContainer_genres$ref = any;
export type genresContainerQueryVariables = {| |};
export type genresContainerQueryResponse = {|
  +genres: ?$ReadOnlyArray<?{|
    +$fragmentRefs: genresContainer_genres$ref,
  |}>,
|};
*/


/*
query genresContainerQuery {
  genres {
    ...genresContainer_genres
    id
  }
}

fragment genresContainer_genres on Genre {
  id
  name
  coverImageUrl
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "genresContainerQuery",
  "id": null,
  "text": "query genresContainerQuery {\n  genres {\n    ...genresContainer_genres\n    id\n  }\n}\n\nfragment genresContainer_genres on Genre {\n  id\n  name\n  coverImageUrl\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "genresContainerQuery",
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
            "name": "genresContainer_genres",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "genresContainerQuery",
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
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
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
            "name": "coverImageUrl",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
(node/*: any*/).hash = '5f09f5de5e9bc82202b993d79c9cc721';
module.exports = node;
