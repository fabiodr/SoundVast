/**
 * @flow
 * @relayHash 46bc57e23d9b807496cb668446fdf9ae
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type rateCommentMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    id: number;
    liked: boolean;
  };
|};
export type rateCommentMutationResponse = {|
  +rateComment: ?{|
    +rating: ?{|
      +comment: ?{|
        +likes: number;
        +dislikes: number;
      |};
    |};
  |};
|};
*/


/*
mutation rateCommentMutation(
  $input: RateInput!
) {
  rateComment(input: $input) {
    rating {
      comment {
        likes
        dislikes
        id
      }
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
        "type": "RateInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "rateCommentMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "RateInput!"
          }
        ],
        "concreteType": "RateAudioPayload",
        "name": "rateComment",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Rating",
            "name": "rating",
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
                    "name": "likes",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "dislikes",
                    "storageKey": null
                  }
                ],
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
  "name": "rateCommentMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "RateInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "rateCommentMutation",
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
            "type": "RateInput!"
          }
        ],
        "concreteType": "RateAudioPayload",
        "name": "rateComment",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Rating",
            "name": "rating",
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
  "text": "mutation rateCommentMutation(\n  $input: RateInput!\n) {\n  rateComment(input: $input) {\n    rating {\n      comment {\n        likes\n        dislikes\n        id\n      }\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
