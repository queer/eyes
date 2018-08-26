export default class Event {
  constructor() {
    this.event_id = ''
    this.culprit = ''
    this.timestamp = ''
    this.message = ''
    this.exception = []
  }

  static fromJson(json) {
    if (typeof json === 'string' || json instanceof String) {
      json = JSON.parse(json)
    }
    if (typeof json === 'object' || json instanceof Object) {
      return Object.assign(new Event(), json)
    } else {
      throw new Error('JSON not a string or object!')
    }
  }
}
