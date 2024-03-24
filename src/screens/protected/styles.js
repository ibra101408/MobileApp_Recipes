import {Platform, StyleSheet} from "react-native";
import {colors} from "../../utils/colors"

const shadowStyle = Platform.select({
    ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    android: {
        elevation: 3,
    },
});
export const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    title: {
        fontSize: 14,
        textAlign: 'left',
        color: colors.gray,
        marginTop: 20,
        marginBottom: 20,
    },

    scrollView: {
        padding: 16,
    },

    container2: {
    },
    recipeContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'column',
        margin: 5,
        padding: 0,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        // Add shadow style here
        ...shadowStyle,
    },
    recipeImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
        borderBottomLeftRadius: 0, // Set bottom left border radius to 0
        borderBottomRightRadius: 0, // Set bottom right border radius to 0
    },
    recipeTitle: {
        marginTop: 5,
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },

    selectButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.gray,
    },

    selectedButton: {
        backgroundColor: colors.lightGreen,
        borderColor: colors.gray,
    },

    buttonText: {
        color: colors.black,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: colors.darkGreen,
        borderRadius: 20,
        padding: 10,
        borderColor: colors.lightGreen,
        borderWidth: 1,
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        width: 200,
        marginRight: 'auto',
        marginLeft: 'auto',
        overflow: 'hidden',
    },
    backBtnContainer: {
        top: 10,
        left: 10,
    },
    backBtn: {
        width: 30, // Adjust size as needed
        height: 30, // Adjust size as needed
        borderRadius: 30, // Half of width/height to make it a circle
        backgroundColor: 'rgba(175,175,175,0.56)', // Example background color
        justifyContent: 'center',
        alignItems: 'center',
    },

    resultContainer: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },

    buttonSource: {
        color: colors.white,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    filterText: {
        margin: 10
    },


});
