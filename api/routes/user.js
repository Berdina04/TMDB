const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Movie = require('../models/movie')
const jwt = require('jsonwebtoken')
const checkJWT = require('../middlewares/jwt')

router.get('/me', (req, res) => {
    if (!req.user) res.sendStatus(401)
    res.send(req.user)
})

router.get('/addFavorites/:id', (req, res) => {
    
    Movie.findAll({ where: { userId: req.params.id } })
        .then(movies => {
            res.status(200).send(movies)
        }) 
})

router.post('/register', (req, res , next) => {
   
    User.create(req.body)
        .then(res.sendStatus(201))
        .catch(err => console.log(err))
})

router.post('/login', (req, res) => {
    // check if the user is valid
    console.dir(req.body)
    const {email , password} = req.body

    //evaluate email

    User.findOne({
        where: { 
            email,
        }
    })
    .then(user => {
        if(!user) {
            return res.status(400).send("user is not found")
        }

        if(!user.validPassword(password)){
            console.log(password)
            return res.status(401).send("invalid credentials")
        }

        //generate the token+
        const token = jwt.sign({id: user.id , foo: "bar" , email: user.email}, 'plataforma5') //payload

        return res.status(200).json({token})

    })

})


router.get('/private' , checkJWT , (req,res) => {
    res.status(200).send('info privada')
})


router.post('/addFavorite', (req, res) => {
    Movie.create(req.body)
        .then(res.sendStatus(201))

})

router.delete('/deleteFavorite/:userId/:movieId' , (req, res) => {
    console.log(req.params)
    Movie.destroy({
        where: {
            movieId : req.params.movieId,
            userId : req.params.userId
        }
    })
    .then(res.sendStatus(202))
})


module.exports = router