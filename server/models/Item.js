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

itemSchema.statics.addIngredients = function (id, name, items){
  const Ingredient = require("../models/Ingredient");
  
  return this.findById(id).then((item) => {
    const ingredient = new Ingredient({name, id, items});
      item.ingredients.push(ingredient);
      return Promise.all([ingredient.save(), item.save()]).then(
        ([ingredient, item]) => item
      );
  })
 } 

const Item = Mongoose.model("item", itemSchema);

module.exports = Item;
