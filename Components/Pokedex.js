import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from "react-redux";
import * as catchAction from '../redux/actions/catch.action';
import { capitalizeFirstLetter } from './methods/Upper';
import { Card, Headline } from 'react-native-paper';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const Pokedex = ({ route }) => {

    const dispatch = useDispatch();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        getPokemonData();
    }, []);

    const getPokemonData = async () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.pokemon.name}`)
            .then(res => res.json())
            .then(details => setDetails(details));
    }
    // details i degistir 
    const pokemonInfo = {
        imageUri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${details.name}.png`,
        name: details.name,
    }

    return pokemonInfo.name ? (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image style={styles.pokedexStyle} source={require('../assets/pokedex.png')} />
            <Image style={styles.image}
                source={{ uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${details.name}.png` }}
            />
            <Image style={styles.pokemonPokeball}
                source={require('../assets/pokeball-2.png')} />
            <Headline style={styles.headline}>Name: {capitalizeFirstLetter(pokemonInfo.name)}</Headline>
            <Headline style={styles.headline}>Height: {details.height}</Headline>
            <Headline style={styles.headline}>Weight: {details.weight}</Headline>
            <Headline style={styles.headline}>Ability: {capitalizeFirstLetter(details.abilities[0].ability.name)}
            </Headline>
            <Headline style={styles.headline}>Type: {capitalizeFirstLetter(details.types[0].type.name)}</Headline>
            <TouchableOpacity activeOpacity={0.5} style={styles.catchButton}
                onPress={() => {
                    
                    pokemonInfo.id = uuidv4();
                    dispatch(catchAction.Catch(pokemonInfo))
                    
                }
                }
            >
                <Headline style={styles.catchText}>Catch the Pokémon!</Headline>
            </TouchableOpacity>
        </View>
    ) : (
        <View style={styles.indicator}>
            <ActivityIndicator size="large" color="#E63F34" />
        </View>
    );


};
export default Pokedex;

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    },
    text: {
        fontSize: 22,
        marginBottom: 15,
    },
    pokemonPokeball: {
        position: 'absolute',
        opacity: 0.1,
        top: 250,
        left: 170,
        width: 200,
        height: 200
    },
    pokedexStyle: {
        width: 700,
        height: 800,
        position: 'absolute',
        top: -30,
        left: -10,
        opacity: 0.5
    },
    indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headline: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: -1
    },
    catchButton: {
        marginTop: 20,
        backgroundColor: 'rgb(223, 24, 24)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 200,
        borderWidth: 1,
        borderColor: '#333',
        textAlign: 'center',
        borderRadius: 5,
    },
    catchText: {
        color: '#eee',
        fontSize: 14,
    }
});