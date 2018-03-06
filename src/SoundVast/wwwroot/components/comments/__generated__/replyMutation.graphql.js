/**
 * @flow
 * @relayHash 10ac4a363cf0b095b7441a6b9e7d0cdc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type replyContainer_reply$ref = any;
export type replyMutationVariables = {|
  input: {
    clientMutationId?: ?string,
    body: string,
    audioId: number,
    originalCommentId?: ?number,
  },
|};
export type replyMutationResponse = {|
  +comment: ?{|
    +comment: {|
      +replies: ?{|
        +totalCount: ?number,
      |},
      +$fragmentRefs: replyContainer_reply$ref,
    |},
  |},
|};
*/


/*
mutation replyMutation(
  $input: SaveCommentInput!
) {
  comment(input: $input) {
    comment {
      ...replyContainer_reply
      replies {
        totalCount
      }
      id
    }
  }
}

fragment replyContainer_reply on Comment {
  commentId
  body
  dateAdded
  likes
  dislikes
  user {
    userName
    id
  }
  originalComment {
    body
    user {
      userName
      id
    }
    id
  }
  ...likeCommentContainer_comment
  ...dislikeCommentContainer_comment
}

fragment likeCommentContainer_comment on Comment {
  id
  commentId
}

fragment dislikeCommentContainer_comment on Comment {
  id
  commentId
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SaveCommentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "SaveCommentInput!"
  }
],
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "replies",
  "storageKey": null,
  "args": null,
  "concreteType": "CommentPayloadConnection",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "totalCount",
      "args": null,
      "storageKey": null
    }
  ]
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "body",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
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
    },
    v4
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "replyMutation",
  "id": null,
  "text": "mutation replyMutation(\n  $input: SaveCommentInput!\n) {\n  comment(input: $input) {\n    comment {\n      ...replyContainer_reply\n      replies {\n        totalCount\n      }\n      id\n    }\n  }\n}\n\nfragment replyContainer_reply on Comment {\n  commentId\n  body\n  dateAdded\n  likes\n  dislikes\n  user {\n    userName\n    id\n  }\n  originalComment {\n    body\n    user {\n      userName\n      id\n    }\n    id\n  }\n  ...likeCommentContainer_comment\n  ...dislikeCommentContainer_comment\n}\n\nfragment likeCommentContainer_comment on Comment {\n  id\n  commentId\n}\n\nfragment dislikeCommentContainer_comment on Comment {\n  id\n  commentId\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "replyMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "comment",
        "storageKey": null,
        "args": v1,
        "concreteType": "SaveCommentPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "comment",
            "storageKey": null,
            "args": null,
            "concreteType": "Comment",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "replyContainer_reply",
                "args": null
              },
              v2
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "replyMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "comment",
        "storageKey": null,
        "args": v1,
        "concreteType": "SaveCommentPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "comment",
            "storageKey": null,
            "args": null,
            "concreteType": "Comment",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "commentId",
                "args": null,
                "storageKey": null
              },
              v3,
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
              v5,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "originalComment",
                "storageKey": null,
                "args": null,
                "concreteType": "Comment",
                "plural": false,
                "selections": [
                  v3,
                  v5,
                  v4
                ]
              },
              v4,
              v2
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '4ef5225766bfda641f6ede877c7da091';
module.exports = node;
