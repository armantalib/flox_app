import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientBackground = () => {
  return (
    <LinearGradient
      colors={['#D3F6FF', '#D3F6FF', '#eadffb', '#eadffb']} // Lighter middle tones
      locations={[0, 0.33, 0.66, 1]} // Smoothly distributed
      start={{ x: 0, y: 0 }} // Top-left
      end={{ x: 1, y: 1 }} // Bottom-right
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
