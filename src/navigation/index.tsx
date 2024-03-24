import Welcome from "../screens/welcome";

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import _protected from "../screens/protected";
import API from "../screens/protected/screens/API.tsx";
import Favorite from "../screens/protected/screens/Favorite.tsx";
import {Image} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();


export default function Navigation() {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>

            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="welcome" component={Welcome}/>
                <Stack.Screen name="Protected" component={_protected}/>
                <Stack.Screen name="API" component={API}/>
                <Stack.Screen
                    name="Favorite"
                    component={Favorite}
                    options={{
                        headerShown: true,
                        headerTitle: () => (
                            <Image
                                source={require('../assets/book.svg')} // Replace 'favorite-icon.png' with your image path
                                style={{width: 30, height: 30}} // Adjust width and height as needed
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Favorites"
                    component={Favorite}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={require('../assets/book.svg')}
                                style={{ width: 30, height: 30, tintColor: focused ? 'blue' : 'gray' }}
                            />
                        ),
                    }}
                />
            </Stack.Navigator>
            {/* <Tab.Navigator>

            </Tab.Navigator>*/}

        </NavigationContainer>

    )
}


