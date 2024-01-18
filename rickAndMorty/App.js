import React from 'react';
import { Image } from 'react-native';
import HomePage from './src/components/Homepage/HomePage.js';
import FavoritePage from  './src/components/Homepage/FavoritePage.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from './src/store/Index';


const Tab = createBottomTabNavigator();

export default function App(){
    return(
        <Provider store={store}>
            <NavigationContainer >
                <Tab.Navigator 
                        
                    initialRouteName = 'h'
                    screenOptions = {({ route }) => ({
                        tabBarActiveTintColor: '#5e5e5e',
                        tabBarInactiveTintColor: 'black',
                        tabBarActiveBackgroundColor: '#5e5e5e',
                        tabBarInactiveBackgroundColor: 'black',
                        tabBarIcon: () => {
                            if (route.name === 'h') {
                                return( 
                                    <Image style = {{ width: 40, height: 40, marginTop: 10  }} source = {require('./src/assets/homePageIcon.png')} />
                    )}

                            else if (route.name === 'fav') {
                                return (
                                    <Image style = {{ width: 40, height: 40, marginTop: 10  }} source = {require('./src/assets/favPageIcon.png')} />
                    )}
                        },
                                    
                    })} 
                >
                    <Tab.Screen name = 'h' component = {HomePage} options = {{ headerShown: false }} />
                    <Tab.Screen  name = 'fav' component = {FavoritePage} options = {{ headerShown: false }} />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
};