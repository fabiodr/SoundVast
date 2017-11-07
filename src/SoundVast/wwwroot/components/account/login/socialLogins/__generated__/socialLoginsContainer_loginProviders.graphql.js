/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type socialLoginsContainer_loginProviders = $ReadOnlyArray<{|
  +authenticationScheme: string;
  +displayName: string;
|}>;
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "socialLoginsContainer_loginProviders",
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
  ],
  "type": "LoginProvider"
};

module.exports = fragment;
