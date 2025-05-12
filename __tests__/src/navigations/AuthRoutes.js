// StackNavigator.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChooseLanguageScreen from '../screens/authscreen/ChooseLanguage';
import LoginScreen from '../screens/authscreen/LoginScreen';
const Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="ChooseLanguage"
      screenOptions={{
        headerMode: 'screen',
      }}>
      <Stack.Screen
        name="ChooseLanguage"
        component={ChooseLanguageScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
