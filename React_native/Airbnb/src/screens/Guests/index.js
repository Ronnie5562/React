import React, { useState } from 'react'
import styles from './styles'
import { Pressable, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const GuestsScreen = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const navigation = useNavigation();
  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
        <View>
            <View style={styles.row}>
                <View>
                    <Text style={{fontWeight: 'bold', color: '#000', fontSize: 18}}>Adults</Text>
                    <Text style={{color: '#8d8d8d', fontSize: 15}}>Ages 13 or above</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Pressable 
                        onPress={() => setAdults(prev => Math.max(0, prev - 1))}
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
                        <Text style={{ 
                            marginHorizontal: 18, 
                            color: '#000',
                            fontSize: 19,
                            fontWeight: 'bold'
                        }}>
                        { adults }
                        </Text>
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
                </View>
            </View>
            <View style={styles.row}>
                <View>
                    <Text style={{fontWeight: 'bold', color: '#000', fontSize: 18}}>Children</Text>
                    <Text style={{color: '#8d8d8d', fontSize: 15}}>Ages 2-12</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Pressable 
                        onPress={() => setChildren(prev => Math.max(0, prev - 1))}
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
                        <Text style={{ 
                            marginHorizontal: 18, 
                            color: '#000',
                            fontSize: 19,
                            fontWeight: 'bold'
                        }}>
                        { children }
                        </Text>
                    <Pressable 
                        onPress={() => setChildren(prev => prev + 1)}
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
                </View>
            </View>
            <View style={styles.row}>
                <View>
                    <Text style={{fontWeight: 'bold', color: '#000', fontSize: 18}}>Infants</Text>
                    <Text style={{color: '#8d8d8d', fontSize: 15}}>Under 2</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Pressable 
                        onPress={() => setInfants(prev => Math.max(0, prev - 1))}
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
                        <Text style={{ 
                            marginHorizontal: 18, 
                            color: '#000',
                            fontSize: 19,
                            fontWeight: 'bold'
                        }}>
                        { infants }
                        </Text>
                    <Pressable 
                        onPress={() => setInfants(prev => prev + 1)}
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
                </View>
            </View>
        </View>
        <Pressable
            onPress={() => navigation.navigate('Explore', {
                screen: 'SearchResults',
            })} 
            // onPress={() => navigation.navigate('Home', {
            //     screen: 'Explore',
            //     params: {
            //         screen: 'SearchResults'
            //     }
            // })} 
            style={{
                marginBottom: 20, 
                backgroundColor: '#f15454',
                alignItems: 'center',   
                justifyContent: 'center',
                height: 50,
                marginHorizontal: 20,
                borderRadius: 10
            }}
        >
            <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>Search</Text>
        </Pressable>
    </View>
  )
}

export default GuestsScreen;