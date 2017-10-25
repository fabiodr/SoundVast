/**
 * @flow
 * @relayHash ae7642db2c081db45ad4e41af7febbc4
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type uploadImageMutationVariables = {| |};
export type uploadImageMutationResponse = {|
  +uploadImage: ?{|
    +imagePath: ?string;
  |};
|};
*/


/*
mutation uploadImageMutation {
  uploadImage {
    imagePath
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "uploadImageMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "UploadImage",
        "name": "uploadImage",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "imagePath",
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
  "name": "uploadImageMutation",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "uploadImageMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "UploadImage",
        "name": "uploadImage",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "imagePath",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation uploadImageMutation {\n  uploadImage {\n    imagePath\n  }\n}\n"
};

module.exports = batch;
