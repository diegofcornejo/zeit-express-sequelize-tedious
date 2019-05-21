require('dotenv').config()
const Sequelize = require('sequelize')

console.log('\n')
console.log('Schema  :',process.env.DB_SCHEMA)
console.log('User    :',process.env.DB_USER)
console.log('Passwd  :',process.env.DB_PASSWD)
console.log('Host    :',process.env.DB_HOST)
console.log('Port    :',process.env.DB_PORT,'\n')
let conn = null

module.exports = function dbinstance() {
  if(!conn){
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
            logging: false
        }
      )
  }
  return conn
}
