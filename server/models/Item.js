const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const itemSchema = new Schema({
  ingredients: {
    type: [String],
    required: true,
  },
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

const Item = Mongoose.model("Item", itemSchema);

module.exports = Item;
