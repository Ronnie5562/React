import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS } from '../../constants';

const Carousel = () => {
    const slides = [
        'https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_640.jpg',
        'https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_640.jpg',
        'https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_640.jpg',
        'https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183_640.jpg',
        'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_640.jpg',
        'https://cdn.pixabay.com/photo/2018/07/11/06/03/interior-3530343_640.jpg'
    ]

  return (
    <View style={styles.carouselcontainer}>
        <SliderBox
            images={slides}
            dotColor={COLORS.primary}
            inactiveDotColor={COLORS.secondary}
            ImageComponentStyle={{borderRadius: 15, width: "93%", marginTop: 8, height: 150}}
            autoplay
            circleLoop
        />
    </View>
  )
}

export default Carousel;

const styles = StyleSheet.create({
    carouselcontainer: {
        flex: 1,
        alignItems: "center"
    }
})