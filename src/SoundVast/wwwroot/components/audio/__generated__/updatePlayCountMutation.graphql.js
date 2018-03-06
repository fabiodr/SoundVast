/**
 * @flow
 * @relayHash 102d97b6f78fe12feed6850392dd1339
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type updatePlayCountMutationVariables = {|
  input: {
    clientMutationId?: ?string,
    audioId: number,
  },
|};
export type updatePlayCountMutationResponse = {|
  +updatePlayCount: ?{|
    +audio: {|
      +playCount: number,
    |},
  |},
|};
*/


/*
mutation updatePlayCountMutation(
  $input: UpdatePlayCountInput!
) {
  updatePlayCount(input: $input) {
    audio {
      __typename
      playCount
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
    "type": "UpdatePlayCountInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "UpdatePlayCountInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "playCount",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "updatePlayCountMutation",
  "id": null,
  "text": "mutation updatePlayCountMutation(\n  $input: UpdatePlayCountInput!\n) {\n  updatePlayCount(input: $input) {\n    audio {\n      __typename\n      playCount\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "updatePlayCountMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updatePlayCount",
        "storageKey": null,
        "args": v1,
        "concreteType": "UpdatePlayCountPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "audio",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              v2
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "updatePlayCountMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updatePlayCount",
        "storageKey": null,
        "args": v1,
        "concreteType": "UpdatePlayCountPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "audio",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "__typename",
                "args": null,
                "storageKey": null
              },
              v2,
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
    ]
  }
};
})();
(node/*: any*/).hash = 'b4ce21b7ca1b77cec0297ed893602927';
module.exports = node;
