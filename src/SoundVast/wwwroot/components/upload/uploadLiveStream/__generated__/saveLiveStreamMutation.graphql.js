/**
 * @flow
 * @relayHash 25c1cb2c0084d034ec1bec66d9a4df9c
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type saveLiveStreamMutationVariables = {|
  formValues: {
    name: string;
    liveStreamUrl: string;
    coverImageUrl: string;
    genreId?: ?number;
  };
|};
export type saveLiveStreamMutationResponse = {|
  +saveLiveStream: ?{|
    +id: string;
  |};
|};
*/


/*
mutation saveLiveStreamMutation(
  $formValues: LiveStreamInput!
) {
  saveLiveStream(liveStream: $formValues) {
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "formValues",
        "type": "LiveStreamInput!",
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
            "name": "liveStream",
            "variableName": "formValues",
            "type": "LiveStreamInput!"
          }
        ],
        "concreteType": "LiveStream",
        "name": "saveLiveStream",
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
    "type": "AppMutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "saveLiveStreamMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "formValues",
        "type": "LiveStreamInput!",
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
            "name": "liveStream",
            "variableName": "formValues",
            "type": "LiveStreamInput!"
          }
        ],
        "concreteType": "LiveStream",
        "name": "saveLiveStream",
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
    ]
  },
  "text": "mutation saveLiveStreamMutation(\n  $formValues: LiveStreamInput!\n) {\n  saveLiveStream(liveStream: $formValues) {\n    id\n  }\n}\n"
};

module.exports = batch;
