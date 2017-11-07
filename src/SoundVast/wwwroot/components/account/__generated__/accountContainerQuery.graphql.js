/**
 * @flow
 * @relayHash 13b023fc783f44804682dc125b075846
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type accountContainerQueryResponse = {|
  +loginProviders: ?$ReadOnlyArray<?{| |}>;
|};
*/


/*
query accountContainerQuery {
  loginProviders {
    ...socialLoginsContainer_loginProviders
  }
}

fragment socialLoginsContainer_loginProviders on LoginProvider {
  authenticationScheme
  displayName
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "accountContainerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "LoginProvider",
        "name": "loginProviders",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "socialLoginsContainer_loginProviders",
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
  "name": "accountContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "accountContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "LoginProvider",
        "name": "loginProviders",
        "plural": true,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "LoginProvider",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "authenticationScheme",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "displayName",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query accountContainerQuery {\n  loginProviders {\n    ...socialLoginsContainer_loginProviders\n  }\n}\n\nfragment socialLoginsContainer_loginProviders on LoginProvider {\n  authenticationScheme\n  displayName\n}\n"
};

module.exports = batch;
