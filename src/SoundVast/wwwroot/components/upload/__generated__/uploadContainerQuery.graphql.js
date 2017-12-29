/**
 * @flow
 * @relayHash 83e75bc75a3e61dddf05324b8a55fce8
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type uploadContainerQueryResponse = {|
  +songGenres: ?$ReadOnlyArray<?{| |}>;
  +liveStreamGenres: ?$ReadOnlyArray<?{| |}>;
  +user: ?{| |};
|};
*/


/*
query uploadContainerQuery {
  songGenres {
    ...songGenresFieldContainer_genres
    id
  }
  liveStreamGenres {
    ...radioGenresFieldContainer_genres
    id
  }
  user {
    ...withAuthorization_user
    id
  }
}

fragment songGenresFieldContainer_genres on Genre {
  id
  name
}

fragment radioGenresFieldContainer_genres on Genre {
  id
  name
}

fragment withAuthorization_user on ApplicationUser {
  userName
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "uploadContainerQuery",
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
            "name": "songGenresFieldContainer_genres",
            "args": null
          }
        ],
        "storageKey": null
      },
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
            "name": "radioGenresFieldContainer_genres",
            "args": null
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
            "kind": "FragmentSpread",
            "name": "withAuthorization_user",
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
  "name": "uploadContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "uploadContainerQuery",
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
          }
        ],
        "storageKey": null
      },
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
      }
    ]
  },
  "text": "query uploadContainerQuery {\n  songGenres {\n    ...songGenresFieldContainer_genres\n    id\n  }\n  liveStreamGenres {\n    ...radioGenresFieldContainer_genres\n    id\n  }\n  user {\n    ...withAuthorization_user\n    id\n  }\n}\n\nfragment songGenresFieldContainer_genres on Genre {\n  id\n  name\n}\n\nfragment radioGenresFieldContainer_genres on Genre {\n  id\n  name\n}\n\nfragment withAuthorization_user on ApplicationUser {\n  userName\n}\n"
};

module.exports = batch;
