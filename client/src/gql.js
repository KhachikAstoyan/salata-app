import { gql } from "@apollo/client";

const ORDERS_QUERY = gql`
  query getOrders($offset: Int, $limit: Int) {
    orders(offset: $offset, limit: $limit) {
      id
      dueTime
      isTakeout
      items {
        ingredients {
          id
          name
          category {
            category
          }
        }
        quantity
        extraInfo
      }
      orderNumber
      startTime
      status
    }
  }
`;

const ORDER_ADDED_SUBSCRIPTION = gql`
  subscription orderAddedSub {
    orderAdded
  }
`;

const STATUS_SUBSCRIPTION = gql`
  subscription statusSub {
    statusChanged {
      status
      id
    }
  }
`;

const ADD_ORDER_MUTATION = gql`
  mutation addOrder($addOrderInput: inputOrder) {
    addOrder(input: $addOrderInput) {
      id
      dueTime
      startTime
      isTakeout
      items {
        ingredients {
          id
          name
          category {
            category
          }
        }
        quantity
        extraInfo
      }
      orderNumber
      status
    }
  }
`;

const ORDER_STATUS_MUTATION = gql`
  mutation UpdateOrderStatus(
    $updateOrderStatusId: String
    $updateOrderStatusStatus: StatusType
  ) {
    updateOrderStatus(
      id: $updateOrderStatusId
      status: $updateOrderStatusStatus
    ) {
      id
      dueTime
      startTime
      isTakeout
      items {
        ingredients {
          id
          name
          category {
            id
            category
          }
        }
        quantity
        extraInfo
      }
      orderNumber
      status
    }
  }
`;

export {
  ORDERS_QUERY,
  ORDER_ADDED_SUBSCRIPTION,
  STATUS_SUBSCRIPTION,
  ADD_ORDER_MUTATION,
  ORDER_STATUS_MUTATION,
};
