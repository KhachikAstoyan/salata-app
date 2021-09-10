const Client = require("../models/Client");

module.exports = {
  Query: {
    async client(_, { clientId }) {
      return await Client.findById(clientId);
    },
    async clients() {
      return await Client.find();
    },
  },
  Mutation: {
    async addClient(_, { name, phoneNumber }) {
      return await Client.create({ name, phoneNumber });
    },
  },
};
