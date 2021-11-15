import { FAVORITE_POKEMON, UNFAVORITE_POKEMON } from "../constant";

const initialState = { favPokemons: [] };

export default (state = initialState, action) => {
    switch (action.type) {
        case FAVORITE_POKEMON:
            return {
                ...state,
                favPokemons: state.favPokemons.concat(action.pokemon)
            }
        case UNFAVORITE_POKEMON:
            return {
                ...state,
                favPokemons: [...state.favPokemons.filter(p => p.id !== action.pokemon.id)]
            };

        default: return state
    }
};