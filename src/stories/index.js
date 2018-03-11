/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Message from '../components/Message'
import Timer from '../components/Timer'
import CartHeader from '../components/CartHeader'
import CartFooter from '../components/CartFooter'
import CartItems from '../components/CartItems'
import ShoppingCart from '../components/ShoppingCart'
import CartItem from '../components/CartItem'

const cartItem = { id: 1, product: { name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 }
const items = [
  { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
  { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
  { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
]

storiesOf('Message', module)
  .add('Hello World', () => <Message text="Hello world" />)
  .add("What's the time?", () => <Message text={new Date().toString()} />)
  .add('Custom', () => <Message text="New thingy" />)

storiesOf('Timer', module)
  .add('Show', () => <Timer />)

storiesOf('ShoppingCart', module)
  .add('Header', () => <CartHeader />)
  .add('Footer', () => <CartFooter copyright='2018'/>)
  .add('Items', () => <CartItems products={ items } />)
  .add('Item', () => <CartItem item={ cartItem } />)
  .add('ShoppingCart', () => <ShoppingCart items={ items } copyright='2018'/>)
