/**
 * @flow
 * @relayHash 2f7d69d5fadc2e75e7cff924b3a2cb5d
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type artistGenresContainerQueryResponse = {|
  +songGenres: ?$ReadOnlyArray<?{| |}>;
|};
*/


/*
query artistGenresContainerQuery {
  songGenres {
    ...artistGenresContainer_genres
    id
  }
}

fragment artistGenresContainer_genres on Genre {
  id
  name
  coverImageUrl
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "artistGenresContainerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "SongGenre",
        "name": "songGenres",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "artistGenresContainer_genres",
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
  "name": "artistGenresContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "artistGenresContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "SongGenre",
        "name": "songGenres",
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query artistGenresContainerQuery {\n  songGenres {\n    ...artistGenresContainer_genres\n    id\n  }\n}\n\nfragment artistGenresContainer_genres on Genre {\n  id\n  name\n  coverImageUrl\n}\n"
};

module.exports = batch;
