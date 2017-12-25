/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type userLikedAudiosContainer_user = {|
  +likedSongs: ?$ReadOnlyArray<?{|
    +audioId: number;
  |}>;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "userLikedAudiosContainer_user",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Song",
      "name": "likedSongs",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "audioId",
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "songContainer_song",
          "args": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ApplicationUser"
};

module.exports = fragment;
