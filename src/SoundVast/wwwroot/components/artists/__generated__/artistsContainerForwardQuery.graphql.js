/**
 * @flow
 * @relayHash e1a3efd95b34b1f21d6b4b53f6ba8c14
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type artistsContainerForwardQueryResponse = {| |};
*/


/*
query artistsContainerForwardQuery(
  $count: Int!
  $cursor: String
  $genre: String
  $filter: FilterInput
  $originalCommentId: Int
) {
  ...artistsContainer
}

fragment artistsContainer on Query {
  artists(first: $count, after: $cursor, genre: $genre, filter: $filter) {
    edges {
      cursor
      node {
        __typename
        audioId
        songs {
          items {
            audioId
            name
            artists {
              name
              id
            }
            coverImageUrl
            free
            id
          }
        }
        ...artistContainer_artist
        id
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment artistContainer_artist on Artist {
  audioId
  name
  coverImageUrl
  playCount
  likes
  dislikes
  ...commentsContainer_audio
}

fragment commentsContainer_audio on Audio {
  ...commentBoxContainer_audio
  comments(first: $count, after: $cursor, originalCommentId: $originalCommentId) {
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

fragment commentBoxContainer_audio on Audio {
  id
  audioId
  name
}

fragment commentContainer_comment on Comment {
  commentId
  body
  dateAdded
  likes
  dislikes
  repliesCount
  originalComment {
    commentId
    id
  }
  user {
    userName
    id
  }
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
        "name": "filter",
        "type": "FilterInput",
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
    "name": "artistsContainerForwardQuery",
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "artistsContainer",
        "args": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "artistsContainerForwardQuery",
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
        "name": "filter",
        "type": "FilterInput",
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
    "name": "artistsContainerForwardQuery",
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
          }
        ],
        "concreteType": "ArtistPayloadConnection",
        "name": "artists",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "ArtistPayloadEdge",
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
                "concreteType": "Artist",
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
                    "name": "audioId",
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "SongPayloadConnection",
                    "name": "songs",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Song",
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
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": "Artist",
                            "name": "artists",
                            "plural": true,
                            "selections": [
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
                              }
                            ],
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
                            "name": "free",
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
                                    "name": "commentId",
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
          }
        ],
        "handle": "connection",
        "name": "artists",
        "key": "artistsContainer_artists",
        "filters": [
          "genre",
          "filter"
        ]
      }
    ]
  },
  "text": "query artistsContainerForwardQuery(\n  $count: Int!\n  $cursor: String\n  $genre: String\n  $filter: FilterInput\n  $originalCommentId: Int\n) {\n  ...artistsContainer\n}\n\nfragment artistsContainer on Query {\n  artists(first: $count, after: $cursor, genre: $genre, filter: $filter) {\n    edges {\n      cursor\n      node {\n        __typename\n        audioId\n        songs {\n          items {\n            audioId\n            name\n            artists {\n              name\n              id\n            }\n            coverImageUrl\n            free\n            id\n          }\n        }\n        ...artistContainer_artist\n        id\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment artistContainer_artist on Artist {\n  audioId\n  name\n  coverImageUrl\n  playCount\n  likes\n  dislikes\n  ...commentsContainer_audio\n}\n\nfragment commentsContainer_audio on Audio {\n  ...commentBoxContainer_audio\n  comments(first: $count, after: $cursor, originalCommentId: $originalCommentId) {\n    edges {\n      node {\n        __typename\n        commentId\n        ...commentContainer_comment\n        id\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment commentBoxContainer_audio on Audio {\n  id\n  audioId\n  name\n}\n\nfragment commentContainer_comment on Comment {\n  commentId\n  body\n  dateAdded\n  likes\n  dislikes\n  repliesCount\n  originalComment {\n    commentId\n    id\n  }\n  user {\n    userName\n    id\n  }\n}\n"
};

module.exports = batch;
