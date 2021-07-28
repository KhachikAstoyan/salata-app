/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ItemList_order$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type OrderComponent_order$ref: FragmentReference;
declare export opaque type OrderComponent_order$fragmentType: OrderComponent_order$ref;
export type OrderComponent_order = {|
  +$fragmentRefs: ItemList_order$ref,
  +$refType: OrderComponent_order$ref,
|};
export type OrderComponent_order$data = OrderComponent_order;
export type OrderComponent_order$key = {
  +$data?: OrderComponent_order$data,
  +$fragmentRefs: OrderComponent_order$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OrderComponent_order",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ItemList_order"
    }
  ],
  "type": "OrderType",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'e5978ac9a4836997b3131a64444880f3';

module.exports = node;
