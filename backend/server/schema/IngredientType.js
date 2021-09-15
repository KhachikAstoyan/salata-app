const Ingredient = require("../models/Ingredient");
const IngredientCategory = require("../models/IngredientCategory");

module.exports = {
  Query: {
    async ingredients() {
      try {
        const ingredients = await Ingredient.find();
        return ingredients;
      } catch (err) {
        throw new Error(err);
      }
    },
  },

  IngredientType: {
    async category(parent) {
      try {
        const category = await IngredientCategory.findById(parent.category);
        return category;
      } catch (error) {
        throw new Error(err);
      }
    }
  }

};
