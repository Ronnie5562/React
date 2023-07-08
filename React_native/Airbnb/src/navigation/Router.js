import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DestinationSearchScreen from '../screens/DestinationSearch'
import GuestsScreen from '../screens/Guests'
import HomeTabNavigator from './HomeTabNavigator'
import PostScreen from '../screens/PostScreen'

const Router = ({navigation}) => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name={"HomeTabNavigator"}
                    component={HomeTabNavigator}
                    options={{
                        title: 'Home Screeen',
                        headerShown: false,
                    }}
                />
                <Stack.Screen 
                    name={"DestinationSearchScreen"}
                    component={DestinationSearchScreen}
                    options={{
                        title: 'Search your destination',
                    }}
                />
                <Stack.Screen 
                    name={"GuestsScreen"}
                    component={GuestsScreen}
                    options={{
                        title: 'How many people ?'
                    }}
                />
                <Stack.Screen 
                    name={"Post"}
                    component={PostScreen}
                    options={{
                        title: 'Accomodation'
                    }}
                />
            </Stack.Navigator>        
        </NavigationContainer>
    )
}

export default Router;