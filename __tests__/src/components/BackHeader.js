import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SVG_IMAGES} from '../constants/images';
import {COLORS} from '../constants/colors';

const BackHeader = ({percentage, onPress, headerStyle, disableLine}) => {
  const width = percentage || 15;

  return (
    <View style={[styles.headerContainer, headerStyle]}>
      <TouchableOpacity onPress={onPress}>
        <SVG_IMAGES.Back_Arrow_SVG />
        {/* <SVG_IMAGES.Back_SVG /> */}
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          width: '100%',
          opacity: disableLine ? 0 : 1,
        }}>
        <View
          style={{width: '82%', height: 2, backgroundColor: COLORS.white10}}
        />
        <View
          style={{
            width: `${width}%`,
            height: 2,
            backgroundColor: COLORS.pink,
            position: 'absolute',
            left: 0,
            opacity: disableLine ? 0 : 1,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    left: -2,
  },
});

export default BackHeader;
