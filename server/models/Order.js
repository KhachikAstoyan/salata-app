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
    const items = this.findById(id)
        .populate("items");
    return items.then(order => {
        return order.items;
    });
}

OrderSchema.statics.addItems = function (id, ingredients, extra, additionalInformation, name, audio, quantity) {
    const Item = require("../models/Item");

    return this.findById(id).then((order) => {
        const item = new Item({ order, ingredients, extra, additionalInformation, name, audio, quantity });
        order.items.push(item);
        return Promise.all([item.save(), order.save()]).then(
            ([item, order]) => order
        );
    })
}

const Order = Mongoose.model("order", OrderSchema);

module.exports = Order;
