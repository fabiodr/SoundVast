/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type replyContainer_reply$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type repliesContainer_comment$ref: FragmentReference;
export type repliesContainer_comment = {|
  +id: string,
  +replies: ?{|
    +totalCount: ?number,
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string,
      +node: ?{|
        +commentId: number,
        +$fragmentRefs: replyContainer_reply$ref,
      |},
    |}>,
    +pageInfo: {|
      +endCursor: ?string,
      +hasNextPage: boolean,
    |},
  |},
  +$refType: repliesContainer_comment$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "repliesContainer_comment",
  "type": "Comment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "replies"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int",
      "defaultValue": 0
    },
    {
      "kind": "RootArgument",
      "name": "cursor",
      "type": "String"
    }
  ],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": "replies",
      "name": "__repliesContainer_replies_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "CommentPayloadConnection",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "totalCount",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "CommentPayloadEdge",
          "plural": true,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Comment",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "commentId",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "replyContainer_reply",
                  "args": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
(node/*: any*/).hash = 'fdc786d8b022830fe9c3755960b5e2d2';
module.exports = node;
