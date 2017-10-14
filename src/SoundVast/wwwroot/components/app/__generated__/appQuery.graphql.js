/**
 * @flow
 * @relayHash 3fcfc9b4959ca4eeb0171580618237af
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type appQueryResponse = {|
  +song: ?{| |};
|};
*/


/*
query appQuery {
  song {
    ...songsContainer_songs
  }
}

fragment songsContainer_songs on Song {
  name
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "appQuery",
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
            "kind": "FragmentSpread",
            "name": "songsContainer_songs",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "SongsQuery"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "appQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "appQuery",
    "operation": "query",
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
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query appQuery {\n  song {\n    ...songsContainer_songs\n  }\n}\n\nfragment songsContainer_songs on Song {\n  name\n}\n"
};

module.exports = batch;
