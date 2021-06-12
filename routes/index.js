const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Home page
router.get('/user/home-page', ensureAuthenticated, (req, res) => {
  
    console.log(req.user);

    res.render('homePage', {
      user: req.user
    })
  }
);


// movie_detail
router.get('/movie-detail', ensureAuthenticated ,(req, res) => {
  res.render('movieDetail')
})


module.exports = router;
