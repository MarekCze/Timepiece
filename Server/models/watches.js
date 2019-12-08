const db = require('../db');
const mongoose = require('mongoose');
const watchSchema = mongoose.Schema({
    brand: String,
    model: String,
    variant: String,
    price: Number,
    description: String,
    available: Boolean,
    numInStock: Number,
    image: String
});

watchSchema.methods = {
    getPrice: function(){
        return '&euro' + this.price.toFixed(2);
    },
    getAll: function(){
        return watches.find();
    }
}

const Watch = mongoose.model('Watch', watchSchema);
module.exports = Watch;