/**
 * @flow
 * @relayHash 68d74965c1b2a302cd953859361f9a24
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type flagCommentMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    commentId: number;
    reason: string;
    additionalDetails?: ?string;
  };
|};
export type flagCommentMutationResponse = {|
  +flagComment: ?{|
    +flag: ?{|
      +id: string;
    |};
  |};
|};
*/


/*
mutation flagCommentMutation(
  $input: FlagCommentInput!
) {
  flagComment(input: $input) {
    flag {
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
        "type": "FlagCommentInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "flagCommentMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "FlagCommentInput!"
          }
        ],
        "concreteType": "FlagObjectPayload",
        "name": "flagComment",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Flag",
            "name": "flag",
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
  "name": "flagCommentMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "FlagCommentInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "flagCommentMutation",
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
            "type": "FlagCommentInput!"
          }
        ],
        "concreteType": "FlagObjectPayload",
        "name": "flagComment",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Flag",
            "name": "flag",
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
  "text": "mutation flagCommentMutation(\n  $input: FlagCommentInput!\n) {\n  flagComment(input: $input) {\n    flag {\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
