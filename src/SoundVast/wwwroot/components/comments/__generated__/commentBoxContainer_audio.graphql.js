/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type commentBoxContainer_audio = {|
  +id: ?string;
  +audioId: number;
  +name: string;
  +comments: ?{|
    +items: ?$ReadOnlyArray<?{|
      +commentId: number;
    |}>;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
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
    },
    {
      "kind": "RootArgument",
      "name": "originalCommentId",
      "type": "Int"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "commentBoxContainer_audio",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "id",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "audioId",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "name",
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "after",
          "variableName": "cursor",
          "type": "String"
        },
        {
          "kind": "Variable",
          "name": "first",
          "variableName": "count",
          "type": "Int"
        },
        {
          "kind": "Variable",
          "name": "originalCommentId",
          "variableName": "originalCommentId",
          "type": "Int"
        }
      ],
      "concreteType": "CommentPayloadConnection",
      "name": "comments",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "Comment",
          "name": "items",
          "plural": true,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "commentId",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Audio"
};

module.exports = fragment;
