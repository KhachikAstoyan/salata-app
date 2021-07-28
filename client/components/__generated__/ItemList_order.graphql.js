/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Item_item$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItemList_order$ref: FragmentReference;
declare export opaque type ItemList_order$fragmentType: ItemList_order$ref;
export type ItemList_order = {|
  +items: ?$ReadOnlyArray<?{|
    +$fragmentRefs: Item_item$ref
  |}>,
  +$refType: ItemList_order$ref,
|};
export type ItemList_order$data = ItemList_order;
export type ItemList_order$key = {
  +$data?: ItemList_order$data,
  +$fragmentRefs: ItemList_order$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemList_order",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ItemType",
      "kind": "LinkedField",
      "name": "items",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Item_item"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "OrderType",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '17c8dcf608b57004629f4d0738520b0a';

module.exports = node;
