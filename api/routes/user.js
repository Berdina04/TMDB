const express = require('express')
const router = express.Router();
const User = require('../models/user')
const Movie = require('../models/movie');
const passport = require('passport')
const localStrategy = require('passport-local');



router.post('/signUp' , (req, res) => {
    User.create(req.body)
    .then(res.sendStatus(201))
    .catch(err => console.log(err))
})

router.post('/logIn' , passport.authenticate('local'), (req, res) => {
    res.send(req.user);
})

router.post('/addFavorite', (req,res) => {
    Movie.create(req.body)
    .then(res.sendStatus(201))
   
})

router.get('/me' , (req,res)=> {
    if(!req.user) res.sendStatus(401)
    res.send(req.user)
})

router.get('/addFavorite',(req,res)=> {
    console.log('hola llegue a server')
    
    // Movie.getAll({where : {movie : req.body}})
    // .then(res => console.log(res.data))
    
})


passport.use(
    new localStrategy({
        usernameField : 'email',
        passwordField : 'password',
    },
    function (email, password,done){
        User.findOne({where: {email}})
        .then(user => {
            if(!user) {
                return done(null,false)
            }

            user.hash(password, user.salt)
            .then(hash => {
                if(hash !== user.password){
                    return done(null, false)
                }

                return done(null, user)
            })
            .catch(done)
        })
    })
)

passport.serializeUser(function(user, done){
    done(null, user.id)
})

passport.deserializeUser(function(id , done) {
    User.findByPk(id)
    .then(user => done(null, user))
    .catch(done)
    
})

module.exports = router