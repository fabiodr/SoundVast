/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type userProfileContainer_user = {|
  +userName: string;
  +uploads: ?$ReadOnlyArray<?{|
    +audioId: number;
  |}>;
  +likedSongs: ?$ReadOnlyArray<?{|
    +audioId: number;
  |}>;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "userProfileContainer_user",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "userName",
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Song",
      "name": "uploads",
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
    },
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
