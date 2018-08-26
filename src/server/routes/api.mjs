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
  router.post('/api/:projectId/store/', (req, res) => {
    /*
    At this point, req.body is something like
    {
      "event_id": "39q84765yrhfloik43h",
      "culprit": "meme.more_memes",
      "timestamp": "2018-01-01T00:00:00",
      "message": "whatever: !!!",
      "exception": [
        {
          "type": "whatever",
          "value": "!!!",
          "module": "__module__",
        },
      ],
    }

    and we also have headers
    User-Agent: my-cool-sdk/0.0.1
    Content-Type: application/json
    X-Sentry-Auth: Sentry sentry_version=7,
      sentry_timestamp=1329096377,
      sentry_key=b70a31b3510c4cf793964a185cfe1fd0,
      sentry_secret=b7d80b520139450f903720eb7991bf3d,
      sentry_client=my-cool-sdk/0.0.1
    */
    console.log('Got sentry event:', req.body)
    const event = Event.fromJson(req.body)
    database.getEventModel().create(event)
    res.send(event)
  })
  return router
}
