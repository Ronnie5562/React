import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import React, { useState } from 'react';
import { dummyMessages } from '../constants';
import Features from '../components/features';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [recording, setRecording] = useState(false);
    const [speaking, setSpeaking] = useState(false);
    const [messages, setMessages] = useState(dummyMessages);

    const Clear = () => {
        setMessages([]);
    }

    const stopSpeaking = () => {
        setSpeaking(false);
    }

    return (
        <View className="flex-1 bg-white">
            <SafeAreaView className="flex-1 flex mx-5">
                <View className="flex-row justify-center">
                    <Image
                        style={{ height: hp(15), width: hp(15) }}
                        source={require('../../assets/images/bot.gif')}
                    />
                </View>

                {
                    messages.length > 0 ? (
                        <View className="space-y-2 flex-1">
                            <Text
                                className="text-gray-700 font-semibold ml-1"
                                style={{ fontSize: wp(5) }}
                            >
                                Assistant
                            </Text>
                            <View
                                className="bg-neutral-200 rounded-3xl p-4"
                                style={{ height: hp(58) }}
                            >
                                <ScrollView
                                    bounces={false}
                                    className="space-y-4"
                                    showsVerticalScrollIndicator={false}
                                >
                                    {
                                        messages.map((message, index) => {
                                            if (message.role == "assistant") {
                                                if (message.content.includes('https')) {
                                                    // its an AI image
                                                    return (
                                                        <View
                                                            key={index}
                                                            className="flex-row justify-start"
                                                        >
                                                            <View
                                                                className="p-2 flex bg-emerald-100 rounded-2xl rounded-tl-none"
                                                            >
                                                                <Image
                                                                    source={{ uri: message.content }}
                                                                    className="rounded-2xl"
                                                                    resizeMode='contain'
                                                                    style={{ height: wp(60), width: wp(60) }}
                                                                />
                                                            </View>
                                                        </View>
                                                    )
                                                } else {
                                                    // text response
                                                    return (
                                                        <View
                                                            key={index}
                                                            style={{ width: wp(70) }}
                                                            className="bg-emerald-100 rounded-xl p-2 rounded-tl-none"
                                                        >
                                                            <Text
                                                                className="text-black"
                                                            >
                                                                {message.content}
                                                            </Text>
                                                        </View>
                                                    )
                                                }
                                            } else {
                                                // user input
                                                return (
                                                    <View
                                                        key={index}
                                                        className="flex-row justify-end"
                                                    >
                                                        <View
                                                            style={{ width: wp(70) }}
                                                            className="bg-white rounded-xl p-2 rounded-tr-none"
                                                        >
                                                            <Text
                                                                className="text-black"
                                                            >
                                                                {message.content}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                )
                                            }
                                        })
                                    }
                                </ScrollView>
                            </View>
                        </View>
                    ) : (
                        <Features />
                    )
                }
                {/* {recording, clear, and stop buttons} */}

                <View
                    className="flex justify-center items-center"
                >
                    {
                        recording ? (
                            <TouchableOpacity>
                                <Image
                                    className="rounded-full"
                                    style={{ width: hp(10), height: hp(10) }}
                                    source={require('../../assets/images/voiceLoading.gif')}
                                />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity>
                                <Image
                                    className="rounded-full"
                                    style={{ width: hp(10), height: hp(10) }}
                                    source={require('../../assets/images/recordingIcon.png')}
                                />
                            </TouchableOpacity>
                        )
                    }

                    {
                        messages.length > 0 && (
                            <TouchableOpacity
                                onPress={Clear}
                                className="bg-neutral-400 rounded-3xl p-2 absolute right-10"
                            >
                                <Text
                                    className="text-white font-semibold"
                                >
                                    Clear
                                </Text>
                            </TouchableOpacity>
                        )
                    }

                    {
                        speaking && (
                            <TouchableOpacity
                                onPress={stopSpeaking}
                                className="bg-red-400 rounded-3xl p-2 absolute left-10"
                            >
                                <Text
                                    className="text-white font-semibold"
                                >
                                    Stop
                                </Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
            </SafeAreaView>
        </View>
    )
}

export default HomeScreen;