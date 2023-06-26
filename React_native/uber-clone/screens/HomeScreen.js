import tw from 'twrnc';
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
            <Image
                style={{
                    width: 90, height: 90, resizeMode: 'contain',
                }}
                source={require("../assets/logo.png")}
            />
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: '#0000ff',
    }
})