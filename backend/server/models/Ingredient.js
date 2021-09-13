const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const IngredientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'IngredientCategory'},
},  { timestamps: true })

const IngredientSchema = Mongoose.model("IngredientSchema", IngredientSchema);

module.exports = IngredientSchema;
