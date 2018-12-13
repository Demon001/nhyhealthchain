import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div>
        { this.props.children}
      </div>
    )
  }
}
App.displayName = 'App' // Tell React Dev Tools the component name

export default App
