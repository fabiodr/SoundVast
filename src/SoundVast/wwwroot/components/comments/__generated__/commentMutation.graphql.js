/**
 * @flow
 * @relayHash 1a7316907942c766e6d10a7fb3deb3ba
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type commentMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    body: string;
    audioId: number;
    originalCommentId?: ?number;
  };
|};
export type commentMutationResponse = {|
  +comment: ?{|
    +comment: ?{| |};
  |};
|};
*/


/*
mutation commentMutation(
  $input: SaveCommentInput!
) {
  comment(input: $input) {
    comment {
      ...commentContainer_comment
      id
    }
  }
}

fragment commentContainer_comment on Comment {
  commentId
  body
  dateAdded
  likes
  dislikes
  repliesCount
  originalComment {
    id
  }
  user {
    userName
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "SaveCommentInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "commentMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "SaveCommentInput!"
          }
        ],
        "concreteType": "SaveCommentPayload",
        "name": "comment",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Comment",
            "name": "comment",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "commentContainer_comment",
                "args": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "commentMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "SaveCommentInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "commentMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "SaveCommentInput!"
          }
        ],
        "concreteType": "SaveCommentPayload",
        "name": "comment",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Comment",
            "name": "comment",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "commentId",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "body",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "dateAdded",
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "repliesCount",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Comment",
                "name": "originalComment",
                "plural": false,
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
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation commentMutation(\n  $input: SaveCommentInput!\n) {\n  comment(input: $input) {\n    comment {\n      ...commentContainer_comment\n      id\n    }\n  }\n}\n\nfragment commentContainer_comment on Comment {\n  commentId\n  body\n  dateAdded\n  likes\n  dislikes\n  repliesCount\n  originalComment {\n    id\n  }\n  user {\n    userName\n    id\n  }\n}\n"
};

module.exports = batch;
