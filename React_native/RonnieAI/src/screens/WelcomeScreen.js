import { 
    View, 
    Text, 
    SafeAreaView, 
    Image, 
    TouchableOpacity 
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const WelcomeScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView className="flex-1 flex justify-around bg-white">
            <View className="space-y-2">
                <Text style={{fontSize: wp(10)}} className="text-center font-bold text-black">
                    RonnieAI
                </Text>
                <Text style={{ fontSize: wp(4) }} className="text-center tracking-wider text-gray-700 font-semibold">
                    The Future is here, powered by AI.
                </Text>
            </View>
            <View className="flex-row justify-center">
                <Image
                    style={{width: wp(75), height: wp(75)}}
                    source={require('../../assets/images/welcome.gif')}
                />
            </View>
            <TouchableOpacity 
                className="bg-emerald-600 mx-5 p-4 rounded-2xl"
                onPress={() => navigation.navigate("Home")}
            >
                    <Text style={{ fontSize: wp(6) }} className="text-center font-bold text-white text-2xl">Get Started</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default WelcomeScreen;