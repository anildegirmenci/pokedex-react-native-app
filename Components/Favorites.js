import React, { useState } from 'react';
import { Text, Headline } from 'react-native-paper';
import { View, StyleSheet, Image, Modal, Platform } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from "react-redux";
import * as  unfavoriteAction from '../redux/actions/favorite.action';
import { capitalizeFirstLetter } from './methods/Upper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Favorites = ({ route }) => {

    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    const favoriteReducer = useSelector(({ favoriteReducer }) => favoriteReducer);


    return (
        <View>
            <Image style={stylesFavorites.blackPokeball} source={require('../assets/pokeball-black.png')} />
            <Modal visible={modalOpen} animationType='fade'>
                <View style={stylesFavorites.modalContent}>
                    <View style={stylesFavorites.modalInner}>
                        <Image style={stylesFavorites.pikachu} source={require('../assets/pikachu.gif')} />
                        <Text>Fav Pokémon has been Deleted!</Text>
                        <MaterialCommunityIcons style={stylesFavorites.modalToggle}
                            name='close'
                            size={40}
                            onPress={() => setModalOpen(false)}
                        />
                    </View>
                </View>
            </Modal>
            <ScrollView>
                <View>
                    <View style={stylesFavorites.header}>
                        <Image style={stylesFavorites.pokeStar} source={require('../assets/pokemon-fav.png')} />
                        <Text style={stylesFavorites.headerText}>Favorite Pokémons</Text>
                    </View>
                    {favoriteReducer.favPokemons.map((pokemon, index) => {
                        return <>
                            <View key={index}>
                                <View style={stylesFavorites.catchedContainer}>
                                    <Text style={stylesFavorites.catchedText}>{capitalizeFirstLetter(pokemon.name)}</Text>
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                                        dispatch(unfavoriteAction.Unfav(pokemon));
                                        setModalOpen(true)
                                    }}>
                                        <Image style={stylesFavorites.favorite} source={require('../assets/pokemon-fav.png')} />
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
export default Favorites;

const stylesFavorites = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingVertical: 20,
    },
    headerText: {
        width: 220,
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
    pokeStar: {
        width: 100,
        height: 100,
        top: 0,
        left: -2,
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
        transform:[{rotateY:'180deg'}]
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