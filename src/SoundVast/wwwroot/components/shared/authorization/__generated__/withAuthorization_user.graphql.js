/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type withAuthorization_user$ref: FragmentReference;
export type withAuthorization_user = {|
  +userName: string,
  +$refType: withAuthorization_user$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "withAuthorization_user",
  "type": "ApplicationUser",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "userName",
      "args": null,
      "storageKey": null
    }
  ]
};
(node/*: any*/).hash = '694c448701ff443fa8d9c9388efda4d2';
module.exports = node;
