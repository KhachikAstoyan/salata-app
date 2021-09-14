const Ingredient = require("../models/Ingredient");

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
};
