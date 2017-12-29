/**
 * @flow
 * @relayHash 393bc15fdc7ecab22f139842d8c4c3fb
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type songGenresContainerQueryResponse = {|
  +songGenres: ?$ReadOnlyArray<?{| |}>;
|};
*/


/*
query songGenresContainerQuery {
  songGenres {
    ...songGenresContainer_genres
    id
  }
}

fragment songGenresContainer_genres on Genre {
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
    "name": "songGenresContainerQuery",
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
            "name": "songGenresContainer_genres",
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
  "name": "songGenresContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "songGenresContainerQuery",
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
  "text": "query songGenresContainerQuery {\n  songGenres {\n    ...songGenresContainer_genres\n    id\n  }\n}\n\nfragment songGenresContainer_genres on Genre {\n  id\n  name\n  coverImageUrl\n}\n"
};

module.exports = batch;
