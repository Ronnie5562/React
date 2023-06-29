import React from 'react';
import HomeScreen from '../screens/Home';
import { Text, View } from 'react-native';
import SearchResultsScreen from '../screens/SearchResults';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchResultsTabNavigator from './SearchResultsTabNavigator';
const Router = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={"Welcome"}
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen 
                name={"SearchResults"}
                component={SearchResultsTabNavigator}
                options={{
                    title: 'Seacrch for your destination'
                }}
            />

        </Stack.Navigator>
    )
}

export default Router;