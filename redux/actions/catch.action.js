import {
    CATCH_POKEMON, RELEASE_POKEMON
} from "../constant";
export const CatchPokemon = (pokeball) => ({
    type: CATCH_POKEMON,
    pokemon: pokeball,
});
export const ReleasePokemon = (pokeball) => ({
    type: RELEASE_POKEMON,
    pokemon: pokeball,
});

export const Catch = (pokeball) => {
    return async (dispatch) => {
            dispatch(CatchPokemon(pokeball))
    }
}
export const Release = (pokeball) => {
    return async (dispatch) => {
            dispatch(ReleasePokemon(pokeball))
    }
}