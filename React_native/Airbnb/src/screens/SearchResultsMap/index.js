import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

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

const SearchResultsMap = () => (
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
            <Marker
                coordinate={{latitude: 28.3279822, longitude: -16.5124847}}
                title={'house'}
                description={'house desc'}
            >
                <View style={{
                    backgroundColor: 'white', 
                    padding: 2,
                    borderWidth: 2,
                    borderRadius: 15,
                    borderColor: 'grey',
                }}>
                    <Text style={{color: '#000', fontWeight: 'bold'}}>$300</Text>
                </View>
            </Marker>
        </MapView>
    </View>
);

export default SearchResultsMap;