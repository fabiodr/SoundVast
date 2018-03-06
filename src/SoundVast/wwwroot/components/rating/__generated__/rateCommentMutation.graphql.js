/**
 * @flow
 * @relayHash d07dab946591695cd3e23e1492dbd50d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type rateCommentMutationVariables = {|
  input: {
    clientMutationId?: ?string,
    id: number,
    liked: boolean,
  },
|};
export type rateCommentMutationResponse = {|
  +rateComment: ?{|
    +rating: ?{|
      +comment: ?{|
        +likes: number,
        +dislikes: number,
      |},
    |},
  |},
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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RateInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "RateInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "likes",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "dislikes",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "rateCommentMutation",
  "id": null,
  "text": "mutation rateCommentMutation(\n  $input: RateInput!\n) {\n  rateComment(input: $input) {\n    rating {\n      comment {\n        likes\n        dislikes\n        id\n      }\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "rateCommentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "rateComment",
        "storageKey": null,
        "args": v1,
        "concreteType": "RateAudioPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "rating",
            "storageKey": null,
            "args": null,
            "concreteType": "Rating",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "comment",
                "storageKey": null,
                "args": null,
                "concreteType": "Comment",
                "plural": false,
                "selections": [
                  v2,
                  v3
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "rateCommentMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "rateComment",
        "storageKey": null,
        "args": v1,
        "concreteType": "RateAudioPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "rating",
            "storageKey": null,
            "args": null,
            "concreteType": "Rating",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "comment",
                "storageKey": null,
                "args": null,
                "concreteType": "Comment",
                "plural": false,
                "selections": [
                  v2,
                  v3,
                  v4
                ]
              },
              v4
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '1fbdf224ea3e3217477663c373c3e91f';
module.exports = node;
