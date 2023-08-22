import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    upperRow: {
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        position: "absolute",
        top: SIZES.xxLarge,
        width: SIZES.width - 44,
        zIndex: 999,
    },
    image: {
        aspectRatio: 1,
        resizeMode: 'cover'
    },
    details: {
        marginTop: -SIZES.large,
        backgroundColor: COLORS.lightWhite,
        width: SIZES.width,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium,
    },
    titleRow: {
        marginHorizontal: 20,
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width - 44,
        top: 20,
    },
    title: {
        fontFamily: "bold",
        fontSize: SIZES.large
    },
    priceWrapper: {
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large
    },
    price: {
        padding: 7,
        fontFamily: "semibold",
        fontSize: SIZES.large
    },
})

export default styles;