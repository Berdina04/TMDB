const Sequelize = require('sequelize');
const db = new Sequelize('tmbd' , null, null, {
    host : 'localhost',
    dialect: 'postgres',
    logging : false
})

// require("dotenv").config()
// const db = new Sequelize(
//     process.env.DATABASE_URL, {
//         dialect: "postgres",
//         dialectOptions: {
//           ssl: {
//             require: true,
//             rejectUnauthorized: false,
//           },
//         },
//       }
// )

module.exports = db