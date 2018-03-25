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
  +coverImages: ?$ReadOnlyArray<?{|
    +dimention: string,
    +imageUrl: string,
  |}>,
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
};
(node/*: any*/).hash = '6e718021ac36e0f770ddd2b3391b5341';
module.exports = node;
