import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';

const Post = (props) => {
  const post = props.post;
  return (
    <ScrollView>
      <View style={styles.container}>
          <Image 
              style={styles.image} 
              source={{ 
                  uri: post.image
              }} 
          />
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

            <Text style={styles.longDescription}>
              {post.description}
            </Text>
      </View>
    </ScrollView>
  )
}

export default Post;