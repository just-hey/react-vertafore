import React, { Component } from 'react'
import { Row, Input, Button } from 'react-materialize'
import Options from './Options'

class AddItem extends Component {

  render() {
    return (
      <div className="container">
        <h1>Add Item</h1>
          <Row>
            <Input s={12} type='select' label="Choose a product" defaultValue=''>
               { this.props.products.map(product => <Options product={ product } key={product.id}/>) }
             </Input>
             <Input type="number" label="Quantity" />
          </Row>
          <Button waves='light'>Add Item</Button>
      </div>
    )
  }

}

export default AddItem
