/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type artistsFieldContainer_artists = {|
  +artists: ?{|
    +items: ?$ReadOnlyArray<?{|
      +id: string;
      +name: string;
      +coverImageUrl: string;
    |}>;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "artistsCount",
      "type": "Int!",
      "defaultValue": 0
    },
    {
      "kind": "RootArgument",
      "name": "searchQuery",
      "type": "String"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "artistsFieldContainer_artists",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "first",
          "variableName": "artistsCount",
          "type": "Int"
        },
        {
          "kind": "Variable",
          "name": "searchQuery",
          "variableName": "searchQuery",
          "type": "String"
        }
      ],
      "concreteType": "ArtistPayloadConnection",
      "name": "artists",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "Artist",
          "name": "items",
          "plural": true,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "id",
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "name",
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "coverImageUrl",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query"
};

module.exports = fragment;
