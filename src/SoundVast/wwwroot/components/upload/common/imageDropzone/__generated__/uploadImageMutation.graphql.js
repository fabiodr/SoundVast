/**
 * @flow
 * @relayHash 2cdf6771dc6a4a06c614de7ed8345e56
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type uploadImageMutationVariables = {| |};
export type uploadImageMutationResponse = {|
  +uploadImage: ?string;
|};
*/


/*
mutation uploadImageMutation {
  uploadImage
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
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "uploadImage",
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
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "uploadImage",
        "storageKey": null
      }
    ]
  },
  "text": "mutation uploadImageMutation {\n  uploadImage\n}\n"
};

module.exports = batch;
