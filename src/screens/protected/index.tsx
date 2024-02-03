import React from 'react';
import {SafeAreaView, Text, Button} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useAuthenticator, withAuthenticator} from '@aws-amplify/ui-react-native';

function Protected() {
    const navigation = useNavigation(); // Get the navigation object
    const {user, signOut} = useAuthenticator((context) => [context.user]);

    async function handleSignOut() {
        try {
            signOut();
            navigation.navigate('welcome');
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return (
        <SafeAreaView>
            {user ? (
                <>
                    <Text>This is protected screen</Text>
                    <Text>Logged in as: {user.username}</Text>
                    <Button title="Sign Out" onPress={handleSignOut}/>
                </>
            ) : (
                <Text>Please log in to view this content.</Text>
            )}
        </SafeAreaView>
    );
}

export default withAuthenticator(Protected);