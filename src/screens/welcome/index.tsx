import {Link, useNavigation} from "@react-navigation/native";
import {Button, Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native"
import {styles} from "./styles.js";
import React from "react";

export default function Test() {
    const navigation = useNavigation();

    const onProtectedPressed = () => {
        navigation.navigate('Protected')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image style={styles.logo} source={require('../../assets/logo3.jpeg')} />
            </View>
            <Text style={styles.title}>Welcome To Recipe Book</Text>
            <TouchableOpacity onPress={onProtectedPressed} style={styles.button}>
                <Text style={styles.buttonText}>Go To Menu</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}