/**
 * @flow
 * @relayHash fac6cf42bad0ccf59cc282dabc702a2e
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type radiosContainerForwardQueryResponse = {| |};
*/


/*
query radiosContainerForwardQuery(
  $count: Int!
  $cursor: String
  $genre: String
  $searchQuery: String
  $filter: FilterInput
) {
  ...radiosContainer
}

fragment radiosContainer on Query {
  liveStreams(first: $count, after: $cursor, genre: $genre, searchQuery: $searchQuery, filter: $filter) {
    items {
      ...sideBarContainer_audios
      id
    }
    edges {
      cursor
      node {
        __typename
        id
        audioId
        name
        coverImageUrl
        liveStreamUrl
        ...radioContainer_liveStream
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment sideBarContainer_audios on Audio {
  audioId
  name
  ...commentBoxContainer_audio
  ...commentsContainer_audio
}

fragment radioContainer_liveStream on LiveStream {
  audioId
  name
  coverImageUrl
  liveStreamUrl
  playCount
  likes
  dislikes
  ...likeAudioContainer_audio
  ...dislikeAudioContainer_audio
}

fragment likeAudioContainer_audio on Audio {
  id
  audioId
}

fragment dislikeAudioContainer_audio on Audio {
  id
  audioId
}

fragment commentBoxContainer_audio on Audio {
  id
  audioId
  name
}

fragment commentsContainer_audio on Audio {
  id
  ...commentBoxContainer_audio
  ...replyBoxContainer_audio
  comments(first: $count, after: $cursor) {
    edges {
      node {
        __typename
        commentId
        ...commentContainer_comment
        id
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
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
        __typename
        commentId
        ...replyContainer_reply
        id
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

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
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
        "name": "genre",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "searchQuery",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "filter",
        "type": "FilterInput",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "radiosContainerForwardQuery",
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "radiosContainer",
        "args": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "radiosContainerForwardQuery",
  "query": {
    "argumentDefinitions": [
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
        "name": "genre",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "searchQuery",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "filter",
        "type": "FilterInput",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "radiosContainerForwardQuery",
    "operation": "query",
    "selections": [
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
            "name": "filter",
            "variableName": "filter",
            "type": "FilterInput"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "count",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "genre",
            "variableName": "genre",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "searchQuery",
            "variableName": "searchQuery",
            "type": "String"
          }
        ],
        "concreteType": "LiveStreamPayloadConnection",
        "name": "liveStreams",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "LiveStream",
            "name": "items",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "audioId",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
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
                            "name": "id",
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
                            "name": "dateAdded",
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
                                "kind": "Literal",
                                "name": "first",
                                "value": 0,
                                "type": "Int"
                              }
                            ],
                            "concreteType": "CommentPayloadConnection",
                            "name": "replies",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "totalCount",
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "CommentPayloadEdge",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "cursor",
                                    "storageKey": null
                                  },
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
                                        "name": "dateAdded",
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
                                            "name": "body",
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
                                        "name": "id",
                                        "storageKey": null
                                      }
                                    ],
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
                                "kind": "Literal",
                                "name": "first",
                                "value": 0,
                                "type": "Int"
                              }
                            ],
                            "handle": "connection",
                            "name": "replies",
                            "key": "repliesContainer_replies",
                            "filters": null
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
                        "name": "hasNextPage",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "endCursor",
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
                  }
                ],
                "handle": "connection",
                "name": "comments",
                "key": "commentsContainer_comments",
                "filters": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "LiveStreamPayloadEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "LiveStream",
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
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "audioId",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "coverImageUrl",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "liveStreamUrl",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "playCount",
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
                  }
                ],
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
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "endCursor",
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
            "name": "filter",
            "variableName": "filter",
            "type": "FilterInput"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "count",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "genre",
            "variableName": "genre",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "searchQuery",
            "variableName": "searchQuery",
            "type": "String"
          }
        ],
        "handle": "connection",
        "name": "liveStreams",
        "key": "radiosContainer_liveStreams",
        "filters": [
          "genre",
          "searchQuery",
          "filter"
        ]
      }
    ]
  },
  "text": "query radiosContainerForwardQuery(\n  $count: Int!\n  $cursor: String\n  $genre: String\n  $searchQuery: String\n  $filter: FilterInput\n) {\n  ...radiosContainer\n}\n\nfragment radiosContainer on Query {\n  liveStreams(first: $count, after: $cursor, genre: $genre, searchQuery: $searchQuery, filter: $filter) {\n    items {\n      ...sideBarContainer_audios\n      id\n    }\n    edges {\n      cursor\n      node {\n        __typename\n        id\n        audioId\n        name\n        coverImageUrl\n        liveStreamUrl\n        ...radioContainer_liveStream\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment sideBarContainer_audios on Audio {\n  audioId\n  name\n  ...commentBoxContainer_audio\n  ...commentsContainer_audio\n}\n\nfragment radioContainer_liveStream on LiveStream {\n  audioId\n  name\n  coverImageUrl\n  liveStreamUrl\n  playCount\n  likes\n  dislikes\n  ...likeAudioContainer_audio\n  ...dislikeAudioContainer_audio\n}\n\nfragment likeAudioContainer_audio on Audio {\n  id\n  audioId\n}\n\nfragment dislikeAudioContainer_audio on Audio {\n  id\n  audioId\n}\n\nfragment commentBoxContainer_audio on Audio {\n  id\n  audioId\n  name\n}\n\nfragment commentsContainer_audio on Audio {\n  id\n  ...commentBoxContainer_audio\n  ...replyBoxContainer_audio\n  comments(first: $count, after: $cursor) {\n    edges {\n      node {\n        __typename\n        commentId\n        ...commentContainer_comment\n        id\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment replyBoxContainer_audio on Audio {\n  id\n  audioId\n  name\n}\n\nfragment commentContainer_comment on Comment {\n  id\n  commentId\n  body\n  dateAdded\n  likes\n  dislikes\n  user {\n    userName\n    id\n  }\n  ...repliesContainer_comment\n  ...likeCommentContainer_comment\n  ...dislikeCommentContainer_comment\n}\n\nfragment repliesContainer_comment on Comment {\n  id\n  replies(first: 0, after: $cursor) {\n    totalCount\n    edges {\n      cursor\n      node {\n        __typename\n        commentId\n        ...replyContainer_reply\n        id\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment likeCommentContainer_comment on Comment {\n  id\n  commentId\n}\n\nfragment dislikeCommentContainer_comment on Comment {\n  id\n  commentId\n}\n\nfragment replyContainer_reply on Comment {\n  commentId\n  body\n  dateAdded\n  likes\n  dislikes\n  user {\n    userName\n    id\n  }\n  originalComment {\n    body\n    user {\n      userName\n      id\n    }\n    id\n  }\n  ...likeCommentContainer_comment\n  ...dislikeCommentContainer_comment\n}\n"
};

module.exports = batch;
