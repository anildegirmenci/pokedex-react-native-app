import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from "react-redux";
import * as catchAction from '../redux/actions/catch.action';
import { capitalizeFirstLetter } from './methods/Upper';
import { Headline } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Pokedex = ({ route }) => {

    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
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
        id: details.id
    }

    return pokemonInfo.name ? (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Modal visible={modalOpen} transparent={true} animationType='fade'>
                <View style={styles.modalContent}>
                    <View style={styles.modalInner}>
                        <Image style={styles.gif} source={require('../assets/pokeball-gif.gif')} />
                        <Image style={styles.smallGif} source={require('../assets/pokeball-small-gif.gif')} />
                        <Text style={styles.modalText}>You've catched the Pokémon!</Text>
                        <MaterialCommunityIcons style={styles.modalToggle}
                            name='close'
                            size={40}
                            onPress={() => setModalOpen(false)}
                        />
                    </View>
                </View>
            </Modal>
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
            <Headline style={styles.catchText}>Catch!</Headline>
            <TouchableOpacity activeOpacity={0.5}
                onPress={() => {
                    setModalOpen(true);
                    dispatch(catchAction.Catch(pokemonInfo))
                    }
                }
            >
                <Image style={styles.catchGif} source={require('../assets/pokeball-small-gif.gif')} />
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
    catchText: {
        fontSize: 18,
        position: 'absolute',
        bottom:90,
        zIndex:999,
        fontWeight:'700',
    },
    modalContent: {
        backgroundColor: '#000000aa',
        flex: 1,
    },
    modalInner: {
        backgroundColor: '#eee',
        margin: 50,
        marginVertical: 200,
        padding: 10,
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
    catchGif: {
        width: 300,
        height: 300,
        top:-70,
    },
    gif: {
        width: 300,
        height: 200,
        opacity: 0.2,
    },
    smallGif: {
        width: 40,
        height: 40,
        position: 'absolute',
        left: 10,
        top: 10,
    }
});