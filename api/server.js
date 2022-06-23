// Configuración del server
const express = require('express')
const morgan = require('morgan')

const app = express()
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')
const routes = require('./routes/index')
const db = require('./config/db')

app.use(express.json())
app.use(morgan('tiny'))


app.use(cookieParser())
app.use(session({secret : 'bootcamp'}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/api' , routes)


const PORT = process.env.PORT || 3001

db.sync({force: false }).then(() => {
    app.listen(PORT , () => console.log(`Listening on ${PORT}`))
})
