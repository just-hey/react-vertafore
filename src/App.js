import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch, withRouter } from 'react-router-dom'
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import AddItem from './components/AddItem'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <AddItem />
          <ToDoList />
      </div>
    )
  }
}

export default App
