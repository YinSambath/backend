const express = require('express');
const Movie = require('../models/movie');
const router = express.Router();


router.get('/admin', (req,res) => {

    console.log(req.movie)
    
    res.render('adminPage', {
     movie: req.movie
     })
    });

module.exports = router;