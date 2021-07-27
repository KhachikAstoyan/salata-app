const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const itemSchema = new Schema({
  order: {
    type: Schema.Types.ObjectId,
    ref: "order"
  },
  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: "ingredient",
      required: true
    }
  ],
  extra: {
    type: [String],
  },
  additionalInformation: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  audio: {
    type: String,
  },
  quantity: {
    type: Number,
    min: 1,
  },
});

const Item = Mongoose.model("item", itemSchema);

module.exports = Item;
