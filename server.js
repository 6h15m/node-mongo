const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// require('dotenv/config');

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', function (err){
    console.log(err);
});

db.once('open', function (){
    console.log('DB 연결');
})