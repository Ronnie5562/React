import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Post = (props) => {
  const post = props.post;
  const navigation = useNavigation();

  const goToPostPage = () =>{
    navigation.navigate('Post', { postId: post.id})
  }

  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
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
    </Pressable>
  )
}

export default Post;