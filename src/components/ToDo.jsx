import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'
import ToDoList from './ToDoList'
import AddItem from './AddItem'

class ToDo extends Component {
  constructor (props) {
    super(props)
  }

  render() {

    return (
      <div>
        <Header />
        {/* <AddItem products={this.props.products} itemAdded={this.props.itemAdded}/> */}
        <ToDoList items={ this.props.items }/>
        <Footer copyright={ this.props.copyright }/>
      </div>
    )
  }

}

export default ToDo
