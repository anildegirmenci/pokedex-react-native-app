import { CATCH_POKEMON, RELEASE_POKEMON } from "../constant";

const state = { myPokemons: [] };

export default (state, action) => {
    // console.log(state.myPokemons);
    switch (action.type) {
        case CATCH_POKEMON:
            const modifiedPokemons =  Object.assign([state.myPokemons.slice()],action.pokemon);
            console.log(action.pokemon);
            console.log(modifiedPokemons);
            return {
                ...state,
                myPokemons: modifiedPokemons
            }
        case RELEASE_POKEMON:
            return {
                ...state,
                myPokemons: [...state.myPokemons.filter(p => p.name !== action.pokemon.name)]
            };

        default: return state
    }
};