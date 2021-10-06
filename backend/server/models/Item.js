const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    recipeInfo: [String],
    ingredients: [{type: Mongoose.Schema.Types.ObjectId, ref: "Ingredient"}],
  },
  { timestamps: true }
);

// itemSchema.statics.findIngredients = function (itemId) {
//   const ingredients = this.findById(itemId).populate("ingredients");

//   return ingredients.then((item) => {
//     return item.ingredients;
//   });
// };

// itemSchema.statics.addIngredients = function (id, name, items) {
//   const Ingredient = require("../models/Ingredient");

//   return this.findById(id).then((item) => {
//     const ingredient = new Ingredient({ name, id, items });
//     item.ingredients.push(ingredient);
//     return Promise.all([ingredient.save(), item.save()]).then(
//       ([ingredient, item]) => item
//     );
//   });
// };

const Item = Mongoose.model("item", itemSchema);

module.exports = Item;
