/**
 * @flow
 * @relayHash 34b189872f83ad2e892d3e3f3c3287d2
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type saveSongMutationVariables = {|
  formValues: {
    name: string;
    artist?: ?string;
    coverImageUrl: string;
    genreId?: ?number;
  };
|};
export type saveSongMutationResponse = {|
  +saveSong: ?{|
    +id: string;
  |};
|};
*/


/*
mutation saveSongMutation(
  $formValues: SongInput!
) {
  saveSong(song: $formValues) {
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
        "type": "SongInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "saveSongMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "song",
            "variableName": "formValues",
            "type": "SongInput!"
          }
        ],
        "concreteType": "Song",
        "name": "saveSong",
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
  "name": "saveSongMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "formValues",
        "type": "SongInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "saveSongMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "song",
            "variableName": "formValues",
            "type": "SongInput!"
          }
        ],
        "concreteType": "Song",
        "name": "saveSong",
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
  "text": "mutation saveSongMutation(\n  $formValues: SongInput!\n) {\n  saveSong(song: $formValues) {\n    id\n  }\n}\n"
};

module.exports = batch;
