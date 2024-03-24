import {colors} from "../../../../utils/colors"
import {StyleSheet} from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    label: {
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 20,

    },
    ingredientsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
    ingredientLine: {
        fontSize: 16,
        marginTop: 5,
    },
    text: {
        fontSize: 16,
        color: '#555',
    },
    button: {
        backgroundColor: '#E2443B',
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
    detailTextContainer:{
        paddingHorizontal: 20,
        top: 240,
        width: '100%',
        position: 'absolute',
        borderRadius: 40,
        backgroundColor: colors.white,
    },
    closeBtnContainer: {
        bottom: 250,
        left: 10,

    },
    closeBtn: {
        width: 50, // Adjust size as needed
        height: 50, // Adjust size as needed
        borderRadius: 30, // Half of width/height to make it a circle
        backgroundColor: 'rgba(255,255,255,0.56)', // Example background color
        justifyContent: 'center',
        alignItems: 'center',
    },

    tagContainer: {
        backgroundColor: 'red',
        borderRadius: 4,
        borderLeftWidth: 1,
        borderLeftColor: '#6ab070',
        marginLeft: 19,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', // Align columns with space between

        alignItems: 'center',
        paddingHorizontal: 0,
        height: 38,
        position: 'relative',
        marginTop: 10,
        gridGap: 45, // Adjust the gap between grid items

    },
    col: {
        display: 'grid',
        gridTemplateColumns: 'auto auto', // Two columns with equal width
        gridGap: 45, // Adjust the gap between grid items
        alignItems: 'left',

    },
    col2: {
        display: 'grid',
        gridTemplateColumns: 'auto auto', // Two columns with equal width
        gridGap: 45, // Adjust the gap between grid items
        alignItems: 'right',

    },
    tagText: {
        color: 'white',
        fontWeight: '300',
        fontSize: 22,
        backgroundColor: '#6ab070',
        lineHeight: 38,
        paddingHorizontal: 10,
        width: 'auto',
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
        borderRightColor: '#6ab070',
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