import {
    CATCH_POKEMON, RELEASE_POKEMON
} from "../constant";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export const CatchPokemon = (pokemon) => ({
    type: CATCH_POKEMON,
    pokemon: pokemon,
});
export const ReleasePokemon = (pokemon) => ({
    type: RELEASE_POKEMON,
    pokemon: pokemon,
});

export const Catch = (pokemon) => {
    return async (dispatch) => {
        dispatch(CatchPokemon(pokemon));
        pokemon.id = uuidv4();
        return pokemon;
    }
}
export const Release = (pokemon) => {
    return async (dispatch) => {
        dispatch(ReleasePokemon(pokemon))
    }
}
