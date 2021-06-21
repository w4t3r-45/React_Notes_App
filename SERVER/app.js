const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const router = require('./router/router');


dotenv.config({path: './config.env'});

// connect to db 
mongoose.connect(process.env.DB_LINK,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true
}).then(()=>{
  console.log("CONNECTED TO DB")
});

// setting body parser
app.use(bodyparser.urlencoded({extended:true})); 
app.use(bodyparser.json());

// using router
app.use(router);


app.listen(3003 , ()=>{
  console.log("server started at port 3003")
});
