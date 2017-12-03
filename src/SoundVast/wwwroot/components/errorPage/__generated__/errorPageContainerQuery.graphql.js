/**
 * @flow
 * @relayHash 1eaa95b2153f5604c63d56b2b7b68e15
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type errorPageContainerQueryResponse = {|
  +quote: ?{| |};
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

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "errorPageContainerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Quote",
        "name": "quote",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "errorPageContainer_quote",
            "args": null
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
  "name": "errorPageContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "errorPageContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Quote",
        "name": "quote",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "quotation",
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
    ]
  },
  "text": "query errorPageContainerQuery {\n  quote {\n    ...errorPageContainer_quote\n    id\n  }\n}\n\nfragment errorPageContainer_quote on Quote {\n  quotation\n}\n"
};

module.exports = batch;
