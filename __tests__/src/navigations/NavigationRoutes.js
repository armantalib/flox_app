// StackNavigator.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NotificationsScreen from '../screens/pages/notifications/NotificationsScreen';

const Stack = createStackNavigator();

const NavigationRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Notifications"
      screenOptions={{
        headerMode: 'screen',
      }}>
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default NavigationRoutes;
