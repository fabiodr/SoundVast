/**
 * @flow
 * @relayHash 8fea98359f9a6ad849e73bfe7ef37d4c
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type userUploadsContainerQueryResponse = {|
  +user: ?{| |};
|};
*/


/*
query userUploadsContainerQuery {
  user {
    ...userUploadsContainer_user
    id
  }
}

fragment userUploadsContainer_user on ApplicationUser {
  uploads {
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
    "name": "userUploadsContainerQuery",
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
            "name": "userUploadsContainer_user",
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
  "name": "userUploadsContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "userUploadsContainerQuery",
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
            "name": "uploads",
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
  "text": "query userUploadsContainerQuery {\n  user {\n    ...userUploadsContainer_user\n    id\n  }\n}\n\nfragment userUploadsContainer_user on ApplicationUser {\n  uploads {\n    audioId\n    ...songContainer_song\n    id\n  }\n}\n\nfragment songContainer_song on Song {\n  audioId\n  name\n  coverImageUrl\n  artists {\n    name\n    id\n  }\n  playCount\n  likes\n  dislikes\n  ...likeAudioContainer_audio\n  ...dislikeAudioContainer_audio\n}\n\nfragment likeAudioContainer_audio on Audio {\n  id\n  audioId\n}\n\nfragment dislikeAudioContainer_audio on Audio {\n  id\n  audioId\n}\n"
};

module.exports = batch;
