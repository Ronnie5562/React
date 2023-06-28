import React from 'react'
import styles from './styles'
import { 
  Text, 
  View, 
  ImageBackground, 
  Pressable 
} from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = () => {
  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn('Search')}
      >
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>
      <ImageBackground 
        source={require("../../../assets/images/wallpaper.jpg")} 
        style={styles.image} 
      >
        <Text style={styles.title}>
          GO Near
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore')}
        >
          <Text style={styles.buttonText}>Explore nearby places</Text>
        </Pressable>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen;