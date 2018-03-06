/**
 * @flow
 * @relayHash 0817174fcbf5c0fc4b7a6798cfafe9d5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type commentContainer_comment$ref = any;
type repliesContainer_comment$ref = any;
export type commentMutationVariables = {|
  cursor?: ?string,
  input: {
    clientMutationId?: ?string,
    body: string,
    audioId: number,
    originalCommentId?: ?number,
  },
|};
export type commentMutationResponse = {|
  +comment: ?{|
    +comment: {|
      +$fragmentRefs: (commentContainer_comment$ref & repliesContainer_comment$ref),
    |},
  |},
|};
*/


/*
mutation commentMutation(
  $cursor: String
  $input: SaveCommentInput!
) {
  comment(input: $input) {
    comment {
      ...commentContainer_comment
      ...repliesContainer_comment
      id
    }
  }
}

fragment commentContainer_comment on Comment {
  id
  commentId
  body
  dateAdded
  likes
  dislikes
  user {
    userName
    id
  }
  ...repliesContainer_comment
  ...likeCommentContainer_comment
  ...dislikeCommentContainer_comment
}

fragment repliesContainer_comment on Comment {
  id
  replies(first: 0, after: $cursor) {
    totalCount
    edges {
      cursor
      node {
        commentId
        ...replyContainer_reply
        id
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
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
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  },
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
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "commentId",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "body",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "dateAdded",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "likes",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "dislikes",
  "args": null,
  "storageKey": null
},
v8 = {
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
    v2
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "commentMutation",
  "id": null,
  "text": "mutation commentMutation(\n  $cursor: String\n  $input: SaveCommentInput!\n) {\n  comment(input: $input) {\n    comment {\n      ...commentContainer_comment\n      ...repliesContainer_comment\n      id\n    }\n  }\n}\n\nfragment commentContainer_comment on Comment {\n  id\n  commentId\n  body\n  dateAdded\n  likes\n  dislikes\n  user {\n    userName\n    id\n  }\n  ...repliesContainer_comment\n  ...likeCommentContainer_comment\n  ...dislikeCommentContainer_comment\n}\n\nfragment repliesContainer_comment on Comment {\n  id\n  replies(first: 0, after: $cursor) {\n    totalCount\n    edges {\n      cursor\n      node {\n        commentId\n        ...replyContainer_reply\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment replyContainer_reply on Comment {\n  commentId\n  body\n  dateAdded\n  likes\n  dislikes\n  user {\n    userName\n    id\n  }\n  originalComment {\n    body\n    user {\n      userName\n      id\n    }\n    id\n  }\n  ...likeCommentContainer_comment\n  ...dislikeCommentContainer_comment\n}\n\nfragment likeCommentContainer_comment on Comment {\n  id\n  commentId\n}\n\nfragment dislikeCommentContainer_comment on Comment {\n  id\n  commentId\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "commentMutation",
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
                "name": "commentContainer_comment",
                "args": null
              },
              {
                "kind": "FragmentSpread",
                "name": "repliesContainer_comment",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "commentMutation",
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
              v2,
              v3,
              v4,
              v5,
              v6,
              v7,
              v8,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "replies",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "after",
                    "variableName": "cursor",
                    "type": "String"
                  },
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 0,
                    "type": "Int"
                  }
                ],
                "concreteType": "CommentPayloadConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "totalCount",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CommentPayloadEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "cursor",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Comment",
                        "plural": false,
                        "selections": [
                          v3,
                          v4,
                          v5,
                          v6,
                          v7,
                          v8,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "originalComment",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Comment",
                            "plural": false,
                            "selections": [
                              v4,
                              v8,
                              v2
                            ]
                          },
                          v2,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "__typename",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "pageInfo",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "endCursor",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "hasNextPage",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "replies",
                "args": [
                  {
                    "kind": "Variable",
                    "name": "after",
                    "variableName": "cursor",
                    "type": "String"
                  },
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 0,
                    "type": "Int"
                  }
                ],
                "handle": "connection",
                "key": "repliesContainer_replies",
                "filters": null
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '04fe3c1c2200db30efcd472a210d412e';
module.exports = node;
