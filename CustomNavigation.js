import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Pokedex from "./Components/Pokedex";
import ListPokemons from "./Components/ListPokemons";


const Stack = createStackNavigator();

const FirstScreenNavigator = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen
        name="List of Pokémons"
        component={ListPokemons}
      />
       <Stack.Screen
        name="Pokedex"
        component={Pokedex}
      />
    </Stack.Navigator>
  );
}

export {FirstScreenNavigator};