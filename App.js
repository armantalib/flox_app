import "react-native-gesture-handler";
import "react-native-reanimated";
import React from "react";
import { StyleSheet, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./src/navigations/StackNavigator";
import StatusBarWhite from "./src/components/StatusBarWhite";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "./src/providers/KeyboardOpenProvider";

import { Text, TextInput } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/storeTolkit/store';

if (Text.defaultProps == null) Text.defaultProps = {};
if (TextInput.defaultProps == null) TextInput.defaultProps = {};

Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps.allowFontScaling = false;


LogBox.ignoreLogs([
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
  "NativeBase: The contrast ratio of",
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer independent="true">
        <KeyboardProvider>
          <StatusBarWhite />
          {/* <SafeAreaProvider> */}
          <GestureHandlerRootView>
            <MainStackNavigator />
            {/* <UploadPhotos /> */}
          </GestureHandlerRootView>
        </KeyboardProvider>
        {/* </SafeAreaProvider> */}
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
