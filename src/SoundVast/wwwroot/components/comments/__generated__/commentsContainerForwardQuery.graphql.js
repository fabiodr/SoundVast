/**
 * @flow
 * @relayHash 77f8e3c7a17cad4e5374b3ef40a8fae8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type commentsContainer_audio$ref = any;
export type commentsContainerForwardQueryVariables = {|
  id: string,
  count: number,
  cursor?: ?string,
|};
export type commentsContainerForwardQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: commentsContainer_audio$ref,
  |},
|};
*/


/*
query commentsContainerForwardQuery(
  $id: ID!
  $count: Int!
  $cursor: String
) {
  node(id: $id) {
    __typename
    ...commentsContainer_audio
    id
  }
}

fragment commentsContainer_audio on Audio {
  id
  ...commentBoxContainer_audio
  ...replyBoxContainer_audio
  comments(first: $count, after: $cursor) {
    edges {
      node {
        commentId
        ...commentContainer_comment
        id
        __typename
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment commentBoxContainer_audio on Audio {
  id
  audioId
  name
}

fragment replyBoxContainer_audio on Audio {
  id
  audioId
  name
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

fragment likeCommentContainer_comment on Comment {
  id
  commentId
}

fragment dislikeCommentContainer_comment on Comment {
  id
  commentId
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "cursor",
  "type": "String"
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "commentId",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "body",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "dateAdded",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "likes",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "dislikes",
  "args": null,
  "storageKey": null
},
v10 = {
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
    v3
  ]
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "endCursor",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "hasNextPage",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "commentsContainerForwardQuery",
  "id": null,
  "text": "query commentsContainerForwardQuery(\n  $id: ID!\n  $count: Int!\n  $cursor: String\n) {\n  node(id: $id) {\n    __typename\n    ...commentsContainer_audio\n    id\n  }\n}\n\nfragment commentsContainer_audio on Audio {\n  id\n  ...commentBoxContainer_audio\n  ...replyBoxContainer_audio\n  comments(first: $count, after: $cursor) {\n    edges {\n      node {\n        commentId\n        ...commentContainer_comment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment commentBoxContainer_audio on Audio {\n  id\n  audioId\n  name\n}\n\nfragment replyBoxContainer_audio on Audio {\n  id\n  audioId\n  name\n}\n\nfragment commentContainer_comment on Comment {\n  id\n  commentId\n  body\n  dateAdded\n  likes\n  dislikes\n  user {\n    userName\n    id\n  }\n  ...repliesContainer_comment\n  ...likeCommentContainer_comment\n  ...dislikeCommentContainer_comment\n}\n\nfragment repliesContainer_comment on Comment {\n  id\n  replies(first: 0, after: $cursor) {\n    totalCount\n    edges {\n      cursor\n      node {\n        commentId\n        ...replyContainer_reply\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment likeCommentContainer_comment on Comment {\n  id\n  commentId\n}\n\nfragment dislikeCommentContainer_comment on Comment {\n  id\n  commentId\n}\n\nfragment replyContainer_reply on Comment {\n  commentId\n  body\n  dateAdded\n  likes\n  dislikes\n  user {\n    userName\n    id\n  }\n  originalComment {\n    body\n    user {\n      userName\n      id\n    }\n    id\n  }\n  ...likeCommentContainer_comment\n  ...dislikeCommentContainer_comment\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "commentsContainerForwardQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "commentsContainer_audio",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "commentsContainerForwardQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          v2,
          v3,
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
            "kind": "LinkedField",
            "alias": null,
            "name": "comments",
            "storageKey": null,
            "args": [
              v4,
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "count",
                "type": "Int"
              }
            ],
            "concreteType": "CommentPayloadConnection",
            "plural": false,
            "selections": [
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
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Comment",
                    "plural": false,
                    "selections": [
                      v5,
                      v3,
                      v6,
                      v7,
                      v8,
                      v9,
                      v10,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "replies",
                        "storageKey": null,
                        "args": [
                          v4,
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
                              v11,
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "node",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Comment",
                                "plural": false,
                                "selections": [
                                  v5,
                                  v6,
                                  v7,
                                  v8,
                                  v9,
                                  v10,
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "originalComment",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "Comment",
                                    "plural": false,
                                    "selections": [
                                      v6,
                                      v10,
                                      v3
                                    ]
                                  },
                                  v3,
                                  v2
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
                              v12,
                              v13
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "LinkedHandle",
                        "alias": null,
                        "name": "replies",
                        "args": [
                          v4,
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
                      },
                      v2
                    ]
                  },
                  v11
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
                  v13,
                  v12
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "comments",
            "args": [
              v4,
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "count",
                "type": "Int"
              }
            ],
            "handle": "connection",
            "key": "commentsContainer_comments",
            "filters": null
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'c0a3148a54e46424a7c445869e5f29a6';
module.exports = node;
