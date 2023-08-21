import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import { COLORS } from '../../constants';

const AnimatedText = Animated.createAnimatedComponent(Text);

const AnimatedTitle = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 6000, // Adjust the duration as needed
        useNativeDriver: true,
      })
    );
    animation.start();

    return () => {
      animation.stop();
    };
  }, [animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-110, 200], // Adjust the distance the text should move
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AnimatedText
        style={[
          styles.title('bold', 20, 0, COLORS.lightWhite),
          { transform: [{ translateX }] },
        ]}
      >
        All Products
      </AnimatedText>
    </View>
  );
};

const styles = {
  title: (fontWeight, fontSize, letterSpacing, color) => ({
    fontWeight,
    fontSize,
    letterSpacing,
    color,
  }),
};

export default AnimatedTitle;
