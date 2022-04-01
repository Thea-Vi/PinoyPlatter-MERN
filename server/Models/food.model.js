const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({

    name: {type: String,require },
    platters: [],
    prices: [],
    category: {type: String,require },
    image: {type: String,require },
    description: {type: String, require},
}, {
    timestamps : true,
})

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;