import mongoose from 'mongoose'
import GenerateSchema from 'generate-schema'

import config from '../config'

import Event from '../shared/event'

export const EventSchema = new mongoose.Schema(GenerateSchema.mongoose(new Event()))

export default class Database {
  constructor() {
    this.eventModel = null
  }

  connect() {
    const options = {
      useNewUrlParser: true,
      // Never stop trying to reconnect
      reconnectTries: Number.MAX_VALUE,
      // Reconnect every 500ms
      reconnectInterval: 500,
      // Maintain up to 10 socket connections
      poolSize: 10,
      // If not connected, return errors immediately rather than waiting for reconnect
      bufferMaxEntries: 0,
      // Give up initial connection after 10 seconds
      connectTimeoutMS: 10000,
      // Close sockets after 45 seconds of inactivity
      socketTimeoutMS: 45000,
      // Use IPv4, skip trying IPv6
      family: 4,
    }
    mongoose.connect(
      config.mongoConnectionString,
      options
    )
    this.eventModel = mongoose.model('event', EventSchema)
  }

  getEventModel() {
    return this.eventModel
  }
}
