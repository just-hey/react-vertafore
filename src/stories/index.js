/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from '../components/Header'
import ToDoList from '../components/ToDoList'
import ToDoItem from '../components/ToDoItem'
import AddItem from '../components/AddItem'

let items = [
  { id: 1, name: 'Trash/Recycles', task: 'Take out the trash and recycling', isComplete: false },
  { id: 2, name: 'Doge', task: 'Walk the dog', isComplete: false },
  { id: 3, name: 'Smiles', task: 'Brush your teeth for at least 2 minutes and make sure you floss too!', isComplete: false }
]

storiesOf('ToDo', module)
  .add('Header', () => <Header />)
  .add('AddItem', () => <AddItem items={ items } itemAdded={ () => addItem }/>)
  .add('To Do List', () => <ToDoList items={ items } />)
  .add('To Do Item', () => <ToDoItem item={ items } />)
