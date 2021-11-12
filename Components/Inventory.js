import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from "react-redux";

const Inventory = ({ route }) => {

    const catchReducer = useSelector(({ catchReducer }) => catchReducer);

    return (
        <ScrollView>
            <View>
                {catchReducer.myPokemons.map(
                    pokemon => {
                        return <>
                            <Image 
                                source={{
                                    uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,
                                }}
                            />
                            <Text style={stylesInventory.text}>Name: {pokemon.name}</Text>
                        </>
                    }
                )}

            </View>
        </ScrollView>
    )
}
export default Inventory;

const stylesInventory = StyleSheet.create({
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