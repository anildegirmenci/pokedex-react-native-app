import {
    FAVORITE_POKEMON, UNFAVORITE_POKEMON
} from "../constant";
export const favPokemon = (pokeball) => ({
    type: FAVORITE_POKEMON,
    pokemon: pokeball,
});
export const unfavPokemon = (pokeball) => ({
    type: UNFAVORITE_POKEMON,
    pokemon: pokeball,
});

export const Fav = (pokeball) => {
    return async (dispatch) => {
        dispatch(favPokemon(pokeball))
    }
}
export const Unfav = (pokeball) => {
    return async (dispatch) => {
        dispatch(unfavPokemon(pokeball))
    }
}