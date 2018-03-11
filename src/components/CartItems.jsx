import React, { Component } from 'react'

import CartItem from './CartItem'


class CartItems extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    console.log('cartItemS log',this.props)
    return (
      <div className="container">
        <h1>Items</h1>
        <div className="collection">
          <div className="collection-item row grey lighten-3">
            <div className="col s8">Product</div>
            <div className="col s2">Price</div>
            <div className="col s2">Quantity</div>
          </div>
          { this.props.products.map(item => <CartItem items={ item.product } key={item.id} qty={item.quantity} />) }
        </div>
      </div>
    )
  }

}

export default CartItems
