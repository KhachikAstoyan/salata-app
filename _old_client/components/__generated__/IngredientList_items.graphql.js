/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type IngredientList_items$ref: FragmentReference;
declare export opaque type IngredientList_items$fragmentType: IngredientList_items$ref;
export type IngredientList_items = {|
  +ingredients: ?$ReadOnlyArray<?{|
    +id: ?string,
    +name: ?string,
  |}>,
  +$refType: IngredientList_items$ref,
|};
export type IngredientList_items$data = IngredientList_items;
export type IngredientList_items$key = {
  +$data?: IngredientList_items$data,
  +$fragmentRefs: IngredientList_items$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IngredientList_items",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "IngredientType",
      "kind": "LinkedField",
      "name": "ingredients",
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
  "type": "ItemType",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '818b1f15e41362ef14e60b716bac0f92';

module.exports = node;
