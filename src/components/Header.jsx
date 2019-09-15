import React from 'react'

class CartHeader extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <header className="row">
        <nav>
          <div className="container">
            <div className="nav-wrapper">
              <div className="col s12">
                <a href="/" className="brand-logo">To Do</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default CartHeader
