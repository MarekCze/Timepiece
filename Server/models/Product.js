const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    brand: String,
    model: String,
    productId: Number,
    SelectedVariant: Number,
    description: String,
    price: Number,
    variant:
    [
        {
            variantId: Number,
            color: String,
            variantImage: String,
            variantQuantity: Number
        }

    ]
});

productSchema.methods = {
    getPrice: function(){
        return '&euro' + this.price.toFixed(2);
    },
    getAll: function(){
        return products.find();
    }
}

const Product = mongoose.model('Product', productSchema);
module.exports = Product;