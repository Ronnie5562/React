const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: '100%',
        backgroundColor: 'white',
    },
    textInput: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 20,
        color: '#000',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: '#e7e7e7',
    },
    iconContainer: {
        backgroundColor: '#d4d4d4',
        padding: 10,
        borderRadius: 10,
        marginRight: 15,
        
    },
    locationText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default styles;