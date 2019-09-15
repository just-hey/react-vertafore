/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Message from '../components/Message'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ToDoList from '../components/ToDoList'
import ToDo from '../components/ToDo'
import ToDoItem from '../components/ToDoItem'
import AddItem from '../components/AddItem'

const items = [
  { id: 1, name: 'Trash/Recycles', task: 'Take out the trash and recycling', isComplete: false },
  { id: 2, name: 'Doge', task: 'Walk the dog', isComplete: false },
  { id: 3, name: 'Smiles', task: 'Brush your teeth for at least 2 minutes and make sure you floss too!', isComplete: false }
]

const addItem = () => {
  // logic to add item to array
}

const updateStatus = ({ id, name, task, isComplete }) => {
  // logic to update items array
}

const removeItem = () => {
  // logic to remove item from array
}

storiesOf('Message', module)
  .add('Hello World', () => <Message text="Hello world" />)

storiesOf('ToDo', module)
  .add('Header', () => <Header />)
  .add('Footer', () => <Footer copyright='2019'/>)
  .add('To Do List', () => <ToDoList items={ items } />)
  .add('To Do Item', () => <ToDoItem item={ items } />)
  .add('AddItem', () => <AddItem items={ items } itemAdded={ () => addItem }/>)
  .add('ToDo', () => <ToDo items={ items } items={ items } itemAdded={ () => addItem } copyright='2018'/>)
