import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientBackground = () => {
  return (
    <LinearGradient
      colors={['#a8e9ff', '#FFFFFF', '#AB5CFF']}
      locations={[0, 0.39, 1]}
      start={{x: 0.8, y: 0}} // Left side
      end={{x: 1, y: 1.7}} // Right side (Horizontal gradient)
      style={styles.gradient}
    />
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    position: 'absolute',
    height: Dimensions.get('window').height,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
  },
});

export default GradientBackground;
