import React, { Component } from 'react'
import ToDoItem from './ToDoItem'

class ToDoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [
        { id: 1, name: 'Trash/Recycles', task: 'Take out the trash and recycling', isComplete: false },
        { id: 2, name: 'Doge', task: 'Walk the dog', isComplete: false },
        { id: 3, name: 'Smiles', task: 'Brush your teeth for at least 2 minutes and make sure you floss too!', isComplete: false },
        { id: 4, name: 'Drink more water', task: 'Seriously, just drink more water...' }
      ]
    }
  }
  
  addItem = ({ id, name, task, isComplete=false }) => {
    // logic to add item to array
  }
  
  changeStatus = (id, value) => {
    let copy = this.state.items
    copy.forEach(item => {
      if (item.id === id) item.isComplete = !value
    })
    this.setState({ items: copy})
  }
  
  removeItem = () => {
    // logic to remove item from array
  }

  render() {
    return (
      <div className="container">
        <h3>Items To Do</h3>
        <div className="collection">
          <div className="collection-item row grey lighten-3">
            <div className="col s1">#</div>
            <div className="col s3">Name</div>
            <div className="col s6">Task</div>
            <div className="col s1">Completed</div>
          </div>
          { this.state.items.map(item => <ToDoItem item={ item } changeStatus={ this.changeStatus } />) }
        </div>
      </div>
    )
  }

}

export default ToDoList
