const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const ClientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "order"
    }
  ]
}, { timestamps: true });

const Client = Mongoose.model("client", ClientSchema);

module.exports = Client;
