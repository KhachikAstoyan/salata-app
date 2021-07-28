/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ListQueryVariables = {||};
export type ListQueryResponse = {|
  +orders: ?$ReadOnlyArray<?{|
    +id: ?string,
    +dueTime: ?number,
  |}>
|};
export type ListQuery = {|
  variables: ListQueryVariables,
  response: ListQueryResponse,
|};
*/


/*
query ListQuery {
  orders {
    id
    dueTime
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "OrderType",
    "kind": "LinkedField",
    "name": "orders",
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
        "name": "dueTime",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ListQuery",
    "selections": (v0/*: any*/),
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "dc813f3c0933f94108e2b33d84db0d7c",
    "id": null,
    "metadata": {},
    "name": "ListQuery",
    "operationKind": "query",
    "text": "query ListQuery {\n  orders {\n    id\n    dueTime\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0deb1b7bad4722b3f184aa19dbc529ef';

module.exports = node;
