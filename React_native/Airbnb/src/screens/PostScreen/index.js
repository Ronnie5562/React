import { View, Text } from 'react-native'
import React from 'react'
import DetailedPost from '../../components/DetailedPost'
import places from '../../../assets/data/feed'
import { useRoute } from '@react-navigation/native'

const PostScreen = () => {
    const route = useRoute()
    console.log(route.params)
    const post = places.find(place => place.id === route.params.postId)
    return (
        <View style={{backgroundColor: 'white'}}>
            <DetailedPost post={post} />
        </View>
    )
}

export default PostScreen;