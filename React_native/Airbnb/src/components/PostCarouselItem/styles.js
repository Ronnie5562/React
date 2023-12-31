import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 120,
        padding: 3,

        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.22,
        shadowRadius: 9.22,
        elevation: 12
    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        aspectRatio: 1 / 1,
        resizeMode: 'cover',
    },
    bedrooms: {
        marginVertical: 10,
        color: '#5b5b5b'
    },
    description: {
        fontSize: 14,
        color: '#000'
    },
    prices: {
        fontSize: 15,
        color: '#000',
        marginVertical: 8,
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },
    price:{
        fontWeight: '800',
        color: '#000',
    },
    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline'
    },
});

export default styles;