import {
    FAVORITE_POKEMON, UNFAVORITE_POKEMON
} from "../constant";
export const FavPokemon = (pokeball) => ({
    type: FAVORITE_POKEMON,
    pokemon: pokeball,
});
export const UnFavPokemon = (pokeball) => ({
    type: UNFAVORITE_POKEMON,
    pokemon: pokeball,
});

export const Fav = (pokeball) => {
    return async (dispatch) => {
        dispatch(FavPokemon(pokeball))
    }
}
export const Unfav = (pokeball) => {
    return async (dispatch) => {
        dispatch(UnFavPokemon(pokeball))
    }
}