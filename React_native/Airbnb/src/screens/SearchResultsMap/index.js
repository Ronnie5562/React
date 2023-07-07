import React, { useEffect, useRef, useState } from 'react';
import places from '../../../assets/data/feed';
import { View, StyleSheet, Text, FlatList, useWindowDimensions } from 'react-native';
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

    const width = useWindowDimensions().width;
    const flatlist = useRef();
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);

    useEffect(() => {
        if (!selectedPlaceId || !flatlist){
            return;
        }
        const index = places.findIndex(place => place.id === selectedPlaceId)
        flatlist.current.scrollToIndex({index})
    }, [selectedPlaceId])

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
                bottom: 28,
            }}>
                <FlatList
                    ref={flatlist} 
                    data={places}
                    renderItem={({ item }) => <PostCarouselItem post={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width - 60}
                    snapToAlignment={"center"}
                    decelerationRate={"fast"}
                    onViewableItemsChanged={({viewableItems}) => {
                        console.log(viewableItems)
                    }}
                />
            </View>
        </View>
    )
};

export default SearchResultsMap;