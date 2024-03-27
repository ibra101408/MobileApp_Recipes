import {colors} from "../../utils/colors"
import {StyleSheet} from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    logo: {
        width: 250,
        height: 250,
        marginLeft: 'auto',
        marginRight: 'auto',
        resizeMode: 'contain',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.black,
    },

    welcomeUser: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.black,
        marginTop: 20,
    },

    button: {
        backgroundColor: colors.darkGreen,
        paddingHorizontal: 2,
        paddingVertical: 10,
        borderRadius: 30,
        marginTop: 20,
        alignItems: 'center',
        width: 200, // Fixed width
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    buttonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },

    buttonSignOut: {
        backgroundColor: colors.brown,
        paddingHorizontal: 2,
        paddingVertical: 10,
        borderRadius: 30,
        marginTop: 20,
        alignItems: 'center',
        width: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

});