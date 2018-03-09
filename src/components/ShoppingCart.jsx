import React, { Component } from 'react';

import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItems from './CartItems';

class ShoppingCart extends Component {

  render() {
    return (
      <div>
        <CartHeader />
        <CartItems />
        <CartFooter />
      </div>
    );
  }

}

export default ShoppingCart;
