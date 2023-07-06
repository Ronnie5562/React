import React from 'react';
import { View, Text } from 'react-native';
import { Marker } from 'react-native-maps';


const CustomMarker = (props) => {
    const { coordinate, price, onPress, isSelected } = props;
    return (
        <Marker
            coordinate={coordinate}
            title={'house'}
            description={'house desc'}
            onPress={onPress}
        >
            <View style={{
                backgroundColor: isSelected ? 'black' : 'white',
                padding: 4,
                borderWidth: isSelected ? 2 : 1,
                borderRadius: 15,
                borderColor: isSelected ? 'white' : 'black',
            }}>
                <Text style={{ 
                    color: isSelected ? 'white' : 'black', 
                    fontWeight: isSelected ? '900' : 'bold' 
                }}>
                    ${price}
                </Text>
            </View>
        </Marker>
    )
}

export default CustomMarker;