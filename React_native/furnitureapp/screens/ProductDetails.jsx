import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './productDetails.style';
import { COLORS, SIZES } from '../constants';
import { ScrollView } from 'react-native-gesture-handler';

const ProductDetails = ({ navigation }) => {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

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

            <View style={styles.ratingRow}>
                <View style={styles.rating}>
                    {
                        [1, 2, 3, 4, 5].map((index) => (
                            <Ionicons
                                key={index}
                                name={"star"}
                                color={"gold"}
                                size={24}
                            />
                        ))
                    }

                    <Text style={styles.ratingText}>  (4.9)</Text>
                </View>

                <View style={styles.rating}>
                    <TouchableOpacity
                        onPress={increment}
                    >
                        <SimpleLineIcons
                            name={"plus"}
                            size={20}
                        />
                    </TouchableOpacity>

                    <Text style={styles.ratingText}>  {count}  </Text>

                    <TouchableOpacity
                        onPress={decrement}
                    >
                        <SimpleLineIcons
                            name={"minus"}
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.descriptionWrapper}>
                <Text style={styles.description}>Description</Text>
                <Text style={styles.descText}>
                    Only a short distance from the centre of one of the most popular and vibrant cities in the world, lies an estate that's worlds away from any hustle and bustle. Situated on 567 acres of lush private parkland, lies a championship golf course that serves as the perfect getaway for a few hours of scenic escapism.
                </Text>
            </View>

            <View style={{marginBottom: SIZES.small}}>
                <View style={styles.location}>
                    <View style={{flexDirection: "row"}}>
                        <Ionicons
                            size={20}
                            name="location-outline"
                        />
                        <Text>  Kigali, Rwanda  </Text>
                    </View>

                    <View style={{flexDirection: "row"}}>
                        <MaterialCommunityIcons
                            size={20}
                            name="truck-delivery-outline"
                        />
                        <Text>  Free Delivery  </Text>
                    </View>
                </View>
            </View>

            <View style={styles.cartRow}>
                <TouchableOpacity
                    onPress={() => {}}
                    style={styles.cartBtn}
                >
                    <Text style={styles.cartTitle}>BUY NOW</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {}}
                    style={styles.addCart}
                >
                    <Fontisto
                        
                    />
                </TouchableOpacity>
              </View>
        </View>
    </View>
  )
}

export default ProductDetails;