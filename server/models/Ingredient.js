const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const ingredientSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    items: [{
        type: Schema.Types.ObjectId,
        ref: "item"
    }]
});

const Ingredient = Mongoose.model("ingredient", ingredientSchema);

module.exports = Ingredient;
