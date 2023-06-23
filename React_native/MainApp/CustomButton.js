import React from "react";
import {
    Text, 
    Pressable,
    StyleSheet 
} 
from "react-native";



const MashButton = (props) =>{
    return (
        <Pressable
            onPress={props.onPressFunction}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            android_ripple={{ color: '#00f' }}
            style={({ pressed }) => [
                { backgroundColor: pressed ? '#dddddd' : '#00ff00' },
                styles.button
            ]}
        >
            <Text style={styles.text}>
                { props.title }
            </Text>
        </Pressable>
        
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#000000',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    },
    button: {
        width: 150,
        height: 50,
        alignItems: 'center',
    },
})

export default MashButton;