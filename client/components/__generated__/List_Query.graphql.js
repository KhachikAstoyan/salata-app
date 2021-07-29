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

fragment IngredientList_items on ItemType {
  ingredients {
    id
    name
  }
}

fragment ItemList_order on OrderType {
  items {
    id
    ...Item_item
  }
}

fragment Item_item on ItemType {
  id
  name
  quantity
  ...IngredientList_items
}

fragment OrderComponent_order on OrderType {
  ...ItemList_order
  id
  client {
    name
    id
  }
  orderNumber
  items {
    id
  }
  dueTime
  status
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
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
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "quantity",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "IngredientType",
                "kind": "LinkedField",
                "name": "ingredients",
                "plural": true,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ClientType",
            "kind": "LinkedField",
            "name": "client",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v0/*: any*/)
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "24c08a2468947004dbb68a1cf989b60b",
    "id": null,
    "metadata": {},
    "name": "List_Query",
    "operationKind": "query",
    "text": "query List_Query {\n  orders {\n    id\n    ...OrderComponent_order\n  }\n}\n\nfragment IngredientList_items on ItemType {\n  ingredients {\n    id\n    name\n  }\n}\n\nfragment ItemList_order on OrderType {\n  items {\n    id\n    ...Item_item\n  }\n}\n\nfragment Item_item on ItemType {\n  id\n  name\n  quantity\n  ...IngredientList_items\n}\n\nfragment OrderComponent_order on OrderType {\n  ...ItemList_order\n  id\n  client {\n    name\n    id\n  }\n  orderNumber\n  items {\n    id\n  }\n  dueTime\n  status\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '079c533fac1fb192cb92aa1bcb9c5ae5';

module.exports = node;
