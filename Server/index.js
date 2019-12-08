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
    Watch.find({}, 'brand model', function (error, watches) {
        if (error) { console.error(error); }
        res.send({
          watches: watches
        });
    }).sort({_id:-1})
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