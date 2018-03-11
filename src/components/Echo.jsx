import React, { Component } from 'react'

const EchoInput = ({ text, handler }) => (
  <div className="container">
    <p>
      <input
        value={ text }
        onChange={ handler }
      />
    </p>
    { text }
  </div>
)

class Echo extends Component {

  constructor (props) {
    super(props)
    this.state = { greeting: props.original }
  }

  inputWasChanged = (e) => {
    this.setState({ greeting: e.target.value })
  }

  render() {
    return <EchoInput text={ this.state.greeting } handler={ this.inputWasChanged } />
  }

}

export default Echo
