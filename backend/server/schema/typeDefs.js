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
    ingredients: [IngredientType]
  }

  type OrderType {
    id: String
    client: ClientType
    dueTime: Float
    isTakeout: Boolean
    items: [OrderedItemType]
    orderNumber: Int
    startTime: String
    status: StatusType
  }

  type ClientType {
    id: ID
    name: String
    phoneNumber: String
  }

  type OrderedItemType {
    item: ItemType
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

  type ItemType {
    id: ID
    ingredients: [String]
    recipeInfo: [String]
    name: String
    audio: AudioType
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
    item: ID
    quantity: Int
    extraInfo: String
  }

  input inputOrder {
    clientId: String
    startTime: String
    dueTime: String
    isTakeout: Boolean
    items: [inputItem]
    status: StatusType
  }
`;
