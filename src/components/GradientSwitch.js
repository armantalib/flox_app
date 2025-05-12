import React, { useState, useRef } from 'react';
import {
  View,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../constants/colors';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const hapticOptions = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const GradientSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const animatedValue = useRef(new Animated.Value(isEnabled ? 1 : 0)).current;

  const toggleSwitch = () => {
    // Trigger haptic feedback when toggling
    ReactNativeHapticFeedback.trigger('impactMedium', hapticOptions);

    Animated.spring(animatedValue, {
      toValue: isEnabled ? 0 : 1,
      speed: 12,
      bounciness: 8,
      useNativeDriver: false,
    }).start();

    setIsEnabled(!isEnabled);
  };

  const thumbPosition = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 34],
  });

  return (
    <TouchableWithoutFeedback onPress={toggleSwitch}>
      <LinearGradient
        colors={
          isEnabled
            ? ['#3995FF', '#3995FF']
            : ['rgba(0,0,0,0.20)', 'rgba(0,0,0,0.20)']
        }
        style={styles.switchBackground}>
        <Animated.View
          style={[
            styles.thumb,
            { transform: [{ translateX: thumbPosition }] },
          ]}
        />
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  switchBackground: {
    height: 32,
    width: 65,
    borderRadius: 20,
    padding: 2,
    justifyContent: 'center',
  },
  thumb: {
    width: 26,
    height: 26,
    backgroundColor: COLORS.white,
    borderRadius: 100,
  },
});

export default GradientSwitch;
