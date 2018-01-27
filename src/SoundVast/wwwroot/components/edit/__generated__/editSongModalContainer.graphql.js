/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type editSongModalContainer = {|
  +user: ?{|
    +id: ?string;
  |};
  +songGenres: ?$ReadOnlyArray<?{| |}>;
  +song: ?{|
    +name: string;
    +coverImageUrl: string;
    +free: boolean;
    +artists: ?$ReadOnlyArray<?{|
      +name: string;
    |}>;
    +genres: ?$ReadOnlyArray<?{|
      +id: ?string;
      +name: string;
    |}>;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "songId",
      "type": "Int",
      "defaultValue": null
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "editSongModalContainer",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "ApplicationUser",
      "name": "user",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "SongGenre",
      "name": "songGenres",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "songGenresFieldContainer_genres",
          "args": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "songId",
          "type": "Int"
        }
      ],
      "concreteType": "Song",
      "name": "song",
      "plural": false,
      "selections": [
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
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "free",
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "Artist",
          "name": "artists",
          "plural": true,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "name",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "SongGenre",
          "name": "genres",
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
