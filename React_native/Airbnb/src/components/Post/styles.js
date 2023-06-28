import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    bedrooms: {
        marginVertical: 10,
        color: '#5b5b5b'
    },
    description: {
        fontSize: 18,
        lineHeight: 26,
        color: '#000'
    },
    prices: {
        fontSize: 18,
        color: '#000',
        marginVertical: 10,
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