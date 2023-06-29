import styles from './styles';
import React, { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import SearchResults from '../../../assets/data/search';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, FlatList, Pressable } from 'react-native';

const DestinationSearchScreen = () => {
    const [inputText, setInputText] = useState("")
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <TextInput 
            style={styles.textInput}
            placeholder='Where do you need a house?'
            value={inputText}
            onChangeText={setInputText}
        />

        <FlatList 
            data={SearchResults}
            renderItem={({item}) => (
                <Pressable style={styles.row} onPress={() => navigation.navigate('GuestsScreen')}>
                    <View style={styles.iconContainer}>
                        <Entypo 
                            name={"location-pin"}
                            size={30}
                            color={'#000'}
                        />
                    </View>
                    <Text style={styles.locationText}>{item.description}</Text>
                </Pressable>
            )}
        />
    </View>
  )
}

export default DestinationSearchScreen;