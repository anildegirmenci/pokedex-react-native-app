import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Image, ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import {
    Avatar,
    Button,
    Card,
    Title,
    Paragraph,
    List,
    Headline,
} from 'react-native-paper';

const ListPokemons = (props) => {

    const [isLoading, setLoading] = useState(true);
    const [pokemonData, setPokemonData] = useState([]);
    const [searchfeild, setSearchfeild] = useState('');

    const getPokemonData = async () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(response => response.json())
            .then(pokemonData => setPokemonData(pokemonData.results));
        // console.log(pokemonData);
    }
    useEffect(() => {
        getPokemonData();
    }, []);

    return (
        <View>
            <View style={styles.searchCont}>
                <TextInput
                    style={styles.searchfeild}
                    placeholder="Search Pokemons"
                    onChangeText={value => setSearchfeild(value)}
                    value={searchfeild}
                />
            </View>
            <ScrollView>
                <View style={styles.container}>
                    {pokemonData
                        .filter(pokemon =>
                            pokemon.name.toLowerCase().includes(searchfeild.toLowerCase())
                        )
                        .map((pokemon, index) => {
                            return (
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    key={index}
                                    style={styles.card}
                                    onPress={() =>
                                        props.navigation.navigate('Pokedex', {
                                            pokemon: pokemon.name,
                                        })
                                    }>
                                    <Image
                                        style={{ width: 150, height: 150 }}
                                        source={{
                                            uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name
                                                }.png`,
                                        }}
                                    />
                                    <Text>{pokemon.name}</Text>
                                </TouchableOpacity>
                            );
                        })}
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 10,
    },
    card: {
        display: 'flex',
        alignItems: 'center',
        borderWidth:2,
        borderRadius:10,
        borderColor: '#333',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    searchCont: {
        display:'flex',
        alignItems:'center',
        zIndex: 1,
        marginVertical:10
    },
    searchfeild: {
        height: 32,
        borderWidth: 1,
        borderColor: '#000',
        textAlign: 'center',
        width: '95%',
        borderRadius: 15,
    },
});

export default ListPokemons