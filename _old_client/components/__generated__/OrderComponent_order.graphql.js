/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ItemList_order$ref = any;
export type StatusType = "COMPLETED" | "IN_PROGRESS" | "NOT_STARTED" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type OrderComponent_order$ref: FragmentReference;
declare export opaque type OrderComponent_order$fragmentType: OrderComponent_order$ref;
export type OrderComponent_order = {|
  +id: ?string,
  +client: ?{|
    +name: ?string
  |},
  +orderNumber: ?number,
  +items: ?$ReadOnlyArray<?{|
    +id: ?string
  |}>,
  +dueTime: ?number,
  +status: ?StatusType,
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


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OrderComponent_order",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "ClientType",
      "kind": "LinkedField",
      "name": "client",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "orderNumber",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ItemType",
      "kind": "LinkedField",
      "name": "items",
      "plural": true,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "dueTime",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ItemList_order"
    }
  ],
  "type": "OrderType",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '9a2bea23fddb32392c008a71af851fb6';

module.exports = node;
