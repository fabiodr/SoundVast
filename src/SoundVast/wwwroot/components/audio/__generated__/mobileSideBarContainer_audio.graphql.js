/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type commentBoxContainer_audio$ref = any;
type commentsContainer_audio$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type mobileSideBarContainer_audio$ref: FragmentReference;
export type mobileSideBarContainer_audio = {|
  +audioId: number,
  +name: string,
  +$fragmentRefs: (commentBoxContainer_audio$ref & commentsContainer_audio$ref),
  +$refType: mobileSideBarContainer_audio$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "mobileSideBarContainer_audio",
  "type": "Audio",
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
      "kind": "FragmentSpread",
      "name": "commentBoxContainer_audio",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "commentsContainer_audio",
      "args": null
    }
  ]
};
(node/*: any*/).hash = '499228bd37301e6af227413ce0863f6e';
module.exports = node;
