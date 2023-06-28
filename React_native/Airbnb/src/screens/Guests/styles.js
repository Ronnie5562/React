import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        width: 40,
        height: 40,
        borderRadius: 20,
        color: '#000',
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    }
});

export default styles;