/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type genresContainer_genres$ref: FragmentReference;
export type genresContainer_genres = $ReadOnlyArray<{|
  +id: ?string,
  +name: string,
  +coverImageUrl: ?string,
  +$refType: genresContainer_genres$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "genresContainer_genres",
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "coverImageUrl",
      "args": null,
      "storageKey": null
    }
  ]
};
(node/*: any*/).hash = '21052cb41ea24e514092f92c7658b7e0';
module.exports = node;
