var express = require('express');
var router = express.Router();
var MovieCollection = require('../models/MovieSchema');

// Default home page
router.get('/', function(req, res) {
  res.render('index', { title: 'ClassWork' });
});

//list movies
router.get('/movies',(req,res) => {
  MovieCollection.find({},(error,results) => {
    if(error) res.send(error);
    else res.send(results)
  });
});

//add movie
router.post('/movies',(req,res) => {
  MovieCollection.create(req.body,(error,results)=>{
    if(error) res.send(error);
    else res.send(results)
  })
});

//edit movie
router.put('/movies/:id',(req,res) => {
  MovieCollection.findOneAndUpdate({_id:req.params.id},req.body,(error,results)=>{
    if(error) res.send(error);
    else res.send(results)
  })
});

module.exports = router;
