import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {SVG_IMAGES} from '../constants/images';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const BackBtn = ({navigation, customStyle}) => {
  const insets = useSafeAreaInsets();
  return (
    <TouchableOpacity
      onPress={navigation}
      style={[
        styles.backBtn,
        {
          paddingTop: insets.top,
          ...customStyle,
        },
      ]}>
      <SVG_IMAGES.Arrow_SVG />
    </TouchableOpacity>
  );
};

export default BackBtn;

const styles = StyleSheet.create({
  backBtn: {
    paddingLeft: moderateScale(15),
    position: 'absolute',
    zIndex: 2,
  },
});
