import React, { useState } from 'react'
import styles from './styles'
import { Pressable, Text, View } from 'react-native'

const GuestsScreen = () => {
    const [adults, setAdults] = useState(0);
  return (
    <View>
        <View style={{
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            padding: 20,
            marginHorizontal: 20,
            borderBottomWidth: 1,
            borderColor: 'lightgrey',
        }}>
            <View>
                <Text style={{fontWeight: 'bold', color: '#000', fontSize: 18}}>Adults</Text>
                <Text style={{color: '#8d8d8d', fontSize: 15}}>Ages 13 or above</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Pressable 
                    onPress={() => setAdults(prev => prev + 1)}
                    style={styles.button}
                >
                    <Text style={{ 
                        color: '#000', 
                        fontSize: 18, 
                        fontWeight: 'bold' 
                    }}>
                        +
                    </Text>
                </Pressable>
                    <Text style={{ 
                        marginHorizontal: 18, 
                        color: '#000',
                        fontSize: 19,
                        fontWeight: 'bold'
                    }}>
                      { adults }
                    </Text>
                <Pressable 
                    onPress={() => setAdults(prev => prev - 1)}
                    style={styles.button}
                >
                    <Text style={{
                        color: '#000',
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>
                        -
                    </Text>
                </Pressable>
            </View>
        </View>
    </View>
  )
}

export default GuestsScreen;