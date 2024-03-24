import {Link, useNavigation} from "@react-navigation/native";
import {Button, Image, SafeAreaView, Text, View} from "react-native"
import {styles} from "./styles.js";

export default function Test() {
    const navigation = useNavigation();

    const onProtectedPressed = () => {
        navigation.navigate('Protected')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>Welcome page</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.logo} source={require('../../assets/logo3.jpeg')} />
            </View>
            <Button title="Protected" onPress={onProtectedPressed}/>

        </SafeAreaView>
    );
}