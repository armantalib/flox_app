// StackNavigator.js
import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import AuthRoutes from "./AuthRoutes";
import { BottomTabNavigator } from "./BottomTabNavigator";
import NavigationRoutes from "./NavigationRoutes";
import CheckSession from "./CheckSession";
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CheckSession"
      screenOptions={{
        headerMode: "screen",
        // ...TransitionPresets.FadeFromBottomAndroid, // Add this line for slide transition
      }}
    >
        <Stack.Screen
        name="CheckSession"
        component={CheckSession}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AuthRoutes"
        component={AuthRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabRoutes"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NavigationRoutes"
        component={NavigationRoutes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

const styles = StyleSheet.create({});
