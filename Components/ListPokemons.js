import React, { useState, useEffect } from 'react'
import { View, Image, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { Headline, TextInput  } from 'react-native-paper';
import {capitalizeFirstLetter} from './methods/Upper';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';



const ListPokemons = (props) => {

    const [isLoading, setLoading] = useState(true);
    const [pokemonData, setPokemonData] = useState([]);
    const [searchfeild, setSearchfeild] = useState('');

    const getPokemonData = async () => {
        const { state } = props.route;
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(response => response.json())
            .then(pokemonData => setPokemonData(pokemonData.results));
    }
    useEffect(() => {
        getPokemonData();
    }, []);


    return pokemonData ? (
        <View>
            <Image style={styles.blackPokeball} source={require('../assets/pokeball-black.png')} />
            <View style={styles.searchCont}>
                <TextInput
                    style={styles.searchfeild}
                    placeholder="Search Pokémons"
                    onChangeText={value => setSearchfeild(value)}
                    value={searchfeild}
                />
            </View>
            <ScrollView>
                <View style={styles.container}>
                    {pokemonData.filter(pokemon => pokemon.name.toLowerCase().includes(searchfeild.toLowerCase()))
                        .map((pokemon, index) => {
                            return (
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    key={index}
                                    style={styles.card}
                                    onPress={() =>
                                        props.navigation.navigate('Pokedex', {
                                            pokemon: pokemon,
                                        })
                                    }>
                                    <LinearGradient style={styles.gradient} colors={['rgba(103,13,130,0.9)','rgba(19,0,70,0.8)']}>
                                        <Image style={styles.pokemonPokeball2} 
                                        source={require('../assets/pokeball-2.png')} />
                                        <Image style={styles.pokemonPokeball}
                                        source={require('../assets/pokeball.png')} />  
                                        <Image
                                            style={styles.pokemonImage}
                                            source={{
                                                uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name
                                                    }.png`,
                                            }}
                                        />
                                        <Headline style={styles.headline}>{capitalizeFirstLetter(pokemon.name)}</Headline>
                                    </LinearGradient>
                                </TouchableOpacity>
                            );
                        })}
                </View>
            </ScrollView>
        </View>
    ) : (
        <View style={styles.indicator}>
            <ActivityIndicator size="large" color="#E63F34" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 10,
        paddingBottom:20,
    },
    indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pokemonImage: {
        width: 150,
        height: 150,
    },
    pokemonPokeball2:{
        position:'absolute', 
        opacity:0.1,
        top:11,
        left:9, 
        width:130,
        height:130
    },
    pokemonPokeball:{
        position:'absolute', 
        opacity:0.8,
        left:3,
        top:3, 
        width:20,
        height:20
    },
    blackPokeball: {
        width:450,
        height:450,
        position:'absolute',
        top:210,
        left:40,
        opacity:0.1
    },
    ekinoksIcon:{
        width:200,
        height:200,
        position:'absolute',
        top:10,
        opacity:0.2
    }, 
    card: {
        display: 'flex',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#333',
        marginHorizontal: 20,
        marginVertical: 10,
        shadowColor: "#333",
        shadowOpacity: 0.7,
        shadowRadius: 5,
        shadowOffset: {
            height: 1,
            width: 1
        },
        opacity:1
    },
    gradient: {
        borderRadius:7,
    },
    headline: {
        paddingLeft:7,
        color:'#acacac',
        fontSize: 18,
        fontWeight:'600'
    },
    searchCont: {
        display: 'flex',
        alignItems: 'center',
        zIndex: 999,
        marginVertical: 10
    },
    searchfeild: {
        height: 32,
        borderWidth: 2,
        borderColor: '#e3e3e3',
        textAlign: 'center',
        width: '97%',
        borderRadius: 15,
    },
});

export default ListPokemons