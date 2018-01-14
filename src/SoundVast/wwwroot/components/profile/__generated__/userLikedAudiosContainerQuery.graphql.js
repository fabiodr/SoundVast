/**
 * @flow
 * @relayHash 984d2982b142b0493d8fcfbe3a43bac7
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type userLikedAudiosContainerQueryResponse = {|
  +user: ?{| |};
|};
*/


/*
query userLikedAudiosContainerQuery {
  user {
    ...userLikedAudiosContainer_user
    id
  }
}

fragment userLikedAudiosContainer_user on ApplicationUser {
  likedSongs {
    audioId
    ...songContainer_song
    id
  }
}

fragment songContainer_song on Song {
  audioId
  name
  coverImageUrl
  artists {
    name
    id
  }
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
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "userLikedAudiosContainerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "ApplicationUser",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "userLikedAudiosContainer_user",
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
  "name": "userLikedAudiosContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "userLikedAudiosContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "ApplicationUser",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Song",
            "name": "likedSongs",
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
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "type": "Song",
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
                    "name": "coverImageUrl",
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
                ]
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
    ]
  },
  "text": "query userLikedAudiosContainerQuery {\n  user {\n    ...userLikedAudiosContainer_user\n    id\n  }\n}\n\nfragment userLikedAudiosContainer_user on ApplicationUser {\n  likedSongs {\n    audioId\n    ...songContainer_song\n    id\n  }\n}\n\nfragment songContainer_song on Song {\n  audioId\n  name\n  coverImageUrl\n  artists {\n    name\n    id\n  }\n  playCount\n  likes\n  dislikes\n  ...likeAudioContainer_audio\n  ...dislikeAudioContainer_audio\n}\n\nfragment likeAudioContainer_audio on Audio {\n  id\n  audioId\n}\n\nfragment dislikeAudioContainer_audio on Audio {\n  id\n  audioId\n}\n"
};

module.exports = batch;
