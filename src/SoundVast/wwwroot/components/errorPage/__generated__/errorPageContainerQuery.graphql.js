/**
 * @flow
 * @relayHash 0e5b5c32e1594a2c0acbc521e3cfe837
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type errorPageContainer_quote$ref = any;
export type errorPageContainerQueryVariables = {| |};
export type errorPageContainerQueryResponse = {|
  +quote: ?{|
    +$fragmentRefs: errorPageContainer_quote$ref,
  |},
|};
*/


/*
query errorPageContainerQuery {
  quote {
    ...errorPageContainer_quote
    id
  }
}

fragment errorPageContainer_quote on Quote {
  quotation
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "errorPageContainerQuery",
  "id": null,
  "text": "query errorPageContainerQuery {\n  quote {\n    ...errorPageContainer_quote\n    id\n  }\n}\n\nfragment errorPageContainer_quote on Quote {\n  quotation\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "errorPageContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "quote",
        "storageKey": null,
        "args": null,
        "concreteType": "Quote",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "errorPageContainer_quote",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "errorPageContainerQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "quote",
        "storageKey": null,
        "args": null,
        "concreteType": "Quote",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "quotation",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
(node/*: any*/).hash = '5c037a36fe5fa0e1d695b500b47a0319';
module.exports = node;
