import React from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";
import { FONTS } from "../constants/fonts";
import { COLORS } from "../constants/colors";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { SVG_IMAGES } from "../constants/images";

const BtnPrimary = ({
  title = "",
  onPress,
  btnText = {},
  style = {},
  marginBottom = 0,
  userIcon = false,
  isDisable,
  loader
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loader ? true : isDisable}
      style={[styles.btn, style, { marginBottom,backgroundColor:isDisable?COLORS.disable:COLORS.black }]}
    >
      {loader ?
        <ActivityIndicator
          color={COLORS.white}
          size={'large'}
        />
        :
        <>
          {userIcon && <SVG_IMAGES.Whiteuser_SVG />}
          <Text style={[styles.btntext, btnText,{color:isDisable?COLORS.disableFont:COLORS.white}]}>{title}</Text>
        </>
      }
    </TouchableOpacity>
  );
};

export default BtnPrimary;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.primary,
    padding: 20,
    borderRadius: 100,
    height: verticalScale(54),
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(5),
  },
  btntext: {
    fontSize: scale(14),
    color: COLORS.white,
    fontFamily: FONTS.Samsungsharpsans_Bold,
    textAlign: "center",
  },
});
