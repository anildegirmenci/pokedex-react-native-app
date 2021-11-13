import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from "react-redux";
import { capitalizeFirstLetter } from './methods/Upper';

const Inventory = ({ route }) => {

    const catchReducer = useSelector(({ catchReducer }) => catchReducer);

    return (
        <View>
            <Image style={stylesInventory.blackPokeball} source={require('../assets/pokeball-black.png')} />
            <ScrollView>
                <View>
                    <View style={stylesInventory.header}>
                        <Image style={stylesInventory.pokedexStyle} source={require('../assets/pokebag.png')} />
                        <Text style={stylesInventory.headerText}>Pokébag</Text>
                    </View>
                    {catchReducer.myPokemons.map(
                        pokemon => {
                            return <>
                                <Image
                                    source={{
                                        uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,
                                    }}
                                />
                                <View style={stylesInventory.catchedContainer}>
                                    <Text style={stylesInventory.text}>Catched: {capitalizeFirstLetter(pokemon.name)}</Text>
                                    <TouchableOpacity activeOpacity={0.5}>
                                        <Image style={stylesInventory.favorite} source={require('../assets/pokemon-fav.png')} />
                                    </TouchableOpacity>
                                </View>
                            </>
                        }
                    )}

                </View>
            </ScrollView>
        </View>
    )
}
export default Inventory;

const stylesInventory = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingVertical: 20,
    },
    headerText: {
        paddingLeft: 10,
        fontSize: 44,
    },
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
    pokedexStyle: {
        width: 100,
        height: 100,
        top: 0,
        left: 0,
        opacity: 1
    },
    blackPokeball: {
        width: 450,
        height: 450,
        position: 'absolute',
        top: 210,
        left: 40,
        opacity: 0.1
    },
    catchedContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        marginVertical: 20,
        marginHorizontal:10,
        marginRight:30,
    },
    favorite: {
        
        width: 42,
        height: 42,
    }
});