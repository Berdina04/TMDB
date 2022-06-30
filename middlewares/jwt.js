const jwt = require('jsonwebtoken')

const checkJWT = (req, res, next) => {
    
    console.log(req.headers.authorization)
    if (!req.headers.authorization) {
       
        return res.status(401).send('missing token')
    }

    const token = req.headers.authorization // separar token del bearer


    console.log('token que llega', token)
    const data = jwt.verify(token, 'plataforma5')

    console.log('data del verify' , data)
    if (data) {
        req.user = data
        return next()
    }

    return res.status(401).send('Unathorized')

}

module.exports = checkJWT