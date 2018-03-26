import React, { Component } from 'react'
import {Row, Input, Button} from 'react-materialize'

class AddItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedItem: 0,
      selectedItemQty: 0
    }
  }

  changeItem = (e) => {
    this.setState({ selectedItem:  e.target.value})
  }

  changeQty = (e) => {
    this.setState({ selectedItemQty:  e.target.value})
  }

  submitForm = (e) => {
    e.preventDefault()
    let item = this.props.products.find(el => el.id == this.state.selectedItem)
    let data ={
      product: item,
      quantity: this.state.selectedItemQty
    }
    this.props.itemAdded(data)
  }

  render () {
    return <form onSubmit={this.submitForm} className="container">
        <h1>Add Item</h1>
        <Row>
          <Input s={12} type='select' label="Choose a Product" onChange={this.changeItem} defaultValue=''>
            <option value='' disabled>Please select an item...</option>
            {this.props.products.map((item, i) => <option key={i} value={item.id}>{item.name}</option> )}
          </Input>
        </Row>
        <Row>
          <Input onChange={this.changeQty} label='Quantity' type='number' />
        </Row>
        <Button waves='light'>add item</Button>
      </form>
  }

}

export default AddItem
