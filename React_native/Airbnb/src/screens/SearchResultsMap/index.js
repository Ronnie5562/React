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

    const flatlist = useRef();
    const width = useWindowDimensions().width;
    const mapRef = useRef();
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });
    const onViewChanged = useRef(({ viewableItems }) => {
        // console.log(viewableItems)
        if (viewableItems.length > 0){
            const selectedPlace = viewableItems[0].item
            setSelectedPlaceId(selectedPlace.id)
        }
    })

    useEffect(() => {
        if (!selectedPlaceId || !flatlist){
            return;
        }
        const index = places.findIndex(place => place.id === selectedPlaceId)
        flatlist.current.scrollToIndex({index})
        const selectedPlace = places[index];

        const region = {
            latitude: selectedPlace.coordinate.latitude,
            longitude: selectedPlace.coordinate.longitude,
            latitudeDelta: 0.8, // how zoomed in we should be
            longitudeDelta: 0.8 // how zoomed in we should be
        }

        mapRef.current.animateToRegion(region);
    }, [selectedPlaceId])

    return(
        <View style={styles.container}>
            <MapView
                ref={mapRef}
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
                    snapToInterval={width - 50}
                    snapToAlignment={"center"}
                    decelerationRate={"fast"}
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChanged.current}
                />
            </View>
        </View>
    )
};

export default SearchResultsMap;