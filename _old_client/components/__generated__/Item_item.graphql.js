/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type IngredientList_items$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Item_item$ref: FragmentReference;
declare export opaque type Item_item$fragmentType: Item_item$ref;
export type Item_item = {|
  +id: ?string,
  +name: ?string,
  +quantity: ?number,
  +audio: ?{|
    +data: ?string
  |},
  +$fragmentRefs: IngredientList_items$ref,
  +$refType: Item_item$ref,
|};
export type Item_item$data = Item_item;
export type Item_item$key = {
  +$data?: Item_item$data,
  +$fragmentRefs: Item_item$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "delay"
    },
    {
      "kind": "RootArgument",
      "name": "language"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "Item_item",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "quantity",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "delay",
          "variableName": "delay"
        },
        {
          "kind": "Variable",
          "name": "language",
          "variableName": "language"
        }
      ],
      "concreteType": "AudioType",
      "kind": "LinkedField",
      "name": "audio",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "data",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "IngredientList_items"
    }
  ],
  "type": "ItemType",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '14ecb153317b1404f7a5eec21eb0387d';

module.exports = node;
