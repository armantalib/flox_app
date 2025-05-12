import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import LinearGradient from "react-native-linear-gradient";
import TextComponent from "./TextComponent";
import { COLORS } from "../constants/colors";
import { FONTS } from "../constants/fonts";
import { SVG_IMAGES } from "../constants/images";

const GradientButton = ({ navigation, title, userIcon, style }) => {
  return (
    <TouchableOpacity onPress={navigation}>
      <LinearGradient
        colors={["#00BFFF", "#AB5CFF"]}
        style={[styles.btn, { ...style }]}
        start={{ x: 0, y: 0 }} // Start from the left
        end={{ x: 1, y: 0 }} // End at the right
      >
        {userIcon && <SVG_IMAGES.Whiteuser_SVG />}
        <TextComponent
          color={COLORS.white}
          fontSize={11}
          title={title}
          fontFamily={FONTS.Samsungsharpsans_Bold}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 100,
    paddingHorizontal: moderateScale(17),
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
});
