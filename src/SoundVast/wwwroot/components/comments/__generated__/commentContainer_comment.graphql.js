/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type dislikeCommentContainer_comment$ref = any;
type likeCommentContainer_comment$ref = any;
type repliesContainer_comment$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type commentContainer_comment$ref: FragmentReference;
export type commentContainer_comment = {|
  +id: string,
  +commentId: number,
  +body: string,
  +dateAdded: ?any,
  +likes: number,
  +dislikes: number,
  +user: {|
    +userName: string,
  |},
  +$fragmentRefs: (repliesContainer_comment$ref & likeCommentContainer_comment$ref & dislikeCommentContainer_comment$ref),
  +$refType: commentContainer_comment$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "commentContainer_comment",
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "body",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "dateAdded",
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
      "kind": "LinkedField",
      "alias": null,
      "name": "user",
      "storageKey": null,
      "args": null,
      "concreteType": "ApplicationUser",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "userName",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "repliesContainer_comment",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "likeCommentContainer_comment",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "dislikeCommentContainer_comment",
      "args": null
    }
  ]
};
(node/*: any*/).hash = 'cd806d7bb812c877e94df27dc97f3fa5';
module.exports = node;
