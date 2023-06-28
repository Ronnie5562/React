import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 450,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        fontSize: 90,
        fontWeight: 'bold',
        color: '#ffffff',
        width: '70%',
        marginLeft: 25,
    },
    button: {
        backgroundColor: '#ffffff',
        height: 40,
        width: 220,
        matginTop: 25,
        marginLeft: 25,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    searchButton: {
        backgroundColor: '#ffffff',
        width: Dimensions.get('screen').width - 30,
        height: 60,
        marginHorizontal: 15,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 20,
        zIndex: 100,
    },
    searchButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
});

export default styles;