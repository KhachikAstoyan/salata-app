const gql = require("graphql-tag");

module.exports = gql`
  schema {
    query: RootQueryType
    mutation: Mutation
  }

  type RootQueryType {
    orders: [OrderType]
    clientOrders(id: String!): [OrderType]
    client(clientId: ID!): ClientType
    clients: [ClientType]
  }

  type OrderType {
    id: String
    client: ClientType
    dueTime: Float
    isTakeout: Boolean
    items: [ItemType]
    orderNumber: Int
    startTime: String
    status: StatusType
  }

  type ClientType {
    id: ID
    name: String
    phoneNumber: String
  }

  type ItemType {
    id: ID
    ingredients: [IngredientType]
    extra: [IngredientType]
    additionalInformation: String
    name: String
    audio: AudioType
    quantity: Int
  }

  type IngredientType {
    id: String
    name: String
  }

  type AudioType {
    data: String
  }

  enum StatusType {
    NOT_STARTED
    IN_PROGRESS
    COMPLETED
  }

  type Mutation {
    addOrder(input: input): OrderType
    addItems(
      orderId: ID
      ingredients: [ID]
      extra: String
      additionalInformation: String
      name: String
      quantity: Int
    ): OrderType
    addIngredients(id: String, name: String, items: [ID]): OrderType
    updateOrderStatus(id: String, status: StatusType): OrderType
    addClient(name: String, phoneNumber: String): ClientType
  }

  input input {
    clientId: String
    dueTime: String
    isTakeout: Boolean
    itemsId: [ID]
    startTime: String
    status: StatusType
  }
`;
