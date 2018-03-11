import React, { Component } from 'react'

class Options extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
        <option>{this.props.product.name}</option>
    )
  }

}

export default Options
