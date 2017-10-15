/**
 * @flow
 * @relayHash e73dc63d855bf07226d4d2fac9ba133a
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type songsContainerQueryResponse = {|
  +songs: ?$ReadOnlyArray<?{| |}>;
|};
*/


/*
query songsContainerQuery {
  songs {
    ...songsContainer_songs
    id
  }
}

fragment songsContainer_songs on Song {
  id
  name
  coverImageUrl
  artist
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "songsContainerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Song",
        "name": "songs",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "songsContainer_songs",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "SongQuery"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "songsContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "songsContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Song",
        "name": "songs",
        "plural": true,
        "selections": [
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
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "artist",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query songsContainerQuery {\n  songs {\n    ...songsContainer_songs\n    id\n  }\n}\n\nfragment songsContainer_songs on Song {\n  id\n  name\n  coverImageUrl\n  artist\n}\n"
};

module.exports = batch;
