/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type dislikeAudioContainer_audio$ref: FragmentReference;
export type dislikeAudioContainer_audio = {|
  +id: ?string,
  +audioId: number,
  +$refType: dislikeAudioContainer_audio$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "dislikeAudioContainer_audio",
  "type": "Audio",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "audioId",
      "args": null,
      "storageKey": null
    }
  ]
};
(node/*: any*/).hash = 'c8e3c8f439dc8cff07cfb2d32cd09e91';
module.exports = node;
