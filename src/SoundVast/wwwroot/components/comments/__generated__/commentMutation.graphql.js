/**
 * @flow
 * @relayHash f7db6e6c9a2b6a7340efafb0871b59f4
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
    +comment: ?{|
      +id: string;
    |};
  |};
|};
*/


/*
mutation commentMutation(
  $input: SaveCommentInput!
) {
  comment(input: $input) {
    comment {
      id
    }
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
  "text": "mutation commentMutation(\n  $input: SaveCommentInput!\n) {\n  comment(input: $input) {\n    comment {\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
