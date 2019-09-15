import React, { Component } from 'react'

import ToDoItem from './ToDoItem'

class ToDoList extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <h1>Items To Do</h1>
        <div className="collection">
          <div className="collection-item row grey lighten-3">
            <div className="col s8">Product</div>
            <div className="col s2">Price</div>
            <div className="col s2">Quantity</div>
          </div>
          { this.props.products.map(item => <ToDoItem items={ item.name } key={item.id} task={item.task} />) }
        </div>
      </div>
    )
  }

}

export default ToDoList
