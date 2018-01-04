/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type sideBarContainer_audios = $ReadOnlyArray<{|
  +audioId: number;
  +name: string;
|}>;
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "sideBarContainer_audios",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "audioId",
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
      "kind": "FragmentSpread",
      "name": "commentBoxContainer_audio",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "commentsContainer_audio",
      "args": null
    }
  ],
  "type": "Audio"
};

module.exports = fragment;
