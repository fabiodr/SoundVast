/**
 * @flow
 * @relayHash 55677597231a57930bc0f068941392d1
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type radioGenresContainerQueryResponse = {|
  +liveStreamGenres: ?$ReadOnlyArray<?{| |}>;
|};
*/


/*
query radioGenresContainerQuery {
  liveStreamGenres {
    ...radioGenresContainer_genres
    id
  }
}

fragment radioGenresContainer_genres on Genre {
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
    "name": "radioGenresContainerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "LiveStreamGenre",
        "name": "liveStreamGenres",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "radioGenresContainer_genres",
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
  "name": "radioGenresContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "radioGenresContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "LiveStreamGenre",
        "name": "liveStreamGenres",
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
  "text": "query radioGenresContainerQuery {\n  liveStreamGenres {\n    ...radioGenresContainer_genres\n    id\n  }\n}\n\nfragment radioGenresContainer_genres on Genre {\n  id\n  name\n  coverImageUrl\n}\n"
};

module.exports = batch;
