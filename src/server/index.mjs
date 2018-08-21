import express from 'express'
import bodyParser from 'body-parser'
import config from './config'
import api from './routes/api'

const app = express()

app.use(express.static('dist'))
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send({ what: 'api?', })
})
app.use('/api', api(app))
app.listen(config.port, () => console.log(`Listening on port ${config.port}!`))
