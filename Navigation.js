import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inventory from './Components/Inventory'
import Settings from './Components/Settings';
import Favorites from './Components/Favorites';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme
} from '@react-navigation/native'
import {
    Provider as PaperProvider,
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import { useSelector } from "react-redux";
import {ListPokemonNavigator} from './CustomNavigation';


export default () => {

    const themeReducer = useSelector(({ themeReducer }) => themeReducer);
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer theme={themeReducer.theme ? DarkTheme : DefaultTheme}>
            <PaperProvider theme={themeReducer.theme ? PaperDarkTheme : PaperDefaultTheme}>
                <Tab.Navigator screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'List of Pokémons') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'theme-light-dark' : 'theme-light-dark';
                        }
                        else if (route.name === 'Inventory') {
                            iconName = focused ? 'bag-personal' : 'bag-personal';
                        }
                        else if (route.name === 'Favorites') {
                            iconName = focused ? 'star' : 'star';
                        }
                        return (
                            <MaterialCommunityIcons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                })} >
                    <Tab.Screen name="List of Pokémons" component={ListPokemonNavigator} />
                    <Tab.Screen name="Inventory" component={Inventory} />
                    <Tab.Screen name="Favorites" component={Favorites} />
                    <Tab.Screen name="Settings" component={Settings} />
                </Tab.Navigator>
            </PaperProvider>
        </NavigationContainer>
    );
}