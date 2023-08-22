import React from 'react';
import { SIZES } from '../../constants';
import styles from "./productRow.style";
import ProductCardView from './ProductCardView';
import { FlatList ,Text, View } from 'react-native';

const ProductRow = () => {
    const products = [1,2,3,4]
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={products}
                renderItem={({ item }) => (<ProductCardView />)}
                contentContainerStyle={{ columnGap: SIZES.medium }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default ProductRow;