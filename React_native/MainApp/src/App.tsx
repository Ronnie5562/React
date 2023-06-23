import {
    StyleSheet,
    View,
    Text,
    Pressable,
} from 'react-native';
import Screen_A from './Screen_A';
import Screen_B from './Screen_B';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name='Screen_A'
                    component={Screen_A}
                />
                <Tab.Screen
                    name='Screen_B'
                    component={Screen_B}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
        color: '#000',
    }
})

export default App;