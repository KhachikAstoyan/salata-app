const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const IngredientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "IngredientCategory",
    },
  },
  { timestamps: true }
);

const IngredientModel = Mongoose.model("Ingredient", IngredientSchema);

module.exports = IngredientModel;
