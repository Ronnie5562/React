import React from 'react';
import styles from './styles';
import { View, Text, Image, useWindowDimensions, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PostCarouselItem = (props) => {
  const post = props.post;
  const width = useWindowDimensions().width;
  const navigation = useNavigation()

  const goToPostPage = () => {
    navigation.navigate('Post', { postId: post.id})
  }
  return (
    <Pressable onPress={goToPostPage} style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        <Image 
          style={styles.image} 
          source={{ 
            uri: post.image
          }} 
        />

        <View style={{flex: 1, marginHorizontal: 10}}>
          <Text style={styles.bedrooms}>{post.bed} bed(s) {post.bedroom} bedroom(s)</Text>
          <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>
          <Text style={styles.prices}>
            <Text style={styles.price}> ${post.newPrice} </Text>
            <Text>/ night</Text>
          </Text>
        </View>
      </View>
    </Pressable>
  )
}

export default PostCarouselItem;