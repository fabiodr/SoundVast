/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type dislikeCommentContainer_comment$ref: FragmentReference;
export type dislikeCommentContainer_comment = {|
  +id: string,
  +commentId: number,
  +$refType: dislikeCommentContainer_comment$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "dislikeCommentContainer_comment",
  "type": "Comment",
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
      "name": "commentId",
      "args": null,
      "storageKey": null
    }
  ]
};
(node/*: any*/).hash = 'f8131b5da3a41eb82ab6eb46c95a98f0';
module.exports = node;
