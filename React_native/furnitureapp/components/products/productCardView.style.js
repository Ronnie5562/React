import { StyleSheet } from 'react-native';
import {  COLORS, SIZES } from '../../constants';


const styles = StyleSheet.create({
    container: {
        width: 162,
        height: 220,
        marginEnd: 15,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.secondary
    },
    imageContainer: {
        flex: 1,
        width: 150,
        marginLeft: SIZES.small / 2,
        marginTop: SIZES.small / 2,
        borderRadius: SIZES.small,
        overflow: "hidden",
    },
    image: {
        aspectRatio: 1,
        resizeMode: 'cover',
    },
    details: {
        padding: SIZES.small
    },
    title: {
        fontFamily: "bold",
        fontSize: SIZES.large,
        marginBottom: 2
    },
    suppier: {
        fontFamily: "regular",
        fontSize: SIZES.small,
        color: COLORS.gray
    },
    price: {
        fontFamily: "semibold",
        fontSize: SIZES.medium,
    },
    addBtn: {
        position: "absolute",
        bottom: SIZES.xSmall,
        right: SIZES.xSmall
    }
})

export default styles;