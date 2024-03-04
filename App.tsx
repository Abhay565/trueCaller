import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Login from './src/Login';
import SignUp from './src/SignUp';
import Main from './src/Main';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Setup your company account' component={SignUp}/>
        <Stack.Screen name='Dashboard' component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App