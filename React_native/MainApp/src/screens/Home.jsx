import {
    StyleSheet,
    View,
    Text,
    Pressable,
} from 'react-native';

const Screen_A = ({ navigation }) => {

    const onPressHandler = () => {
        navigation.navigate('Screen_B');
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                This is screen A
            </Text>
            <Pressable
                style={
                    ({ pressed }) => ({
                        backgroundColor: pressed ? '#ddd' : '#0f0',
                        borderRadius: 10
                    })

                }
                onPress={onPressHandler}
            >
                <Text style={styles.text}>
                    Go to S_B
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
        color: '#000',
    }
})

export default Screen_A;