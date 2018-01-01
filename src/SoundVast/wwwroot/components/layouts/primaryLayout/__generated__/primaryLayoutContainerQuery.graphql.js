/**
 * @flow
 * @relayHash eb386bf31f459363b96d0e4264964207
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type primaryLayoutContainerQueryResponse = {|
  +user: ?{| |};
  +loginProviders: ?$ReadOnlyArray<?{| |}>;
|};
*/


/*
query primaryLayoutContainerQuery(
  $songId: Int
) {
  user {
    ...userButtonContainer_user
    ...unAuthorizedListContainer_user
    id
  }
  loginProviders {
    ...socialLoginsContainer_loginProviders
  }
  ...editSongModalContainer
}

fragment userButtonContainer_user on ApplicationUser {
  userName
  contributionScore
}

fragment unAuthorizedListContainer_user on ApplicationUser {
  userName
}

fragment socialLoginsContainer_loginProviders on LoginProvider {
  name
  displayName
}

fragment editSongModalContainer on Query {
  user {
    id
  }
  songGenres {
    ...songGenresFieldContainer_genres
    id
  }
  song(id: $songId) {
    name
    coverImageUrl
    free
    genres {
      id
    }
    id
  }
}

fragment songGenresFieldContainer_genres on Genre {
  id
  name
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "songId",
        "type": "Int",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "primaryLayoutContainerQuery",
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
            "name": "userButtonContainer_user",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "unAuthorizedListContainer_user",
            "args": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "LoginProvider",
        "name": "loginProviders",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "socialLoginsContainer_loginProviders",
            "args": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "FragmentSpread",
        "name": "editSongModalContainer",
        "args": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "primaryLayoutContainerQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "songId",
        "type": "Int",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "primaryLayoutContainerQuery",
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
            "name": "contributionScore",
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
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "LoginProvider",
        "name": "loginProviders",
        "plural": true,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "LoginProvider",
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
                "name": "displayName",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      },
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
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "songId",
            "type": "Int"
          }
        ],
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
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "SongGenre",
            "name": "genres",
            "plural": true,
            "selections": [
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
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query primaryLayoutContainerQuery(\n  $songId: Int\n) {\n  user {\n    ...userButtonContainer_user\n    ...unAuthorizedListContainer_user\n    id\n  }\n  loginProviders {\n    ...socialLoginsContainer_loginProviders\n  }\n  ...editSongModalContainer\n}\n\nfragment userButtonContainer_user on ApplicationUser {\n  userName\n  contributionScore\n}\n\nfragment unAuthorizedListContainer_user on ApplicationUser {\n  userName\n}\n\nfragment socialLoginsContainer_loginProviders on LoginProvider {\n  name\n  displayName\n}\n\nfragment editSongModalContainer on Query {\n  user {\n    id\n  }\n  songGenres {\n    ...songGenresFieldContainer_genres\n    id\n  }\n  song(id: $songId) {\n    name\n    coverImageUrl\n    free\n    genres {\n      id\n    }\n    id\n  }\n}\n\nfragment songGenresFieldContainer_genres on Genre {\n  id\n  name\n}\n"
};

module.exports = batch;
