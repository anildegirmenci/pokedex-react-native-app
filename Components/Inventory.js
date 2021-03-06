import React, { useState } from 'react';
import { Text } from 'react-native-paper';
import { View, StyleSheet, Image, Modal, Platform } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from "react-redux";
import * as releaseAction from '../redux/actions/catch.action';
import * as favAction from '../redux/actions/favorite.action';
import { capitalizeFirstLetter } from './methods/Upper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Inventory = ({ route }) => {

    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    const catchReducer = useSelector(({ catchReducer }) => catchReducer);

    return (
        <View>
            <Image style={stylesInventory.blackPokeball} source={require('../assets/pokeball-black.png')} />
            <Modal visible={modalOpen} transparent={true} animationType='fade'>
                <View style={stylesInventory.modalContent}>
                    <View style={stylesInventory.modalInner}>
                        <Image style={stylesInventory.pikachu} source={require('../assets/pikachu.gif')} />
                        <Text style={stylesInventory.modalText}>Fav Pokémon has been added!</Text>
                        <MaterialCommunityIcons style={stylesInventory.modalToggle}
                            name='close'
                            size={40}
                            onPress={() => setModalOpen(false)}
                        />
                    </View>
                </View>
            </Modal>
            <ScrollView>
                <View>
                    <View style={stylesInventory.header}>
                        <Image style={stylesInventory.pokedexStyle} source={require('../assets/pokebag.png')} />
                        <Text style={stylesInventory.headerText}>Pokébag</Text>
                    </View>
                    {catchReducer.myPokemons.map((pokemon, index) => {
                        return <>
                            <View key={index}>
                                <View style={stylesInventory.catchedContainer}>
                                    <Text style={stylesInventory.catchedText}>Catched: {capitalizeFirstLetter(pokemon.name)}</Text>
                                    <TouchableOpacity activeOpacity={0.5}
                                        onPress={() => {
                                            dispatch(releaseAction.Release(pokemon))
                                        }}
                                    >
                                        <MaterialCommunityIcons style={stylesInventory.trash}
                                            name='trash-can-outline'
                                            size={35} />
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                                        setModalOpen(true);
                                        dispatch(favAction.Fav(pokemon));
                                    }}>
                                        <Image style={stylesInventory.favorite} source={require('../assets/pokemon-fav.png')} />
                                    </TouchableOpacity>
                                </View>
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
    catchedText: {
        fontSize: 22,
        marginBottom: 15,
        ...Platform.select({
            android: {
                top: 6
            }
        })
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
        justifyContent: 'space-between',
        marginVertical: 20,
        marginHorizontal: 10,
        marginRight: 30,
    },
    favorite: {
        width: 42,
        height: 42,
    },
    modalContent: {
        backgroundColor: '#000000aa',
        flex: 1,
    },
    modalInner: {
        backgroundColor: '#eee',
        margin: 50,
        marginVertical:200,
        padding: 10,
        borderRadius: 10,
        flex: 1,    
        justifyContent: 'center',
        alignItems:'center'
    },
    modalText: {
        fontSize: 19,
        color: '#333',
    },
    modalToggle: {
        marginVertical: 20,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    pikachu: {
        width: 100,
        height: 72,
    },
    trash: {
        paddingLeft: 50,
        flex: 1,
        color: '#fa0',
        ...Platform.select({
            android: {
                paddingTop: 5
            }
        })
    }

});