/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type radioContainer_liveStream = {|
  +audioId: number;
  +name: string;
  +coverImageUrl: string;
  +liveStreamUrl: string;
  +websiteUrl: string;
  +playCount: number;
  +likes: number;
  +dislikes: number;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "radioContainer_liveStream",
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
      "name": "liveStreamUrl",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "websiteUrl",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "playCount",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "likes",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "dislikes",
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "likeAudioContainer_audio",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "dislikeAudioContainer_audio",
      "args": null
    }
  ],
  "type": "LiveStream"
};

module.exports = fragment;
