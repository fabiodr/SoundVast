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
        +id: string,
        +audioId: number,
        +name: string,
        +coverImages: ?$ReadOnlyArray<?{|
          +dimention: string,
          +imageUrl: string,
        |}>,
        +streamDatas: ?$ReadOnlyArray<?{|
          +liveStreamUrl: string,
          +contentType: string,
        |}>,
        +$fragmentRefs: (radioContainer_liveStream$ref & sideBarContainer_audios$ref),
      |},
    |}>,
    +pageInfo: {|
      +hasNextPage: boolean,
    |},
  |},
  +$refType: radiosContainer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
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
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "id",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "audioId",
                  "args": null,
                  "storageKey": null
                },
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
                  "name": "coverImages",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Image",
                  "plural": true,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "dimention",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "imageUrl",
                      "args": null,
                      "storageKey": null
                    }
                  ]
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
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "contentType",
                      "args": null,
                      "storageKey": null
                    }
                  ]
                },
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
(node/*: any*/).hash = '76c0b8e7d91d65c9c1d543a0f079e9a8';
module.exports = node;
