import React, { Component } from 'react'
// import Switch from '@material-ui/core/Switch'
import {Switch} from 'react-materialize'

class ToDoItem extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className="collection-item">
        <div className="row">
          {/* <div className="col s2">{this.props.id}</div>
          <div className="col s4">{this.props.name}</div>
          <div className="col s6">{this.props.task}</div> */}
          <div className="col s1">{1}</div>
          <div className="col s4">{'thing'}</div>
          <div className="col s6">{'description of what it is you need to do'}</div>
        </div>
      </div>
    )
  }

}

export default ToDoItem
