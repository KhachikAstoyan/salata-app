const Mongoose = require("mongoose");
const Client = require('./Client');

const Schema = Mongoose.Schema;

const OrderSchema = new Schema({
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
    status: { type: String, default: 'not started' },
});

// OrderSchema.statics.createOrder = function (clientID, clientName, clientNumber, dueDate, isTakeout) {
//   const client = Client.findByIdAndUpdate(clientID, { name: clientName, phoneNumber: clientNumber });
//   const order = new Order()
// }

const Order = Mongoose.model("order", OrderSchema);

module.exports = Order;
