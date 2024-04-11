import {colors} from "../../../../utils/colors"
import {StyleSheet} from "react-native";


export const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
    },

    label: {
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 20,
    },

    ingredientLine: {
        fontSize: 18,
        marginTop: 5,
    },

    text: {
        fontSize: 16,
        color: '#555',
    },

    button: {
        backgroundColor: colors.darkGreen,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
        marginTop: 20,
        alignItems: 'center',
    },

    buttonSource: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },

    detailTextContainer: {
        paddingHorizontal: 20,
        borderRadius: 40,
        marginTop: -90,
        backgroundColor: colors.white,
    },

    closeBtnContainer: {
        bottom: 250,
        left: 10,
    },

    closeBtn: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: 'rgba(255,255,255,0.56)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    tagContainer: {
        marginLeft: 29,
        marginTop: 10,
    },

    ingredientContainer: {
        flexDirection: 'row', // Ensure each ingredient is on a new line
        alignItems: 'center', // Align items vertically
    },

    tagsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: 'left',
    },

    tagText: {
        color: colors.black,
        fontWeight: '400',
        fontSize: 22,
        backgroundColor: colors.lightGreen,
        lineHeight: 38,
        paddingHorizontal: 10,
        marginRight: 'auto', // Align the text to the right
    },

    triangle: {
        position: 'absolute',
        left: -19,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderTopWidth: 19,
        borderBottomWidth: 19,
        borderRightWidth: 19,
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor:  colors.lightGreen,
        flex: 10, // Added this line to allow the triangle to grow and shrink
    },

    circle: {
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 50,
        width: 4,
        height: 4,
        left: -9,
        top: 17,
    },
});