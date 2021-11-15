import { CATCH_POKEMON, RELEASE_POKEMON } from "../constant";

const initialState = { myPokemons: [] };

export default (state = initialState, action) => {
    switch (action.type) {
        case CATCH_POKEMON:
            return {
                ...state,
                myPokemons: state.myPokemons.concat(action.pokemon)
            }
            case RELEASE_POKEMON:
                return {
                    ...state,
                    myPokemons: state.myPokemons.filter(p => p.id !== action.pokemon.id)
                };

            default:
                return state
    }
};