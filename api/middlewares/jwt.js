const jwt = require('jsonwebtoken')

const checkJWT = (req, res, next) => {
    
    if (!req.headers.authorization) {
       
        return res.status(401).send('missing token')
    }

    const token = req.headers.authorization.split(" ")[1] // separar token del bearer
    console.dir(token)

    const data = jwt.verify(token, 'plataforma5')

    if (data) {
        req.user = data
        next()
    }

    return res.status(401).send('Unathorized')

}

module.exports = checkJWT