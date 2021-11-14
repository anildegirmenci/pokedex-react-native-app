import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { List, Switch } from 'react-native-paper';
import * as themeActions from "../redux/actions/theme.action";
import { useDispatch,useSelector } from "react-redux";

export default  ({ navigation }) => {
    const dispatch = useDispatch();
    const themeReducer = useSelector(({ themeReducer }) => themeReducer);

    return (

        <View style={{ flex: 1 }}>
            <Image style={styles.blackPokeball} source={require('../assets/pokeball-black.png')} />
            <List.Item
                title="Dark Mode"
                left={() => <List.Icon icon="brightness-4" />}
                right={() => <Switch value={themeReducer.theme} 
                onValueChange={(val)=>dispatch(themeActions.ToggleTheme(val))} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    blackPokeball: {
        width: 450,
        height: 450,
        position: 'absolute',
        top: 210,
        left: 40,
        opacity: 0.1
    },
});