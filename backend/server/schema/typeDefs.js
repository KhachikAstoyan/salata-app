const gql = require("graphql-tag");

module.exports = gql`
  schema {
    query: RootQueryType
    mutation: Mutation
    subscription: Subscription
  }

  type RootQueryType {
    orders(offset: Int, limit: Int): [OrderType]
    clientOrders(id: String!): [OrderType]
    client(clientId: ID!): ClientType
    clients: [ClientType]
    orderCount: OrderCount
    ingredients: [IngredientType]
  }

  type Subscription {
    ordersChanged: [OrderType]
  }

  type OrderCount {
    count: Int
  }

  type OrderType {
    id: ID
    # client: ClientType
    dueTime: Float
    startTime: String
    isTakeout: Boolean
    items: [ItemType]
    orderNumber: String
    status: StatusType
  }

  type ClientType {
    id: ID
    name: String
    phoneNumber: String
  }

  type ItemType {
    ingredients: [IngredientType]
    quantity: Int
    extraInfo: String
  }

  type IngredientType {
    id: ID
    name: String
    category: CategoryType
  }

  type CategoryType {
    id: ID
    category: String
  }

  type AudioType {
    data: String
  }

  enum StatusType {
    NOT_STARTED
    IN_PROGRESS
    COMPLETED
    FINISHED
  }

  type Mutation {
    addOrder(input: inputOrder): OrderType
    addItems(orderId: String, input: [inputItem]): OrderType
    updateOrderStatus(id: String, status: StatusType): OrderType
    addClient(name: String, phoneNumber: String): ClientType
  }

  input inputItem {
    ingredients: [ID]
    quantity: Int
    extraInfo: String
  }

  input inputOrder {
    # clientId: ID
    isTakeout: Boolean
    items: [inputItem]
  }
`;
