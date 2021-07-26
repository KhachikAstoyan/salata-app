const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const orderSchema = new Schema({
  client: {
    type: String,
    required: true,
  },
  dueTime: {
    type: Date,
  },
  isTakeOut: { type: Boolean, required: true },
  items: {
    type: [String],
    required: true,
  },
  orderNumber: { type: Number },
  startTime: { type: Date },
  status: { type: String },
});

const Order = Mongoose.model("Order", orderSchema);

module.exports = Order;
