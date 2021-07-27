const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const orderSchema = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    ref: "client"
  },
  dueTime: {
    type: Date,
  },
  isTakeOut: { type: Boolean, required: true },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "item"
    }
  ],
  orderNumber: { type: Number },
  startTime: { type: Date },
  status: { type: String },
});

const Order = Mongoose.model("order", orderSchema);

module.exports = Order;
