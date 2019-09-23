import React, { Component } from 'react'
import axios from 'axios'
import PokemonList from './components/PokemonList'
import PokemonListItem from './components/PokemonListItem'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: []
    }
  }
  componentDidMount = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`)
      .then(res => {
        this.setState({ pokemon: res.data.results })
      })
  }

  render() {
    return (
      <div className="App">
          <PokemonListItem />
          <PokemonList />
      </div>
    )
  }
}

export default App
