import React from "react";
import {
    Text,
    View, 
    Pressable,
    StyleSheet, 
} 
from "react-native";

const Header = (props) =>{
    return (
        <View
            style={styles.view}
        >
            <Text style={styles.text}>
                React Native Tutorial
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 50,
        backgroundColor: '#00f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#ffffff',
        fontSize: 25,
        margin: 10,
        textAlign: 'center',
    }
})

export default Header;