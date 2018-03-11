import React, { Component } from 'react'

class CartItem extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className="collection-item">
        <div className="row">
          <div className="col s8">{this.props.items.name}</div>
          <div className="col s2">${this.props.items.priceInCents / 100}</div>
          <div className="col s2">{this.props.qty}</div>
        </div>
      </div>
    )
  }

}

export default CartItem
