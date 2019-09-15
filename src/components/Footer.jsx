import React, { Component } from 'react';

class CartFooter extends Component {
  constructor (props) {
    super(props)
  }

  render(props) {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col 16 s12">
              <h5 className="white-text"> Do all the things</h5>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            &copy; { this.props.copyright }
          </div>
        </div>
      </footer>
    )
  }

}

export default CartFooter
