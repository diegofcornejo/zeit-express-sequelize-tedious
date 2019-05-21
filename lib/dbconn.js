require('dotenv').config()
const Sequelize = require('sequelize')

module.exports = function dbinstance() {
  conn = new Sequelize(
      process.env.DB_SCHEMA,
      process.env.DB_USER,
      process.env.DB_PASSWD,
      {
          host: process.env.DB_HOST,
          dialect: 'mssql',
          port: process.env.DB_PORT,
          query: {
              raw: false
          },
          logging: true
      }
    )
}
