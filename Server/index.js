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
    useNewUrlParser: true,
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

<<<<<<< HEAD
=======

>>>>>>> 84fdaf259d9b98cdc5e4f2e54fdaf4cf49c5e982
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

app.get('/products/:brand', (req, res) => {
    Product.find({brand: req.params.brand}, function (err, products) {       
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

app.get('/products/:image', (req,res) => {
    try{
        res.sendFile(`/assets/img/${req.params.image}`)
    } catch (err) {
        console.log(err)
    }
})

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
