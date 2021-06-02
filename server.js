const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

const PORT = process.env.PORT || 3000;
app.listen(PORT);

db.on('error', function (err){
    console.log(err);
});

db.once('open', function (){
    console.log('DB 연결');
})