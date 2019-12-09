const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:8080'
  }));

const credentials = require('./credentials');


const options = {
    server: {
       socketOptions: { keepAlive: 1 } 
    }
};

mongoose.connect(credentials.mongo.connectionString, options);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});


const Watch = require('./models/watches');
const Product = require('./models/Product');

Product.find(function(err, products){
    if(products.length) return;

    new Product({
        brand: 'Vincero',
        model: 'CHRONO S-CLASS',
        productId: 0,
        SelectedVariant: 0,
        description: String,
        price: 229,
        variant: [
            {
                variantId: 1,
                color: 'blue',
                variantImage: 'Chrono-S-Blue_Brown.jpg',
                variantQuantity: 10
            },
            {
                variantId: 2,
                color: 'black',
                variantImage: 'Chrono-S-Matte-Black.jpg',
                variantQuantity: 10
            },
            {
                variantId: 3,
                color: 'gold',
                variantImage: 'Chrono-S-Black_Silver.jpg',
                variantQuantity: 10
            },
            {
                variantId: 4,
                color: 'gold',
                variantImage: 'Chrono-S-Rose-Gold.jpg',
                variantQuantity: 10
            }
        ]
    }).save();

    new Product({
        brand: 'Vincero',
        model: 'KAIROS SERIES',
        productId: 1,
        SelectedVariant: 0,
        description: String,
        price: 189,
        variant: [
            {
                variantId: 1,
                color: 'blue',
                variantImage: 'Kairos-Black_Gold-Mesh.jpg',
                variantQuantity: 10
            },
            {
                variantId: 2,
                color: 'black',
                variantImage: 'Kairos-Matte-Black-Mesh.jpg',
                variantQuantity: 10
            },
            {
                variantId: 3,
                color: 'black',
                variantImage: 'Kairos-Blue_Brown.jpg',
                variantQuantity: 10
            },
            {
                variantId: 4,
                color: 'black',
                variantImage: 'Kairos-White_Silver.jpg',
                variantQuantity: 10
            }
        ]
    }).save();

    new Product({
        brand: 'Vincero',
        model: 'BELLWETHER',
        productId: 2,
        SelectedVariant: 0,
        description: String,
        price: 280,
        variant: [
            {
                variantId: 1,
                color: 'green',
                variantImage: 'Bellwether-Rose-Gold_Blue.jpg',
                variantQuantity: 10
            },
            {
                variantId: 2,
                color: 'blue',
                variantImage: 'Bellwether-Rose-Gold_Black.jpg',
                variantQuantity: 10
            },
            {
                variantId: 3,
                color: 'blue',
                variantImage: 'Bellwether-Silver_White.jpg',
                variantQuantity: 10
            },
            {
                variantId: 4,
                color: 'blue',
                variantImage: 'Bellwether-Matte-Black.jpg',
                variantQuantity: 10
            }
        ]
    }).save();

    new Product({
        brand: 'Breguet',
        model: 'CLASSIQUE',
        productId: 3,
        SelectedVariant: 0,
        description: String,
        price: 12000,
        variant: [
            {
                variantId: 1,
                color: 'darkblue',
                variantImage: 'Breguet-Classique-Granite.jpg',
                variantQuantity: 10
            },
            {
                variantId: 2,
                color: 'black',
                variantImage: 'Breguet-Classique-Black.jpg',
                variantQuantity: 10
            },
            {
                variantId: 3,
                color: 'gold',
                variantImage: 'Breguet-Classique-Gold.jpg',
                variantQuantity: 10
            }
        ]
    }).save();

    new Product({
        brand: 'Breguet',
        model: 'MARINE',
        productId: 4,
        SelectedVariant: 0,
        description: String,
        price: 15000,
        variant: [
            {
                variantId: 1,
                color: 'salmon',
                variantImage: 'Breguet-Marine-Black_Copper.jpg',
                variantQuantity: 10
            },
            {
                variantId: 2,
                color: 'black',
                variantImage: 'Breguet-Marine-Black.jpg',
                variantQuantity: 10
            },
            {
                variantId: 3,
                color: 'blue',
                variantImage: 'Breguet-Marine-Blue.jpg',
                variantQuantity: 10
            }
        ]
    }).save();

    new Product({
        brand: 'Breguet',
        model: 'HERITAGE',
        productId: 5,
        SelectedVariant: 0,
        description: String,
        price: 28000,
        variant: [
            {
                variantId: 1,
                color: 'green',
                variantImage: 'Breguet-Heritage-Silver.jpg',
                variantQuantity: 10
            },
            {
                variantId: 2,
                color: 'blue',
                variantImage: 'Breguet-Heritage-Copper.jpg',
                variantQuantity: 10
            }
        ]
    }).save();
})

Watch.find(function(err, watches){
    if(watches.length) return;

    new Watch({
        brand: 'Vincero',
        model: 'Chrono',
        variant: 'Black',
        price: 230,
        description: 'description',
        available: true,
        numInStock: 80,
        image: 'vinceroChronoBlack.jpg'
    }).save();

    new Watch({
        brand: 'Vincero',
        model: 'Chrono',
        variant: 'Gold',
        price: 210,
        description: 'description',
        available: true,
        numInStock: 30,
        image: 'vinceroChronoGold.jpg'
    }).save();

    new Watch({
        brand: 'Vincero',
        model: 'Kairos',
        variant: 'Black',
        price: 189,
        description: 'description',
        available: true,
        numInStock: 200,
        image: 'vinceroKairosBlack.jpg'
    }).save();
});

app.get('/', function(req, res) {
	res.json('home');
});

app.get('/watches', (req, res) => {
    Watch.find({}, function (err, watches) {
        
        try{
            res.json({
                watches: watches
            });         
        } catch (err){
            console.log(error)
            return res.json('500')
        }
        })
        
});

app.get('/products', (req, res) => {
    Product.find({}, function (err, products) {
        
        try{
            res.json({
                product: products
            });         
        } catch (err){
            console.log(error)
            return res.json('500')
        }
        })
        
});

// 404 catch-all handler (middleware)
app.use(function(req, res, next){
	res.status(404);
	res.json('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.json('500');
});

var server;

function startServer() {
    server = http.createServer(app).listen(app.get('port'), function(){
      console.log( 'Express started in ' + app.get('env') +
        ' mode on http://localhost:' + app.get('port') +
        '; press Ctrl-C to terminate.' );
    });
}

startServer();
