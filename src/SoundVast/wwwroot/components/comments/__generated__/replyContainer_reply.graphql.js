/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type dislikeCommentContainer_comment$ref = any;
type likeCommentContainer_comment$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type replyContainer_reply$ref: FragmentReference;
export type replyContainer_reply = {|
  +commentId: number,
  +body: string,
  +dateAdded: ?any,
  +likes: number,
  +dislikes: number,
  +user: {|
    +userName: string,
  |},
  +originalComment: ?{|
    +body: string,
    +user: {|
      +userName: string,
    |},
  |},
  +$fragmentRefs: (likeCommentContainer_comment$ref & dislikeCommentContainer_comment$ref),
  +$refType: replyContainer_reply$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "body",
  "args": null,
  "storageKey": null
},
v1 = {
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
};
return {
  "kind": "Fragment",
  "name": "replyContainer_reply",
  "type": "Comment",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "commentId",
      "args": null,
      "storageKey": null
    },
    v0,
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
    v1,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "originalComment",
      "storageKey": null,
      "args": null,
      "concreteType": "Comment",
      "plural": false,
      "selections": [
        v0,
        v1
      ]
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
})();
(node/*: any*/).hash = 'be589a2bfc29c188790c3039d4ad5014';
module.exports = node;
