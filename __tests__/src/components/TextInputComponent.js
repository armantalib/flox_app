import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import {FONTS} from '../constants/fonts';
import {COLORS} from '../constants/colors';
import {SVG_IMAGES} from '../constants/images';

const SendMessageBtn = ({onPress, style, btnText, rightIcon}) => {
  return (
    <View style={[styles.inputBox, style]}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.sendBtn}
        activeOpacity={0.8}>
        <Text style={styles.sendBtnText}>{btnText}</Text>
        {rightIcon ? rightIcon : <SVG_IMAGES.Send_SVG />}
      </TouchableOpacity>
    </View>
  );
};

export default SendMessageBtn;

const styles = StyleSheet.create({
  inputBox: {},
  sendBtn: {
    color: COLORS.black,
    flexGrow: 1,
    borderRadius: 15,
    backgroundColor: COLORS.rgbacolor,
    paddingHorizontal: moderateScale(22),
    height: verticalScale(47),
    // height: 65,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  sendBtnText: {
    fontSize: scale(15),
    color: COLORS.white,
    fontFamily: FONTS.Samsungsharpsans,
  },
});
