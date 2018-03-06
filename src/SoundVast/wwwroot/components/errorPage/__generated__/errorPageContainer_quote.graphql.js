/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type errorPageContainer_quote$ref: FragmentReference;
export type errorPageContainer_quote = {|
  +quotation: string,
  +$refType: errorPageContainer_quote$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "errorPageContainer_quote",
  "type": "Quote",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "quotation",
      "args": null,
      "storageKey": null
    }
  ]
};
(node/*: any*/).hash = '73dce55de9428e3812216dfd7765db53';
module.exports = node;
