/**
 * @flow
 * @relayHash 765c76f021f2e7572b9aed1f6bbdc50b
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type commentsContainerForwardQueryResponse = {|
  +song: ?{| |};
|};
*/


/*
query commentsContainerForwardQuery(
  $id: Int!
  $count: Int!
  $cursor: String
  $originalCommentId: Int
) {
  song(id: $id) {
    ...commentsContainer
    id
  }
}

fragment commentsContainer on Audio {
  audioId
  comments(first: $count, after: $cursor, originalCommentId: $originalCommentId) {
    edges {
      node {
        __typename
        commentId
        body
        date
        likes
        dislikes
        repliesCount
        originalComment {
          id
        }
        user {
          userName
          id
        }
        id
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "Int!",
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
      },
      {
        "kind": "LocalArgument",
        "name": "originalCommentId",
        "type": "Int",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "commentsContainerForwardQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "Int!"
          }
        ],
        "concreteType": "Song",
        "name": "song",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "commentsContainer",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "commentsContainerForwardQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "Int!",
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
      },
      {
        "kind": "LocalArgument",
        "name": "originalCommentId",
        "type": "Int",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "commentsContainerForwardQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "Int!"
          }
        ],
        "concreteType": "Song",
        "name": "song",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "audioId",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
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
              },
              {
                "kind": "Variable",
                "name": "originalCommentId",
                "variableName": "originalCommentId",
                "type": "Int"
              }
            ],
            "concreteType": "CommentPayloadConnection",
            "name": "comments",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "CommentPayloadEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Comment",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "__typename",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "commentId",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "body",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "date",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "likes",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "dislikes",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "repliesCount",
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Comment",
                        "name": "originalComment",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "id",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "ApplicationUser",
                        "name": "user",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "userName",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "id",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "hasNextPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
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
              },
              {
                "kind": "Variable",
                "name": "originalCommentId",
                "variableName": "originalCommentId",
                "type": "Int"
              }
            ],
            "handle": "connection",
            "name": "comments",
            "key": "commentsContainer_comments",
            "filters": [
              "originalCommentId"
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query commentsContainerForwardQuery(\n  $id: Int!\n  $count: Int!\n  $cursor: String\n  $originalCommentId: Int\n) {\n  song(id: $id) {\n    ...commentsContainer\n    id\n  }\n}\n\nfragment commentsContainer on Audio {\n  audioId\n  comments(first: $count, after: $cursor, originalCommentId: $originalCommentId) {\n    edges {\n      node {\n        __typename\n        commentId\n        body\n        date\n        likes\n        dislikes\n        repliesCount\n        originalComment {\n          id\n        }\n        user {\n          userName\n          id\n        }\n        id\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
};

module.exports = batch;