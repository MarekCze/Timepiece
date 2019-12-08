const mongoose = require('mongoose');
const connectionString = "mongodb+srv://dbUser:Marek1995@cluster0-vlljg.mongodb.net/test?retryWrites=true&w=majority";
const credentials = require('./credentials');

const options = {
    server: {
       socketOptions: { keepAlive: 1 } 
    }
};

const db = mongoose.connect(credentials.mongo.connectionString, options);



module.exports = db;