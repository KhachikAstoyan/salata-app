const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const ingredientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Ingredient = Mongoose.model("Ingredient", ingredientSchema);

module.exports = Ingredient;
