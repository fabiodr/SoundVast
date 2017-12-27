/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type userPlaylistsContainer = {|
  +playlists: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string;
      +node: ?{|
        +playlistId: number;
        +name: string;
        +coverImageUrl: ?string;
        +songPlaylists: ?{|
          +items: ?$ReadOnlyArray<?{|
            +song: ?{|
              +audioId: number;
              +name: string;
              +artist: ?string;
              +coverImageUrl: string;
              +free: boolean;
            |};
          |}>;
        |};
      |};
    |}>;
    +pageInfo: {|
      +hasNextPage: boolean;
    |};
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
          "playlists"
        ]
      }
    ]
  },
  "name": "userPlaylistsContainer",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "playlists",
      "args": null,
      "concreteType": "PlaylistPayloadConnection",
      "name": "__userPlaylistsContainer_playlists_connection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "PlaylistPayloadEdge",
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
              "concreteType": "Playlist",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "playlistId",
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
                  "concreteType": "SongPlaylistPayloadConnection",
                  "name": "songPlaylists",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "args": null,
                      "concreteType": "SongPlaylist",
                      "name": "items",
                      "plural": true,
                      "selections": [
                        {
                          "kind": "LinkedField",
                          "alias": null,
                          "args": null,
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
                              "name": "artist",
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
    }
  ],
  "type": "ApplicationUser"
};

module.exports = fragment;
