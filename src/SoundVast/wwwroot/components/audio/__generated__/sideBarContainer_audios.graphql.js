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
declare export opaque type sideBarContainer_audios$ref: FragmentReference;
export type sideBarContainer_audios = $ReadOnlyArray<{|
  +audioId: number,
  +name: string,
  +$fragmentRefs: (commentBoxContainer_audio$ref & commentsContainer_audio$ref),
  +$refType: sideBarContainer_audios$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "sideBarContainer_audios",
  "type": "Audio",
  "metadata": {
    "plural": true
  },
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
(node/*: any*/).hash = '3b9bdbe9facd9e5f54821515130b4d8e';
module.exports = node;
