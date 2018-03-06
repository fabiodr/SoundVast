/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type replyBoxContainer_audio$ref: FragmentReference;
export type replyBoxContainer_audio = {|
  +id: ?string,
  +audioId: number,
  +name: string,
  +$refType: replyBoxContainer_audio$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "replyBoxContainer_audio",
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
(node/*: any*/).hash = '3e3898238ea21979887b0454cede1ebd';
module.exports = node;
