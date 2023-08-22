import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import styles from './productDetails.style';
import { COLORS } from '../constants';

const ProductDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.upperRow}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Ionicons name='chevron-back-circle' size={30} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {}}
            >
                <Ionicons name='heart' size={30} color={COLORS.primary} />
            </TouchableOpacity>
        </View>

        <Image
            source={{ uri: 'https://cdn.pixabay.com/photo/2018/07/11/06/03/interior-3530343_640.jpg'}}
            style={styles.image}
        />

        <View style={styles.details}>
            <View style={styles.titleRow}>
                <Text style={styles.title}>Product</Text>
                <View style={styles.priceWrapper}>
                    <Text style={styles.price}>$ 1000 </Text>
                </View>
            </View>

            <View></View>
        </View>
    </View>
  )
}

export default ProductDetails;