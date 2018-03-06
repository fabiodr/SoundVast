/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type commentBoxContainer_audio$ref = any;
type commentContainer_comment$ref = any;
type replyBoxContainer_audio$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type commentsContainer_audio$ref: FragmentReference;
export type commentsContainer_audio = {|
  +id: ?string,
  +comments: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +commentId: number,
        +$fragmentRefs: commentContainer_comment$ref,
      |},
    |}>,
    +pageInfo: {|
      +hasNextPage: boolean,
    |},
  |},
  +$fragmentRefs: (commentBoxContainer_audio$ref & replyBoxContainer_audio$ref),
  +$refType: commentsContainer_audio$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "commentsContainer_audio",
  "type": "Audio",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "comments"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "count",
      "type": "Int"
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
      "kind": "FragmentSpread",
      "name": "commentBoxContainer_audio",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "replyBoxContainer_audio",
      "args": null
    },
    {
      "kind": "LinkedField",
      "alias": "comments",
      "name": "__commentsContainer_comments_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "CommentPayloadConnection",
      "plural": false,
      "selections": [
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
                  "name": "commentContainer_comment",
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
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
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
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
(node/*: any*/).hash = '47cdfb3a71c21ca81bacfef3f9b80b0a';
module.exports = node;
