const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const clientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

const Client = Mongoose.model("Client", clientSchema);

module.exports = Client;
