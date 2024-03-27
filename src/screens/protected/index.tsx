import React from 'react';
import {SafeAreaView, Text, Button, Image, View, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useAuthenticator, withAuthenticator} from '@aws-amplify/ui-react-native';
import {styles} from "../welcome/styles.js";

function Protected() {
    const navigation = useNavigation(); // Get the navigation object
    const {user, signOut} = useAuthenticator((context) => [context.user]);

    async function handleAPI() {
        try {
            navigation.navigate('API');
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    async function handleSignOut() {
        try {
            signOut();
            navigation.navigate('welcome');
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image style={styles.logo} source={require('../../assets/logo3.jpeg')} />
            </View>
            {user ? (
                <>
                    <Text style={styles.title}>Main Menu</Text>
                    <Text style={styles.welcomeUser}>Hello, {user.username}</Text>
                    <TouchableOpacity onPress={handleAPI} style={styles.button}>
                        <Text style={styles.buttonText}>Go to recipe API</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSignOut} style={[styles.button, styles.buttonSignOut]}>
                        <Text style={styles.buttonText}>Sign Out</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <Text>Please log in to view this content.</Text>
            )}
        </SafeAreaView>
    );
}

export default withAuthenticator(Protected);