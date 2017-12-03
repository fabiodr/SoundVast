/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type songsContainer = {|
  +songs: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +audioId: number;
        +name: string;
        +coverImageUrl: string;
        +artist: ?string;
        +likes: number;
        +dislikes: number;
        +comments: ?{|
          +edges: ?$ReadOnlyArray<?{|
            +node: ?{|
              +commentId: number;
              +body: string;
              +date: any;
              +likes: number;
              +dislikes: number;
              +user: {|
                +userName: string;
              |};
            |};
          |}>;
        |};
      |};
    |}>;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "count",
      "type": "Int"
    },
    {
      "kind": "RootArgument",
      "name": "cursor",
      "type": "String"
    },
    {
      "kind": "RootArgument",
      "name": "genre",
      "type": "String"
    },
    {
      "kind": "RootArgument",
      "name": "filter",
      "type": "FilterInput"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "songs"
        ]
      }
    ]
  },
  "name": "songsContainer",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "songs",
      "args": [
        {
          "kind": "Variable",
          "name": "filter",
          "variableName": "filter",
          "type": "FilterInput"
        },
        {
          "kind": "Variable",
          "name": "genre",
          "variableName": "genre",
          "type": "String"
        }
      ],
      "concreteType": "SongPayloadConnection",
      "name": "__songsContainer_songs_connection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "SongPayloadEdge",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "Song",
              "name": "node",
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
                  "name": "artist",
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
                              "kind": "LinkedField",
                              "alias": null,
                              "args": null,
                              "concreteType": "User",
                              "name": "user",
                              "plural": false,
                              "selections": [
                                {
                                  "kind": "ScalarField",
                                  "alias": null,
                                  "args": null,
                                  "name": "userName",
                                  "storageKey": null
                                }
                              ],
                              "storageKey": null
                            }
                          ],
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
                  "name": "__typename",
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
    }
  ],
  "type": "Query"
};

module.exports = fragment;
