import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Pressable,
    Alert,
    ToastAndroid,
    Modal,
} from 'react-native';

const App = () => {

    const [name, SetName] = useState('');
    const [submitted, SetSubmitted] = useState(false);
    const [showWarning, SetshowWarning] = useState(false);
    const onPressHandler = () => {
        if (name.length > 3) {
            SetSubmitted(!submitted);
        } else {
            SetshowWarning(true);
        }
    }

    return (
        <View style={styles.body}>
            <Modal
                visible={showWarning}
                transparent
                onRequestClose={() =>
                    SetshowWarning(false)
                }
                animationType='slide'
                hardwareAccelerated
            >
                <View style={styles.centered_view}>
                    <View style={styles.warning_modal}>
                        <View style={styles.warning_title}>
                            <Text style={styles.text}>WARNING!</Text>
                        </View>
                        <View style={styles.warning_body}>
                            <Text style={styles.text}>The name must be longer than 3 charachters</Text>
                        </View>
                        <Pressable
                            onPress={() => SetshowWarning(false)}
                            style={styles.warning_button}
                            android_ripple={{ color: '#fff' }}
                        >
                            <Text style={styles.text}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Text style={styles.text}>
                Please write your name:
            </Text>
            <TextInput
                style={styles.input}
                placeholder='e.g. John'
                onChangeText={(value) => SetName(value)}
            />
            <Pressable
                onPress={onPressHandler}
                hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                android_ripple={{ color: '#00f' }}
                style={({ pressed }) => [
                    { backgroundColor: pressed ? '#dddddd' : '#00ff00' },
                    styles.button
                ]}
            >
                <Text style={styles.text}>
                    {submitted ? 'Clear' : 'Submit'}
                </Text>
            </Pressable>
            {
                submitted ?
                    <Text style={styles.text}>
                        You are registered as {name}
                    </Text>
                    :
                    null
            }
        </View >
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    text: {
        color: '#000000',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    },
    input: {
        width: 200,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    },
    button: {
        width: 150,
        height: 50,
        alignItems: 'center',
    },
    centered_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099'
    },
    warning_modal: {
        width: 300,
        height: 300,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20,
    },
    warning_title: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff0',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    warning_body: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    warning_button: {
        backgroundColor: '#00ffff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    }
});

export default App;