import React from 'react';
import styles from './styles';
import { View, Text, Image, useWindowDimensions} from 'react-native';

const PostCarouselItem = (props) => {
  const post = props.post;
  const width = useWindowDimensions().width;
  return (
    <View style={[styles.container, {width: width - 50}]}>
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
    </View>
  )
}

export default PostCarouselItem;