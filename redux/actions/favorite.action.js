import {
    FAVORITE_POKEMON, UNFAVORITE_POKEMON
} from "../constant";
export const FavPokemon = () => ({
    type: FAVORITE_POKEMON,
});
export const UnFavPokemon = () => ({
    type: UNFAVORITE_POKEMON,
});

export const PokeballPokemon = (favorite) => {
    return async (dispatch) => {
        if (favorite === true) {
            dispatch(FavPokemon())
        } else {
            dispatch(UnFavPokemon())
        }
    }
}