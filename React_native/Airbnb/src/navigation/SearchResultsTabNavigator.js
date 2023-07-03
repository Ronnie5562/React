import React from 'react'
import SearchResultsScreen from '../screens/SearchResults';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResultsMap from '../screens/SearchResultsMap';

const SearchResultsTabNavigator = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#f15454',
                tabBarIndicatorStyle: {
                    backgroundColor: '#f15454'
                }
            }}
        >
            <Tab.Screen 
                name={"list"}
                component={SearchResultsScreen}
            />
            <Tab.Screen 
                name={"map"}
                component={SearchResultsMap}
            />
        </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator