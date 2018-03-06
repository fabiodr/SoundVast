/**
 * @flow
 * @relayHash b62923633b548c4cef7af643b2046f9f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type sendEmailMutationVariables = {|
  input: {
    clientMutationId?: ?string,
    email: string,
    message: string,
    subject: string,
  },
|};
export type sendEmailMutationResponse = {|
  +sendEmail: ?{|
    +clientMutationId: ?string,
  |},
|};
*/


/*
mutation sendEmailMutation(
  $input: SendEmailInput!
) {
  sendEmail(input: $input) {
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SendEmailInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "sendEmail",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "SendEmailInput!"
      }
    ],
    "concreteType": "SendEmailPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "sendEmailMutation",
  "id": null,
  "text": "mutation sendEmailMutation(\n  $input: SendEmailInput!\n) {\n  sendEmail(input: $input) {\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "sendEmailMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "sendEmailMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '2583db11f4bdd7ec1cc1897e34300e1c';
module.exports = node;
