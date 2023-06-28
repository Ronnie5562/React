import React from 'react'
import { Text, View, FlatList } from 'react-native'
import Post from '../../components/Post'
import feed from '../../../assets/data/feed'

const SearchResultsScreen = (props) => {
    return (
      <View>
        <FlatList 
            data={feed}
            renderItem={({item}) => <Post post={item} />}
            keyExtractor={(item) => item.id}
        />
      </View>
    )
}

export default SearchResultsScreen;
