/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type genresFieldContainer_genres$ref: FragmentReference;
export type genresFieldContainer_genres = $ReadOnlyArray<{|
  +id: ?string,
  +name: string,
  +$refType: genresFieldContainer_genres$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "genresFieldContainer_genres",
  "type": "Genre",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
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
    }
  ]
};
(node/*: any*/).hash = '77b3f9fe65c2a97a3539b22ef1291657';
module.exports = node;
