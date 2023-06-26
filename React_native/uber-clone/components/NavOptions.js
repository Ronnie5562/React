import tw from 'twrnc';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: require("../assets/car.png"),
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order food",
        image: require("../assets/food.png"),
        screen: "EatScreen"
    }
]

const NavOptions = () => {
    const navigation = useNavigation();

  return (
    <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        style={tw`ml--3`}
        renderItem={({ item }) => (
            <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}
                style={[tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`, styles.nav]}
            >
                <View>
                    <Image
                        style={{ width: 120, height: 120, resizeMode: 'contain', alignItems: 'center'}} 
                        source={ item.image }
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{ item.title }</Text>

                </View>
                <Icon
                    type="antdesign" 
                    name="arrowright"
                    color="#fff"
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                />
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({
    nav: {
        borderRadius: 10
    }
})