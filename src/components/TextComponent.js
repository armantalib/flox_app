import React from "react";
import { Text } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { FONTS } from "../constants/fonts";
import { COLORS } from "../constants/colors";

const TextComponent = ({
  title,
  color,
  fontSize,
  fontFamily,
  marginBottom = 0,
  lineHeight = 0,
  textAlign,
  opacity,
  numberOfLines,
  marginTop,
  width,
  marginLeft
}) => {
  return (
    <Text
      style={{
        fontSize: scale(fontSize) || scale(15),
        fontFamily: fontFamily || FONTS.Samsungsharpsans,
        color: color || COLORS.white,
        marginBottom: verticalScale(marginBottom),
        lineHeight: verticalScale(lineHeight),
        textAlign: textAlign,
        opacity: opacity,
        marginTop:marginTop,
        width:width,
        marginLeft:marginLeft
      }}
      numberOfLines={numberOfLines}
    >
      {title}
    </Text>
  );
};

export default TextComponent;
