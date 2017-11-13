/**
 * @flow
 * @relayHash 6aeea5a2b005fac8adc3221739b20a92
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type sendEmailMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    email: string;
    message: string;
    subject: string;
  };
|};
export type sendEmailMutationResponse = {|
  +sendEmail: ?{|
    +clientMutationId: ?string;
  |};
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

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "SendEmailInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "sendEmailMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "SendEmailInput!"
          }
        ],
        "concreteType": "SendEmailPayload",
        "name": "sendEmail",
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
  "name": "sendEmailMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "SendEmailInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "sendEmailMutation",
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
            "type": "SendEmailInput!"
          }
        ],
        "concreteType": "SendEmailPayload",
        "name": "sendEmail",
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
  "text": "mutation sendEmailMutation(\n  $input: SendEmailInput!\n) {\n  sendEmail(input: $input) {\n    clientMutationId\n  }\n}\n"
};

module.exports = batch;
