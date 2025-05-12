
/**
 * @format
 */
import React, { useEffect } from 'react';
import { AppRegistry, Text, TextInput } from 'react-native';
import Root from './App';
import { name as appName } from './app.json';
import Orientation from 'react-native-orientation-locker';

const App = () => {
  useEffect(() => {
    Orientation.lockToPortrait(); // or lockToLandscape()
  }, []);

  return <Root />;
};

// Disable font scaling globally
if (Text.defaultProps == null) Text.defaultProps = {};
if (TextInput.defaultProps == null) TextInput.defaultProps = {};

Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => App);
