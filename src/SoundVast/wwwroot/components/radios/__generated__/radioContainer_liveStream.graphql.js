/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type dislikeAudioContainer_audio$ref = any;
type likeAudioContainer_audio$ref = any;
type mobileSideBarContainer_audio$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type radioContainer_liveStream$ref: FragmentReference;
export type radioContainer_liveStream = {|
  +audioId: number,
  +name: string,
  +coverImages: ?$ReadOnlyArray<?{|
    +dimention: string,
    +imageUrl: string,
  |}>,
  +websiteUrl: ?string,
  +likes: number,
  +dislikes: number,
  +$fragmentRefs: (likeAudioContainer_audio$ref & dislikeAudioContainer_audio$ref & mobileSideBarContainer_audio$ref),
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
      "name": "websiteUrl",
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
    },
    {
      "kind": "FragmentSpread",
      "name": "mobileSideBarContainer_audio",
      "args": null
    }
  ]
};
(node/*: any*/).hash = 'faf6d5b8b295947f9e7996edd1ba9c5d';
module.exports = node;
