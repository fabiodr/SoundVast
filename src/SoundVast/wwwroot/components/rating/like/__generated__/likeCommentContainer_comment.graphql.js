/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type likeCommentContainer_comment$ref: FragmentReference;
export type likeCommentContainer_comment = {|
  +id: string,
  +commentId: number,
  +$refType: likeCommentContainer_comment$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "likeCommentContainer_comment",
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
(node/*: any*/).hash = '08e91605a4850f2a3bc50538e41ae156';
module.exports = node;
