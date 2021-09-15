const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const IngredientCategorySchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    ingredients: [{type: Mongoose.Schema.Types.ObjectId, ref: "Ingredient"}]
  },
  { timestamps: true }
);

IngredientCategorySchema.statics.findIngredients = function(itemId) {
  const ingredients = this.findById(itemId).populate("Ingredients");

  return ingredients.then(item => {
    return item.ingredients;
  })
}

const IngredientCategoryModel = Mongoose.model(
  "IngredientCategory",
  IngredientCategorySchema
);

module.exports = IngredientCategoryModel;
