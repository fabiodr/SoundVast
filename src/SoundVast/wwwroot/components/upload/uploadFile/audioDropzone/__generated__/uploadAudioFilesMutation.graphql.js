/**
 * @flow
 * @relayHash d622d40eb404815938c2eda4421f8170
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type uploadAudioFilesMutationVariables = {| |};
export type uploadAudioFilesMutationResponse = {|
  +uploadImage: ?{|
    +imagePath: ?string;
  |};
|};
*/


/*
mutation uploadAudioFilesMutation {
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
    "name": "uploadAudioFilesMutation",
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
  "name": "uploadAudioFilesMutation",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "uploadAudioFilesMutation",
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
  "text": "mutation uploadAudioFilesMutation {\n  uploadImage {\n    imagePath\n  }\n}\n"
};

module.exports = batch;
