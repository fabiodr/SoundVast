/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type likeAudioContainer_audio$ref: FragmentReference;
export type likeAudioContainer_audio = {|
  +id: ?string,
  +audioId: number,
  +$refType: likeAudioContainer_audio$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "likeAudioContainer_audio",
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
(node/*: any*/).hash = '982dc9287e40fac1344d44f88bf6ebf9';
module.exports = node;
