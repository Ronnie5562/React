import React from 'react';
import { COLORS } from '../../constants';
import styles from './productCardView.style';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, Image } from 'react-native';

const ProductCardView = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("ProductDetails")}
        >
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://cdn.pixabay.com/photo/2018/07/11/06/03/interior-3530343_640.jpg' }}
                        style={styles.image}
                    />
                </View>

                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>Product</Text>
                    <Text style={styles.suppier} numberOfLines={1}>Product</Text>
                    <Text style={styles.price}>$2353</Text>
                </View>
                <TouchableOpacity style={styles.addBtn}>
                    <Ionicons name='add-circle' size={35} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCardView;