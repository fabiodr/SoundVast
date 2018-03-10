/**
 * @flow
 * @relayHash df447f7d78998cdefc61b77da057f765
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type commentSubscriptionVariables = {| |};
export type commentSubscriptionResponse = {|
  +commentAdded: ?{|
    +id: string,
  |},
|};
*/


/*
subscription commentSubscription {
  commentAdded {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "commentAdded",
    "storageKey": null,
    "args": null,
    "concreteType": "Comment",
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
];
return {
  "kind": "Request",
  "operationKind": "subscription",
  "name": "commentSubscription",
  "id": null,
  "text": "subscription commentSubscription {\n  commentAdded {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "commentSubscription",
    "type": "AppSubscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "commentSubscription",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node/*: any*/).hash = '188d2f39cc403efb268f1d1806d5dfba';
module.exports = node;
