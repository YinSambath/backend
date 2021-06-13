const express = require('express');
const router = express.Router();

const Movie = require('../models/movie')


router.get('/admin/create-movie', (req,res) => {
    res.render('createMovie')
});

router.post('/admin/create-movie', (req,res) => {
    const {title, description, image, genre} = req.body;
    let errors = [];

    if ( !title || !image || !genre || !description ) {
        errors.push({msg: 'Fail post'})
    }
    if (errors.length>0) {
        res.render('createMovie', {
            errors,
            title,
            image,
            genre,
            description
        })

    }
    else {
        const newMovie = new Movie({
          title,
          genre,
          image,
          description
        })
        newMovie
    .save()
    .then(movie => {
      req.flash(
        'success_msg',
        'success'
      );
      res.redirect('/user/home-page');
    })
    .catch(err => console.log(err));
    }
    

})

module.exports = router;