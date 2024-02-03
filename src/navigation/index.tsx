import Welcome from "../screens/welcome";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import _protected from "../screens/protected";
const Stack = createNativeStackNavigator();



export default function Navigation() {

    return (           
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}> 
                <Stack.Screen name="welcome" component={Welcome} />
                <Stack.Screen name="Protected" component={_protected} />

            </Stack.Navigator>
        </NavigationContainer>
       
    )
}


