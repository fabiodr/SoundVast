/**
 * @flow
 * @relayHash e47656e089d5ff764f2e2892e5cf14c0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type flagCommentMutationVariables = {|
  input: {
    clientMutationId?: ?string,
    commentId: number,
    reason: string,
    additionalDetails?: ?string,
  },
|};
export type flagCommentMutationResponse = {|
  +flagComment: ?{|
    +flag: ?{|
      +id: string,
    |},
  |},
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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "FlagCommentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "flagComment",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "FlagCommentInput!"
      }
    ],
    "concreteType": "FlagObjectPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "flag",
        "storageKey": null,
        "args": null,
        "concreteType": "Flag",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "flagCommentMutation",
  "id": null,
  "text": "mutation flagCommentMutation(\n  $input: FlagCommentInput!\n) {\n  flagComment(input: $input) {\n    flag {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "flagCommentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "flagCommentMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '9d288ff1030cabec275c09408d37e2b9';
module.exports = node;
