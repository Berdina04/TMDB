// Configuración del server
const express = require('express')
const morgan = require('morgan')

const app = express()
const cookieParser = require('cookie-parser')
const session = require('express-session')
const routes = require('./routes/index')
const db = require('./config/db')
const path = require('path')

app.use(express.json())
app.use(morgan('tiny'))


app.use(cookieParser())
app.use(session({secret : 'bootcamp'}))
// app.use(passport.initialize())
// app.use(passport.session())

app.use('/api' , routes)


const PORT = process.env.PORT || 3001

// app.use(express.static(path.join(__dirname, "client/build")))
if(process.env.NODE_ENV === 'production') {
    //server static content
    app.use(express.static(path.join(__dirname, "client/build")))
}


db.sync({force: true }).then(() => {
    app.listen(PORT , () => console.log(`Listening on ${PORT}`))
})
