const Mongoose = require("mongoose");
const Client = require("./Client");

const Schema = Mongoose.Schema;

const OrderSchema = new Schema({
    client: {
        type: Schema.Types.ObjectId,
        ref: "client",
    },
    dueTime: {
        type: Date,
    },
    isTakeout: { type: Boolean, required: true },
    items: [
        {
            type: Schema.Types.ObjectId,
            ref: "item",
        },
    ],
    orderNumber: { type: Number },
    startTime: { type: String },
    status: { type: Number }
});

OrderSchema.statics.findItems = function (id) {
    console.log(id);
    const items = this.findById(id)
        .populate("items");
    return items.then(order => {
        console.log('order', order);
        return order.items;
    });
}

const Order = Mongoose.model("order", OrderSchema);

module.exports = Order;
