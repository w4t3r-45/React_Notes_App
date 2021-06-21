const mongoose = require('mongoose');

let noteSchema = new mongoose.Schema({
  title:String,
  content:String,
  category:String,
  creationTime:{
    type : Date ,
    default: Date.now
  }
});

module.exports = mongoose.model('Note',noteSchema);