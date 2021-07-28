/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItemList_item$ref: FragmentReference;
declare export opaque type ItemList_item$fragmentType: ItemList_item$ref;
export type ItemList_item = {|
  +items: ?$ReadOnlyArray<?{|
    +id: ?string,
    +name: ?string,
  |}>,
  +$refType: ItemList_item$ref,
|};
export type ItemList_item$data = ItemList_item;
export type ItemList_item$key = {
  +$data?: ItemList_item$data,
  +$fragmentRefs: ItemList_item$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemList_item",
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
(node/*: any*/).hash = '8fae2684a91014826d59f104895d71ba';

module.exports = node;
