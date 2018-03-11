import React, { Component } from 'react'

import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'

class ShoppingCart extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    
    return (
      <div>
        <CartHeader />
        <CartItems products={ this.props.items }/>
        <CartFooter copyright={ this.props.copyright }/>
      </div>
    )
  }

}

export default ShoppingCart
