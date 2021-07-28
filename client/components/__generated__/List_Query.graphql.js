/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OrderComponent_order$ref = any;
export type List_QueryVariables = {||};
export type List_QueryResponse = {|
  +orders: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: OrderComponent_order$ref,
  |}>
|};
export type List_Query = {|
  variables: List_QueryVariables,
  response: List_QueryResponse,
|};
*/


/*
query List_Query {
  orders {
    id
    ...OrderComponent_order
  }
}

fragment ItemList_order on OrderType {
  items {
    ...Item_item
    id
  }
}

fragment Item_item on ItemType {
  id
  name
  quantity
}

fragment OrderComponent_order on OrderType {
  ...ItemList_order
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "List_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "OrderType",
        "kind": "LinkedField",
        "name": "orders",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "OrderComponent_order"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "List_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "OrderType",
        "kind": "LinkedField",
        "name": "orders",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ItemType",
            "kind": "LinkedField",
            "name": "items",
            "plural": true,
            "selections": [
              (v0/*: any*/),
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
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b985b1651e8bfb5200899362b86b5d94",
    "id": null,
    "metadata": {},
    "name": "List_Query",
    "operationKind": "query",
    "text": "query List_Query {\n  orders {\n    id\n    ...OrderComponent_order\n  }\n}\n\nfragment ItemList_order on OrderType {\n  items {\n    ...Item_item\n    id\n  }\n}\n\nfragment Item_item on ItemType {\n  id\n  name\n  quantity\n}\n\nfragment OrderComponent_order on OrderType {\n  ...ItemList_order\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '079c533fac1fb192cb92aa1bcb9c5ae5';

module.exports = node;
