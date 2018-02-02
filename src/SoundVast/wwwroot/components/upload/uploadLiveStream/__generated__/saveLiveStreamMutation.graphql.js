/**
 * @flow
 * @relayHash 00bf8a65650e661b59bcc058c83cb8cd
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type saveLiveStreamMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    name: string;
    liveStreamUrl: string;
    coverImageUrl: string;
    tags?: ?$ReadOnlyArray<?{
      id?: ?number;
      tag?: ?string;
    }>;
    genreIds?: ?$ReadOnlyArray<?number>;
  };
|};
export type saveLiveStreamMutationResponse = {|
  +saveLiveStream: ?{|
    +liveStream: {|
      +id: string;
    |};
  |};
|};
*/


/*
mutation saveLiveStreamMutation(
  $input: SaveLiveStreamInput!
) {
  saveLiveStream(input: $input) {
    liveStream {
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
        "type": "SaveLiveStreamInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "saveLiveStreamMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "SaveLiveStreamInput!"
          }
        ],
        "concreteType": "SaveLiveStreamPayload",
        "name": "saveLiveStream",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "LiveStream",
            "name": "liveStream",
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
  "name": "saveLiveStreamMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "SaveLiveStreamInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "saveLiveStreamMutation",
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
            "type": "SaveLiveStreamInput!"
          }
        ],
        "concreteType": "SaveLiveStreamPayload",
        "name": "saveLiveStream",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "LiveStream",
            "name": "liveStream",
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
  "text": "mutation saveLiveStreamMutation(\n  $input: SaveLiveStreamInput!\n) {\n  saveLiveStream(input: $input) {\n    liveStream {\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
