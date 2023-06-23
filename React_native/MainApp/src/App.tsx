import {
    StyleSheet,
    View,
    Text,
    Pressable,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen_A from './Screen_A';
import Screen_B from './Screen_B';

const Stack = createStackNavigator();
const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                // screenOptions={{
                //     header: () => null
                // }}
            >
                <Stack.Screen 
                   name='Screen_A'
                   component={ Screen_A }
                   options={{
                    header: () => null
                   }}
                />
                <Stack.Screen 
                   name='Screen_B'
                   component={ Screen_B }
                    options={{
                        header: () => null
                    }} 
                />
            </Stack.Navigator>
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