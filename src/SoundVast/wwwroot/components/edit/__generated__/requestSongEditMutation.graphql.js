/**
 * @flow
 * @relayHash d518f8f4f7b25af7eb446ebbd90948a6
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type requestSongEditMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    songId: number;
    name: string;
    artist?: ?string;
    free: boolean;
    coverImageUrl: string;
    genreId?: ?number;
  };
|};
export type requestSongEditMutationResponse = {|
  +requestSongEdit: ?{|
    +clientMutationId: ?string;
  |};
|};
*/


/*
mutation requestSongEditMutation(
  $input: RequestEditSongInput!
) {
  requestSongEdit(input: $input) {
    clientMutationId
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "RequestEditSongInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "requestSongEditMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "RequestEditSongInput!"
          }
        ],
        "concreteType": "RequestEditSongPayload",
        "name": "requestSongEdit",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "clientMutationId",
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
  "name": "requestSongEditMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "RequestEditSongInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "requestSongEditMutation",
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
            "type": "RequestEditSongInput!"
          }
        ],
        "concreteType": "RequestEditSongPayload",
        "name": "requestSongEdit",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "clientMutationId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation requestSongEditMutation(\n  $input: RequestEditSongInput!\n) {\n  requestSongEdit(input: $input) {\n    clientMutationId\n  }\n}\n"
};

module.exports = batch;