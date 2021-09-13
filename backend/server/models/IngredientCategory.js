const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const IngredientCategorySchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const IngredientCategoryModel = Mongoose.model(
  "IngredientCategory",
  IngredientCategorySchema
);

module.exports = IngredientCategoryModel;
