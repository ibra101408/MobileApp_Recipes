import { Link, useNavigation } from "@react-navigation/native";
import { Button, SafeAreaView, Text, View } from "react-native"

export default function Test() {
    const navigation = useNavigation();

    const onProtectedPressed = () =>  {
        navigation.navigate('Protected')
    }

    return (
        <SafeAreaView>
            <Text>Welcome page</Text>

            <Button title="Protected" onPress={onProtectedPressed}/>

        </SafeAreaView>
    );
}