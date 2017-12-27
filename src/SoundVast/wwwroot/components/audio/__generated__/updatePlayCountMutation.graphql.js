/**
 * @flow
 * @relayHash 7befd47f2ec5aa5c913ff16680500839
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type updatePlayCountMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    audioId: number;
  };
|};
export type updatePlayCountMutationResponse = {|
  +updatePlayCount: ?{|
    +audio: {|
      +playCount: number;
    |};
  |};
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

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "UpdatePlayCountInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "updatePlayCountMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "UpdatePlayCountInput!"
          }
        ],
        "concreteType": "UpdatePlayCountPayload",
        "name": "updatePlayCount",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": null,
            "name": "audio",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "playCount",
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
  "name": "updatePlayCountMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "UpdatePlayCountInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "updatePlayCountMutation",
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
            "type": "UpdatePlayCountInput!"
          }
        ],
        "concreteType": "UpdatePlayCountPayload",
        "name": "updatePlayCount",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": null,
            "name": "audio",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "playCount",
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
  "text": "mutation updatePlayCountMutation(\n  $input: UpdatePlayCountInput!\n) {\n  updatePlayCount(input: $input) {\n    audio {\n      __typename\n      playCount\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
