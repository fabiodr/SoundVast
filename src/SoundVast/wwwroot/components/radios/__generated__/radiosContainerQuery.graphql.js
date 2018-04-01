/**
 * @flow
 * @relayHash 649abd3fd9a3adb171f65a6986597be2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type radiosContainer$ref = any;
export type radiosContainerQueryVariables = {|
  count: number,
  cursor?: ?string,
  genre?: ?string,
  searchQuery?: ?string,
  filter?: ?{
    newest?: ?boolean,
  },
|};
export type radiosContainerQueryResponse = {|
  +$fragmentRefs: radiosContainer$ref,
|};
*/


/*
query radiosContainerQuery(
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
    edges {
      cursor
      node {
        audioId
        ...radioContainer_liveStream
        ...sideBarContainer_audios
        id
        __typename
      }
    }
    items {
      audioId
      name
      streamDatas {
        liveStreamUrl
        id
      }
      coverImageUrl
      id
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment radioContainer_liveStream on LiveStream {
  audioId
  name
  coverImageUrl
  websiteUrl
  likes
  dislikes
  ...likeAudioContainer_audio
  ...dislikeAudioContainer_audio
  ...mobileSideBarContainer_audio
}

fragment sideBarContainer_audios on Audio {
  audioId
  name
  ...commentBoxContainer_audio
  ...commentsContainer_audio
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

fragment likeAudioContainer_audio on Audio {
  id
  audioId
}

fragment dislikeAudioContainer_audio on Audio {
  id
  audioId
}

fragment mobileSideBarContainer_audio on Audio {
  audioId
  name
  ...commentBoxContainer_audio
  ...commentsContainer_audio
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
v1 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "cursor",
  "type": "String"
},
v2 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "count",
  "type": "Int"
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "audioId",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "coverImageUrl",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "likes",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "dislikes",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "commentId",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "body",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "dateAdded",
  "args": null,
  "storageKey": null
},
v13 = {
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
    v9
  ]
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "endCursor",
  "args": null,
  "storageKey": null
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "hasNextPage",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    v16,
    v15
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "radiosContainerQuery",
  "id": null,
  "text": "query radiosContainerQuery(\n  $count: Int!\n  $cursor: String\n  $genre: String\n  $searchQuery: String\n  $filter: FilterInput\n) {\n  ...radiosContainer\n}\n\nfragment radiosContainer on Query {\n  liveStreams(first: $count, after: $cursor, genre: $genre, searchQuery: $searchQuery, filter: $filter) {\n    edges {\n      cursor\n      node {\n        audioId\n        ...radioContainer_liveStream\n        ...sideBarContainer_audios\n        id\n        __typename\n      }\n    }\n    items {\n      audioId\n      name\n      streamDatas {\n        liveStreamUrl\n        id\n      }\n      coverImageUrl\n      id\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment radioContainer_liveStream on LiveStream {\n  audioId\n  name\n  coverImageUrl\n  websiteUrl\n  likes\n  dislikes\n  ...likeAudioContainer_audio\n  ...dislikeAudioContainer_audio\n  ...mobileSideBarContainer_audio\n}\n\nfragment sideBarContainer_audios on Audio {\n  audioId\n  name\n  ...commentBoxContainer_audio\n  ...commentsContainer_audio\n}\n\nfragment commentBoxContainer_audio on Audio {\n  id\n  audioId\n  name\n}\n\nfragment commentsContainer_audio on Audio {\n  id\n  ...commentBoxContainer_audio\n  ...replyBoxContainer_audio\n  comments(first: $count, after: $cursor) {\n    edges {\n      node {\n        commentId\n        ...commentContainer_comment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment replyBoxContainer_audio on Audio {\n  id\n  audioId\n  name\n}\n\nfragment commentContainer_comment on Comment {\n  id\n  commentId\n  body\n  dateAdded\n  likes\n  dislikes\n  user {\n    userName\n    id\n  }\n  ...repliesContainer_comment\n  ...likeCommentContainer_comment\n  ...dislikeCommentContainer_comment\n}\n\nfragment repliesContainer_comment on Comment {\n  id\n  replies(first: 0, after: $cursor) {\n    totalCount\n    edges {\n      cursor\n      node {\n        commentId\n        ...replyContainer_reply\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment likeCommentContainer_comment on Comment {\n  id\n  commentId\n}\n\nfragment dislikeCommentContainer_comment on Comment {\n  id\n  commentId\n}\n\nfragment replyContainer_reply on Comment {\n  commentId\n  body\n  dateAdded\n  likes\n  dislikes\n  user {\n    userName\n    id\n  }\n  originalComment {\n    body\n    user {\n      userName\n      id\n    }\n    id\n  }\n  ...likeCommentContainer_comment\n  ...dislikeCommentContainer_comment\n}\n\nfragment likeAudioContainer_audio on Audio {\n  id\n  audioId\n}\n\nfragment dislikeAudioContainer_audio on Audio {\n  id\n  audioId\n}\n\nfragment mobileSideBarContainer_audio on Audio {\n  audioId\n  name\n  ...commentBoxContainer_audio\n  ...commentsContainer_audio\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "radiosContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "radiosContainer",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "radiosContainerQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "liveStreams",
        "storageKey": null,
        "args": [
          v1,
          {
            "kind": "Variable",
            "name": "filter",
            "variableName": "filter",
            "type": "FilterInput"
          },
          v2,
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
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "LiveStreamPayloadEdge",
            "plural": true,
            "selections": [
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "LiveStream",
                "plural": false,
                "selections": [
                  v4,
                  v5,
                  v6,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "websiteUrl",
                    "args": null,
                    "storageKey": null
                  },
                  v7,
                  v8,
                  v9,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "comments",
                    "storageKey": null,
                    "args": [
                      v1,
                      v2
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
                              v10,
                              v9,
                              v11,
                              v12,
                              v7,
                              v8,
                              v13,
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "replies",
                                "storageKey": null,
                                "args": [
                                  v1,
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
                                      v3,
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "node",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "Comment",
                                        "plural": false,
                                        "selections": [
                                          v10,
                                          v11,
                                          v12,
                                          v7,
                                          v8,
                                          v13,
                                          {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "originalComment",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "Comment",
                                            "plural": false,
                                            "selections": [
                                              v11,
                                              v13,
                                              v9
                                            ]
                                          },
                                          v9,
                                          v14
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
                                      v15,
                                      v16
                                    ]
                                  }
                                ]
                              },
                              {
                                "kind": "LinkedHandle",
                                "alias": null,
                                "name": "replies",
                                "args": [
                                  v1,
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
                              v14
                            ]
                          },
                          v3
                        ]
                      },
                      v17
                    ]
                  },
                  {
                    "kind": "LinkedHandle",
                    "alias": null,
                    "name": "comments",
                    "args": [
                      v1,
                      v2
                    ],
                    "handle": "connection",
                    "key": "commentsContainer_comments",
                    "filters": null
                  },
                  v14
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "items",
            "storageKey": null,
            "args": null,
            "concreteType": "LiveStream",
            "plural": true,
            "selections": [
              v4,
              v5,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "streamDatas",
                "storageKey": null,
                "args": null,
                "concreteType": "StreamData",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "liveStreamUrl",
                    "args": null,
                    "storageKey": null
                  },
                  v9
                ]
              },
              v6,
              v9
            ]
          },
          v17
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "liveStreams",
        "args": [
          v1,
          {
            "kind": "Variable",
            "name": "filter",
            "variableName": "filter",
            "type": "FilterInput"
          },
          v2,
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
        "key": "radiosContainer_liveStreams",
        "filters": [
          "genre",
          "searchQuery",
          "filter"
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '84def48a6a552d56c373586abe7c452f';
module.exports = node;
