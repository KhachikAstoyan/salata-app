const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const IngredientCategorySchema = new Schema({
    category: {
        type: String,
        required: true
    }
},  { timestamps: true })

const IngredientCategory = Mongoose.model("IngredientCategory", IngredientCategorySchema);

module.exports = IngredientCategory;
