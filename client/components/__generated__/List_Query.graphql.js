/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ItemList_order$ref = any;
export type List_QueryVariables = {||};
export type List_QueryResponse = {|
  +orders: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: ItemList_order$ref,
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
    ...ItemList_order
  }
}

fragment ItemList_order on OrderType {
  items {
    id
    name
  }
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
            "name": "ItemList_order"
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
    "cacheID": "c71d13ec4927f6d39780b37418569a4a",
    "id": null,
    "metadata": {},
    "name": "List_Query",
    "operationKind": "query",
    "text": "query List_Query {\n  orders {\n    id\n    ...ItemList_order\n  }\n}\n\nfragment ItemList_order on OrderType {\n  items {\n    id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c13b5fe4494cad271aec166c267b36fe';

module.exports = node;
