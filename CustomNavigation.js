import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Pokedex from "./Components/Pokedex";
import ListPokemons from "./Components/ListPokemons";


const Stack = createStackNavigator();

const ListPokemonNavigator = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen
        name="Gotta Catch `Em All!"
        component={ListPokemons}
      />
       <Stack.Screen
        name="Pokedex"
        component={Pokedex}
      />
    </Stack.Navigator>
  );
}

export {ListPokemonNavigator};