import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Pokedex = props => {

    const [details, setDetails] = useState([]);

    const getPokemonData = async () => {
        const { state } = props.navigation;
        fetch(`https://pokeapi.co/api/v2/pokemon/${state.params.pokemon}`)
            .then(response => response.json())
            .then(details => setDetails(details));
    }
    useEffect(() => {
        getPokemonData();
    }, []);

    return details.name ? (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image style={styles.image}
                source={{
                    uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${details.name}.png`,
                }}
            />
            <Text style={styles.text}>Name: {details.name}</Text>
            <Text style={styles.text}>Height: {details.height}</Text>
            <Text style={styles.text}>Weight: {details.weight}</Text>
            <Text style={styles.text}>
                Ability: {details.abilities[0].ability.name}
            </Text>
            <Text style={styles.text}>Type: {details.types[0].type.name}</Text>
            <TouchableOpacity activeOpacity={0.5} style={styles.catchButton}
                onPress={() =>
                    console.log('Gotta Catch `Em All!')
                }
            >
                <Text style={styles.catchText}>Catch the Pokémon!</Text>
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
    indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    catchButton: {
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 200,
        borderWidth: 1,
        borderColor: '#000',
        textAlign: 'center',
        borderRadius: 5,
    },
    catchText: {
        color: '#eee',
    }
});