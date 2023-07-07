import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import ExploreNavigator from '../navigation/ExploreNavigator'
import SearchResultsMap from '../screens/SearchResultsMap';
import PostScreen from '../screens/PostScreen';

const HomeTabNavigator = () => {

    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptionsOptions={{
                activeTintColor: '#f15454',
                tabBarLabel: ({ focused, color }) => {
                    // Access the color for the active tab and apply it to the text
                    const activeTabColor = focused ? color : 'gray';
                    return (
                        <Text style={{ color: activeTabColor }}>
                            {route.name} {/* Use the route name as the tab text */}
                        </Text>
                    );
                },
            }}
        >
            <Tab.Screen 
                name={"Explore"}
                component={ExploreNavigator}
                options={{
                    tabBarIcon: ({}) => (
                        <Fontisto name='search' size={30} color={'#f15454'} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name={"Saved"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({}) => (
                        <FontAwesome name='heart-o' size={30} color={'#f15454'} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name={"Kigali homes"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({}) => (
                        <FontAwesome5 name='home' size={30} color={'#f15454'} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name={"inbox"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({}) => (
                        <Feather name='message-square' size={30} color={'#f15454'} />
                    ),
                    headerShown: false,
                }}
            />
            {/* <Tab.Screen 
                name={"inbox"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({}) => (
                        <Feather name='message-square' size={30} color={'#f15454'} />
                    ),
                    headerShown: false,
                }}
            /> */}
            <Tab.Screen 
                name={"profile"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({}) => (
                        <EvilIcons  name='user' size={30} color={'#f15454'} />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeTabNavigator;