import React, { Component } from 'react'
import { Row, Input, Button } from 'react-materialize'

class AddItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      task: ''
    }
  }

  submitForm = (e) => {
    e.preventDefault()
    // logic for form submission
  }

  handleChange = (event) => {
    
    this.setState({ [event.target.name]: event.target.value })
    console.log('typing?', [event.target.name], event.target.value)
  }

  render () {
    console.log('load?')
    return <form onSubmit={ this.submitForm } className="container">
            <h3>Add To Do Item</h3>
            <Row>
              <Input
                style={ { width: 300 } }
                id="adornment-amount"
                label="name"
                onChange={ (e) => this.handleChange(e) }
                value={ this.state.name }
              />
            </Row>
            <Row>
              <Input
                style={ { width: 500 } }
                id="adornment-amount"
                label="task"
                onChange={ (e) => this.handleChange(e) }
                value={ this.state.task }
              />
            </Row>
            <Button waves='light'>add</Button>
          </form>
  }

}

export default AddItem
