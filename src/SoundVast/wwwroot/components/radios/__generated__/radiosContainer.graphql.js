/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type radioContainer_liveStream$ref = any;
type sideBarContainer_audios$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type radiosContainer$ref: FragmentReference;
export type radiosContainer = {|
  +liveStreams: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string,
      +node: ?{|
        +audioId: number,
        +$fragmentRefs: (radioContainer_liveStream$ref & sideBarContainer_audios$ref),
      |},
    |}>,
    +items: ?$ReadOnlyArray<?{|
      +audioId: number,
      +name: string,
      +streamDatas: ?$ReadOnlyArray<?{|
        +liveStreamUrl: string,
      |}>,
      +coverImageUrl: ?string,
    |}>,
    +pageInfo: {|
      +hasNextPage: boolean,
    |},
  |},
  +$refType: radiosContainer$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "audioId",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "radiosContainer",
  "type": "Query",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "liveStreams"
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
    },
    {
      "kind": "RootArgument",
      "name": "genre",
      "type": "String"
    },
    {
      "kind": "RootArgument",
      "name": "searchQuery",
      "type": "String"
    },
    {
      "kind": "RootArgument",
      "name": "filter",
      "type": "FilterInput"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "liveStreams",
      "name": "__radiosContainer_liveStreams_connection",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "filter",
          "variableName": "filter",
          "type": "FilterInput"
        },
        {
          "kind": "Variable",
          "name": "genre",
          "variableName": "genre",
          "type": "String"
        },
        {
          "kind": "Variable",
          "name": "searchQuery",
          "variableName": "searchQuery",
          "type": "String"
        }
      ],
      "concreteType": "LiveStreamPayloadConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "LiveStreamPayloadEdge",
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
              "concreteType": "LiveStream",
              "plural": false,
              "selections": [
                v0,
                {
                  "kind": "FragmentSpread",
                  "name": "radioContainer_liveStream",
                  "args": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "sideBarContainer_audios",
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
          "name": "items",
          "storageKey": null,
          "args": null,
          "concreteType": "LiveStream",
          "plural": true,
          "selections": [
            v0,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "name",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "streamDatas",
              "storageKey": null,
              "args": null,
              "concreteType": "StreamData",
              "plural": true,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "liveStreamUrl",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "coverImageUrl",
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
})();
(node/*: any*/).hash = 'e42027f6b1f0117a8bac4f9da55a9472';
module.exports = node;
