import farmhash from 'farmhash'

export default class Event {
  constructor() {
    // Event id. Should be a snowflake
    this.id = ''
    // Event message. Optional
    this.message = ''
    this.hash = ''
    // Tags. Optional
    this.tags = {}
    // Stacktrace lines. Optional
    this.stacktrace = []
  }

  static hashContent(data) {
    if (typeof data === 'object' || data instanceof Object) {
      data = JSON.stringify(data)
    }
    return farmhash.hash64(data)
  }

  static fromJson(json) {
    if (typeof json === 'string' || json instanceof String) {
      json = JSON.parse(json)
    }
    if (typeof json === 'object' || json instanceof Object) {
      const obj = Object.assign(new Event(), json)
      obj.hash = Event.hashContent(json)
      return obj
    } else {
      throw new Error('JSON not a string or object!')
    }
  }
}
