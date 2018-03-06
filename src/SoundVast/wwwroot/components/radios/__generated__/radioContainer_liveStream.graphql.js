/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type dislikeAudioContainer_audio$ref = any;
type likeAudioContainer_audio$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type radioContainer_liveStream$ref: FragmentReference;
export type radioContainer_liveStream = {|
  +audioId: number,
  +name: string,
  +coverImages: ?$ReadOnlyArray<?{|
    +dimention: string,
    +imageUrl: string,
  |}>,
  +liveStreamUrl: string,
  +websiteUrl: string,
  +playCount: number,
  +likes: number,
  +dislikes: number,
  +$fragmentRefs: (likeAudioContainer_audio$ref & dislikeAudioContainer_audio$ref),
  +$refType: radioContainer_liveStream$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "radioContainer_liveStream",
  "type": "LiveStream",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "audioId",
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "liveStreamUrl",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "websiteUrl",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "playCount",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "likes",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "dislikes",
      "args": null,
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
  ]
};
(node/*: any*/).hash = 'eb9766ea2aabc7c75050e9680cb8edb5';
module.exports = node;
