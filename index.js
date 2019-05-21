const express = require('express')
const helmet = require('helmet')
const query = require('./lib/database').querySelect()

const app = express()

// add some security-related headers to the response
app.use(helmet())

app.get('*', (req, res) => {
    query(`
      select *
      from centroUnido_tblUsuarios
    `)
    .then(result => {
      return res.status(200).json({
        status: 200,
        message: 'ok',
        path: '/',
        data: result
      })
    })
    .catch(err => {
      return res.json(err)
    })

})

module.exports = app
