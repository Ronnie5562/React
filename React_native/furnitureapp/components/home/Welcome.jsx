import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './welcome.style';
import { COLORS, SIZES } from '../../constants';
import { Feather, Ionicons } from "@expo/vector-icons"
import { TextInput } from 'react-native-gesture-handler';
const Welcome = () => {
  return (
    <View style={styles.container}>
        <View style={styles.container}>
            <Text
                style={styles.welcomeTxt(SIZES.xSmall ,COLORS.black)}
            >
                Find The Most
            </Text>
            <Text
                style={styles.welcomeTxt(0, COLORS.primary)}
            >
                Luxurious Furniture
            </Text>
        </View>

        <View style={styles.searchcontainer}>
            <TouchableOpacity>
                <Feather name="search" size={24} style={styles.searchIcon} />
            </TouchableOpacity>

            <View style={styles.searchWrapper}>
                <TextInput
                    style={styles.searchInput}
                    value=''
                    onPressIn={() => {}}
                    placeholder='What are you looking for?'
                />
            </View>

            <View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.lightWhite} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Welcome;