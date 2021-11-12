import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Pokemons from './ListPokemons';
import Pokedex from './Pokedex';

const stackNavigator = createStackNavigator(
    {
        Pokemons: {
        screen: Pokemons,
      },
      Pokedex: {
        screen: Pokedex,
      },
    },
  );
  
  const AppContainer = createAppContainer(stackNavigator);
  
  class Home extends Component {
    render() {
      return <AppContainer />;
    }
  }

  export default Home;