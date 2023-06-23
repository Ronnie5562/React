/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Pressable,
    Alert,
    ToastAndroid,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
    title: string;
}>;

const App = () => {
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const onPressHandler = () => {
        if (name.length > 3){
            setSubmitted(!submitted);
        } else {
            // Alert.alert('Warning', 'Your username must be more than 3 characters!', [
            //     { 
            //         text: 'Do not show again', 
            //         onPress: () => console.warn('first btn pressed')
            //     },
            //     { 
            //         text: 'Cancel', 
            //         onPress: () => console.warn('second btn pressed')
            //     },
            //     { 
            //         text: 'OK', 
            //         onPress: () => console.warn('third btn pressed')
            //     },
            // ])
            // ToastAndroid.show(
            //     'Your username must be more than 3 characters!', 
            //     ToastAndroid.LONG
            // )
        }
    }
   
    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Please what is your name:
            </Text>
            <TextInput
                style={styles.input}
                placeholder='e.g Ronald'
                onChangeText={(value) => setName(value)}
                // keyboardType='numeric'
                // maxLength={4}
                // secureTextEntry
            />
            {/* <TouchableOpacity
                style={styles.button}
                onPress={onPressHandler}
                activeOpacity={0.6}
            >
                <Text style={styles.text}>
                    {submitted ? 'Clear' : 'Submit'}
                </Text>
            </TouchableOpacity> */}
            
            <TouchableHighlight
            // This tag changes teh color of its eement automatically when click.
            // The dafault is black but we can change it to aything we want using { underlayColor }
                style={styles.button}
                onPress={onPressHandler}
                activeOpacity={0.6}
                underlayColor={'#dddddd'}
            >
                <Text style={styles.text}>
                    {submitted ? 'Clear' : 'Submit'}
                </Text>
            </TouchableHighlight>

            <Pressable
                style={styles.button}
                onPress={onPressHandler}
                hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                android_ripple={{ color: '#50f'}}
            >
                <Text style={styles.text}>
                    {submitted ? 'Clear' : 'Submit'}
                </Text>
            </Pressable>
            {
                submitted 
                ?
                <Text style={styles.text}>
                    You registered as: { name }
                </Text>
                :
                null
            }
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        color: '#fff',
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    text: {
        color: '#000000',
        fontWeight: '900',
        fontSize: 25,
        margin: 10,
    },
    item: {
        backgroundColor: '#46f1ff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    input: {
        width: 200,
        borderWidth: 1,
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#ff1267',
        height: 50,
        width: 150,
        alignItems: 'center',
        borderRadius: 7,
    }
});

export default App;