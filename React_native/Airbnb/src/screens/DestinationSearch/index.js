import styles from './styles';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';

const DestinationSearchScreen = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={{height: 500, color: '#000', width: '100%'}}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details)
                    navigation.navigate('GuestsScreen')
                }}
                fetchDetails
                styles={{
                    textInput: styles.textInput,
                }}
                query={{
                    key: 'AIzaSyAnZA_CnbW6V4sB7OvZ9P6spiAZAYTKh7w',
                    language: 'en',
                    type: '(cities)'
                }}
                suppressDefaultStyles
                renderRow={(item) => <SuggestionRow item={item} />}
            />
        </View>

        {/* <FlatList 
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
        /> */}
    </View>
  )
}

export default DestinationSearchScreen;