/**
 * @flow
 * @relayHash 8440ad6c7997113af02dd37be1815953
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type saveLiveStreamMutationVariables = {|
  input: {
    clientMutationId?: ?string,
    name: string,
    liveStreamUrl: string,
    coverImageName: string,
    websiteUrl?: ?string,
    country?: ?string,
    tags?: ?$ReadOnlyArray<?{
      id?: ?number,
      tag?: ?string,
    }>,
    genreIds?: ?$ReadOnlyArray<?string>,
  },
|};
export type saveLiveStreamMutationResponse = {|
  +saveLiveStream: ?{|
    +liveStream: {|
      +id: string,
    |},
  |},
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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SaveLiveStreamInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "saveLiveStream",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "SaveLiveStreamInput!"
      }
    ],
    "concreteType": "SaveLiveStreamPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "liveStream",
        "storageKey": null,
        "args": null,
        "concreteType": "LiveStream",
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
  "name": "saveLiveStreamMutation",
  "id": null,
  "text": "mutation saveLiveStreamMutation(\n  $input: SaveLiveStreamInput!\n) {\n  saveLiveStream(input: $input) {\n    liveStream {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "saveLiveStreamMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "saveLiveStreamMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '774677ca15a0af19c0f55607c8a9a571';
module.exports = node;
