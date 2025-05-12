// StackNavigator.js
import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import AuthRoutes from './AuthRoutes';
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AuthRoutes"
      screenOptions={{
        headerMode: 'screen',
        ...TransitionPresets.FadeFromBottomAndroid, // Add this line for slide transition
      }}>
      <Stack.Screen
        name="AuthRoutes"
        component={AuthRoutes}
        options={{headerShown: false}}
      />
      {/* 
      <Stack.Screen
        name="NavigationRoutes"
        component={NavigationRoutes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabRoutes"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

const styles = StyleSheet.create({});
