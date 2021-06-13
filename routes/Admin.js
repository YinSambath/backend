const express = require('express');
const Movie = require('../models/movie');
const User = require('../models/User');
const router = express.Router();


router.get('/admin', (req,res) => {

    
    Movie.find({}).then(movies => {
        res.render('adminPage', {
        movies: movies
        });
        });
    });
router.get('/admin/users', (req,res) => {

    User.find({}).then(users => {
        res.render('userPage', {
            users: users
        });
    });
});

module.exports = router;