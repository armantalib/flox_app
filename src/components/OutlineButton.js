import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import TextComponent from "./TextComponent";
import { COLORS } from "../constants/colors";
import { FONTS } from "../constants/fonts";
import { SVG_IMAGES } from "../constants/images";

const OutlineButton = ({ navigation, title, userIcon, style, heartIcon }) => {
  return (
    <TouchableOpacity onPress={navigation} style={[styles.btn, { ...style }]}>
      {userIcon && <SVG_IMAGES.Message_SVG />}
      {heartIcon && <SVG_IMAGES.Heart_SVG />}
      <TextComponent
        color={COLORS.placeholderColor}
        fontSize={11}
        title={title}
        fontFamily={FONTS.Samsungsharpsans_Bold}
      />
    </TouchableOpacity>
  );
};

export default OutlineButton;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 100,
    paddingHorizontal: moderateScale(17),
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
    borderWidth: 1,
    borderColor: COLORS.placeholderColor,
  },
});
