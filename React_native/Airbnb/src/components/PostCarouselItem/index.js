import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const PostCarouselItem = (props) => {
  const post = props.post;
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image 
          style={styles.image} 
          source={{ 
            uri: post.image
          }} 
        />

        <View>
          <Text style={styles.bedrooms}>{post.bed} bed(s) {post.bedroom} bedroom(s)</Text>
          <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>
          <Text style={styles.prices}>
            <Text style={styles.oldPrice}>${post.oldPrice}</Text>
            <Text style={styles.price}> ${post.newPrice} </Text>
            <Text>/ night</Text>
          </Text>
          <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
        </View>
      </View>
    </View>
  )
}

export default PostCarouselItem;