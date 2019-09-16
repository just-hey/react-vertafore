import React, { Component } from 'react'
import { Switch } from '@material-ui/core'

const ToDoItem = () => {
  return (
    <div className="collection-item">
      <div className="row">
        <div className="col s1">{ this.props.item.id }</div>
        <div className="col s3">{ this.props.item.name }</div>
        <div className="col s6">{ this.props.item.task }</div>
        <div className="col s1">
          <Switch  
            value="checked" 
            checked={ this.props.item.isComplete } 
            onClick={ (e) => this.props.changeStatus(this.props.item.id, this.props.item.isComplete) } 
            inputProps={ { 'aria-label': 'primary checkbox' } } 
          />
        </div>
      </div>
    </div>
  )
}

export default ToDoItem
