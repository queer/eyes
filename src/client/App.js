import React, { Component, } from 'react'
import './app.css'
import eyes from './eyes.svg'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { username: null, }
  }

  componentDidMount() {
    /*
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username, }))
      */
  }

  render() {
    return (
      <div>
        <img src={eyes} alt="react" style={{ width: '50vh', height: '50vh', left: '25vh', }} />
      </div>
    )
  }
}
