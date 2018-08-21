import { userInfo, } from 'os'
import express from 'express'
import Database from '../data/database.mjs'
import Event from '../shared/event.mjs'

export default (app) => {
  const database = new Database()
  database.connect()

  const router = express.Router()
  router.get('/', (req, res) => {
    res.send({ api: true, })
  })
  /*
  router.get('/getUsername', (req, res) => {
    res.send({ username: userInfo().username, })
  })
  */
  router.post('/event/create', (req, res) => {
    const event = Event.fromJson(req.body)
    database.getEventModel().create(event)
    res.send(event)
  })
  return router
}
