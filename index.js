const app = require('express')()
const helmet = require('helmet')
const cors = require('cors')
const db = require('./lib/dbconn')()

app.use(helmet())
app.use(cors())

app.get('/', async (req, res) => {
  try {

    const result = await db.query('select id, nombre, usuario from centroUnido_tblUsuarios',{ type: 'SELECT' })
    return res.json(result)

  } catch(err) {

    return res.json(err)
  }
})

module.exports = app
