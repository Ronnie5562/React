import React, { useState } from 'react';
import places from '../../../assets/data/feed';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

const SearchResultsMap = () => {

    const [selectedPlaceId, setSelectedPlaceId] = useState(null);

    return(
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: 28.3279822,
                    longitude: -16.5124847,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }}
            >
                {
                    places.map(place => ( 
                        <CustomMarker
                            key={place.id}
                            price={place.newPrice}
                            coordinate={place.coordinate}
                            isSelected={place.id == selectedPlaceId}
                            onPress={() => setSelectedPlaceId(place.id)}
                        />
                    ))
                }
            </MapView>

            <View style={{
                position: 'absolute',
                bottom: 10,
            }}>
                <PostCarouselItem 
                    post={places[2]}
                />
            </View>
        </View>
    )
};

export default SearchResultsMap;