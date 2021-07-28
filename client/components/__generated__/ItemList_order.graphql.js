/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItemList_order$ref: FragmentReference;
declare export opaque type ItemList_order$fragmentType: ItemList_order$ref;
export type ItemList_order = {|
  +items: ?$ReadOnlyArray<?{|
    +id: ?string,
    +name: ?string,
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "OrderType",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '88e24ad9100bd87d02e595645bfd8a9c';

module.exports = node;
