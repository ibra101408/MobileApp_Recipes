import {colors} from "../../utils/colors"
import {StyleSheet} from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6eb79b',
    },
    imageContainer:{

        flex: 1, // Ensure the SafeAreaView takes up the entire screen
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
});