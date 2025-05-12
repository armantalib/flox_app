import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { FONTS } from "../constants/fonts";
import { COLORS } from "../constants/colors";
import { SVG_IMAGES } from "../constants/images";
import CustomTextInputChat from "./CustomTextInputChat";

const ChatSendTextInput = ({ onPress, style, rightIcon }) => {
  return (
    <View style={[styles.inputBox, style]}>
      <CustomTextInputChat
        rightIcon={() => (
          <TouchableOpacity
            onPress={onPress}
            style={styles.sendBtn}
            activeOpacity={0.8}
          >
            {rightIcon ? rightIcon : <SVG_IMAGES.Send_SVG />}
          </TouchableOpacity>
        )}
        placeholderText={"Send a message"}
      />
    </View>
  );
};

export default ChatSendTextInput;

const styles = StyleSheet.create({
  inputBox: {},
  sendBtn: {
    color: COLORS.black,
    flexGrow: 1,
    borderRadius: 15,
    backgroundColor: COLORS.rgbacolor,
    height: verticalScale(47),
    // height: 65,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  sendBtnText: {
    fontSize: scale(15),
    color: COLORS.white,
    fontFamily: FONTS.Samsungsharpsans,
  },
});
