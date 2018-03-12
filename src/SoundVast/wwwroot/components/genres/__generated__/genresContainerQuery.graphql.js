/**
 * @flow
 * @relayHash e06cf7ede3edceb1dc21f65061bd7b66
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
  type
  coverImages {
    dimention
    imageUrl
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "genresContainerQuery",
  "id": null,
  "text": "query genresContainerQuery {\n  genres {\n    ...genresContainer_genres\n    id\n  }\n}\n\nfragment genresContainer_genres on Genre {\n  id\n  name\n  type\n  coverImages {\n    dimention\n    imageUrl\n  }\n}\n",
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
            "name": "type",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "coverImages",
            "storageKey": null,
            "args": null,
            "concreteType": "Image",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "dimention",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "imageUrl",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
};
(node/*: any*/).hash = '5f09f5de5e9bc82202b993d79c9cc721';
module.exports = node;
