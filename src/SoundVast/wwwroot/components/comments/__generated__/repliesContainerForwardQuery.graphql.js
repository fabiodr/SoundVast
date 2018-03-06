/**
 * @flow
 * @relayHash 684dd835c7bb486ffb3c140b788560ed
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type repliesContainer_comment$ref = any;
export type repliesContainerForwardQueryVariables = {|
  id: string,
  count: number,
  cursor?: ?string,
|};
export type repliesContainerForwardQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: repliesContainer_comment$ref,
  |},
|};
*/


/*
query repliesContainerForwardQuery(
  $id: ID!
  $count: Int!
  $cursor: String
) {
  node(id: $id) {
    __typename
    ...repliesContainer_comment_yu5n1
    id
  }
}

fragment repliesContainer_comment_yu5n1 on Comment {
  id
  replies(first: $count, after: $cursor) {
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
  "kind": "ScalarField",
  "alias": null,
  "name": "body",
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
    v3
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "repliesContainerForwardQuery",
  "id": null,
  "text": "query repliesContainerForwardQuery(\n  $id: ID!\n  $count: Int!\n  $cursor: String\n) {\n  node(id: $id) {\n    __typename\n    ...repliesContainer_comment_yu5n1\n    id\n  }\n}\n\nfragment repliesContainer_comment_yu5n1 on Comment {\n  id\n  replies(first: $count, after: $cursor) {\n    totalCount\n    edges {\n      cursor\n      node {\n        commentId\n        ...replyContainer_reply\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment replyContainer_reply on Comment {\n  commentId\n  body\n  dateAdded\n  likes\n  dislikes\n  user {\n    userName\n    id\n  }\n  originalComment {\n    body\n    user {\n      userName\n      id\n    }\n    id\n  }\n  ...likeCommentContainer_comment\n  ...dislikeCommentContainer_comment\n}\n\nfragment likeCommentContainer_comment on Comment {\n  id\n  commentId\n}\n\nfragment dislikeCommentContainer_comment on Comment {\n  id\n  commentId\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "repliesContainerForwardQuery",
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
            "name": "repliesContainer_comment",
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count",
                "type": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "repliesContainerForwardQuery",
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
            "kind": "InlineFragment",
            "type": "Comment",
            "selections": [
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
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "commentId",
                            "args": null,
                            "storageKey": null
                          },
                          v4,
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
                              v4,
                              v5,
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
                    "kind": "Variable",
                    "name": "first",
                    "variableName": "count",
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
(node/*: any*/).hash = 'cb6cc1180da5452e5c3d38402b28c22f';
module.exports = node;
