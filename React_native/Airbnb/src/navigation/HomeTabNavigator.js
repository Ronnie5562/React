import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';

const HomeTabNavigator = () => {

    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#f15454'
            }}
        >
            <Tab.Screen 
                name={"Explore"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({}) => (
                        <Fontisto name='search' size={25} color={'#f15454'} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeTabNavigator;