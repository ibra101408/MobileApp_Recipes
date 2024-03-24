/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Navigation from './src/navigation';

import {Amplify} from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
import {Authenticator} from '@aws-amplify/ui-react-native';

Amplify.configure(amplifyconfig);

function App(): React.JSX.Element {

    return (
            <Authenticator.Provider>
                <GestureHandlerRootView style={{flex: 1}}>
                    <Navigation/>
                </GestureHandlerRootView>
            </Authenticator.Provider>
    );
}

export default App;
