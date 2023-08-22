import React from 'react';
import styles from './headings.style';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../../constants';

const Headings = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}> New Rivals</Text>
                <TouchableOpacity>
                    <Ionicons name='ios-grid' size={24} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Headings
