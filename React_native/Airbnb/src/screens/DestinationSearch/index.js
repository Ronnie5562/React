import React, { useState } from 'react'
import styles from './styles'
import { View, Text, TextInput, FlatList } from 'react-native'
import SearchResults from '../../../assets/data/search'
import Entypo from 'react-native-vector-icons/Entypo';

const DestinationSearchScreen = () => {
    const [inputText, setInputText] = useState("")

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
                <View style={styles.row}>
                    <View style={styles.iconContainer}>
                        <Entypo 
                            name={"location-pin"}
                            size={30}
                            color={'#000'}
                        />
                    </View>
                    <Text style={styles.locationText}>{item.description}</Text>
                </View>
            )}
        />
    </View>
  )
}

export default DestinationSearchScreen;