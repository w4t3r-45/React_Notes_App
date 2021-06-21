const express = require('express');
const router = express.Router();
const Notes = require('../models/notes');
const Categories = require('../models/categories');

//fetching all available notes  

router.get('/notes', (req, res) => {
  Notes.find({}).then(data => {
    res.status(200).json(data);
  }).catch(err => {
    res.status(500).json({
      "error": err
    })
  });
});

// fetching notes by category name

router.get('/notes/:catname',(req,res)=>{
  
});

// fetching notes bt id 

router.get('/notes/:id',(req,res)=>{
  
});

// adding new note (POST)

router.post('/notes/new', (req, res) => {
  let NewNote = {
    "title": req.body.title,
    "category": req.body.category,
    "content": req.body.content
  };
  const { title, category, content } = NewNote;
  // check if they are not Empty 
  // we create that employee and send it back
  // to add it to redux easily with a success 
  // message
  if (title !== '' && category !== '' && content !== '') {
    Notes.create(NewNote).then(data => {
      res.status(200).json({
        "data": data,
        "status": "success"
      })
    }).catch(err => {
      res.status(500).json({
        "error": err
      })
    })
  } else {
    res.status(500).json({
      "error": "please fill all fields"
    })
  }
});

// updating an existing note
router.put('/notes/:id', (req, res) => {
  let searchQuerry = { _id: req.params.id };
  if (id !== '') {
    Notes.updateOne(searchQuerry, {
      $set: {
        "title": req.body.title,
        "category": req.body.category,
        "content": req.body.content
      }}).then(data =>{
        res.status(200).json({
          "data":data,
          "status":"UPDATED SUCCESSFULLY"
        })
      }).catch(err =>{
        res.status(500).json({
          "error":err
        })
      })
  } else {
    res.status(500).json({
      "error": "please set ID"
    });
  }
});

// deleting an existing item 

router.delete('/notes/delete/:id',(req,res)=>{
  let searchQuery = {_id : req.params.id};
  if(req.params.id !== ''){
  Notes.deleteOne(searchQuery).then(data=>{
    res.status(200).json({
      "status":"DELETED SUCCESSFULLY"
    }).catch(err =>{
      res.status(500).json({
        "error":err
      })
    })
  })}else{
    res.status(500).json({
      "error":"please set ID"
    })
  }
});

// fetching all categories
router.get('/categories', (req, res) => {
  Categories.find({}).then(data => {
    res.status(200).json(data);
  }).catch(err => {
    res.status(500).json({
      "error": err
    })
  });
});

// adding new category

router.post('/category/new', (req, res) => {
  let NewCat = {
    "name": req.body.name,
    };
  const { name } = NewCat;
  // check if they are not Empty 
  // we create that employee and send it back
  // to add it to redux easily with a success 
  // message
  if (name !== '') {
    Categories.create(NewCat).then(data => {
      res.status(200).json({
        "data": data,
        "status": "success"
      })
    }).catch(err => {
      res.status(500).json({
        "error": err
      })
    })
  } else {
    res.status(500).json({
      "error": "please fill the field"
    })
  }
});

module.exports = router;