import React from 'react';
import styles from './search.style';
import { COLORS, SIZES } from '../constants';
import { Feather, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, View, TextInput } from 'react-native';

const Search = () => {
  return (
    <SafeAreaView>
      <View style={styles.searchcontainer}>
        <TouchableOpacity>
          <Ionicons name="camera-outline" size={SIZES.xLarge} style={styles.searchIcon} />
        </TouchableOpacity>

        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            onPressIn={() => {  }}
            placeholder='What are you looking for?'
          />
        </View>

        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Feather name="search" size={24} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Search;