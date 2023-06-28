import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DestinationSearchScreen from '../screens/DestinationSearch'
import GuestsScreen from '../screens/Guests'

const Router = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name={"DestinationSearchScreen"}
                    component={DestinationSearchScreen}
                    options={{
                        title: 'Search your destination'
                    }}
                />
                <Stack.Screen 
                    name={"GuestsScreen"}
                    component={GuestsScreen}
                    options={{
                        title: 'How many people ?'
                    }}
                />
            </Stack.Navigator>        
        </NavigationContainer>
    )
}

export default Router;