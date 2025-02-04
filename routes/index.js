const express = require('express');
const router = express.Router();
const Movie = require('./../models/Movie.model.js')


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {

    Movie
        .find()
        .select({ title: 1, image:1 })
        .then(movies => {
            res.render('movies', { movies })
        })
        .catch(err => console.log(err))
})

router.get('/details/:movie_id', (req, res) => {


    const { movie_id } = req.params

    Movie.findById(movie_id)
        //.select({ title: 1, image: 1, description:1, director:1 })
        .then(movies => {

           res.render('details', movies)
        })
        .catch(err => console.log(err))
})


module.exports = router;
