import { View, Text } from 'react-native'
import React from 'react'
import DetailedPost from '../../components/DetailedPost'
import places from '../../../assets/data/feed'

const PostScreen = () => {
    const post = places[0]
    return (
        <View style={{backgroundColor: 'white'}}>
            <DetailedPost post={post} />
        </View>
    )
}

export default PostScreen