import { CATCH_POKEMON, RELEASE_POKEMON } from "../constant";

const initialState = { myPokemons: [] };

export default (state = initialState, action) => {
    console.log(state.myPokemons);
    switch (action.type) {
        case CATCH_POKEMON:
            return {
                ...state,
                myPokemons: [...state.myPokemons, action.pokemon]
            }
        case RELEASE_POKEMON:
            return {
                ...state,
                myPokemons: [...state.myPokemons.filter(p => p.name !== action.pokemon.name)]
            };

        default: return state
    }
};