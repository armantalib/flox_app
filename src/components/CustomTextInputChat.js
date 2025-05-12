import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { verticalScale, scale, moderateScale } from "react-native-size-matters";
import { FONTS } from "../constants/fonts";
import { COLORS } from "../constants/colors";

const CustomTextInputChat = ({
  value,
  onChangeText,
  inputBox,
  error,
  onSubmitEditing,
  input,
  disabled,
  rightIcon,
  keyboardType,
  editable = true,
  isMultiline = false,
  numberOfLines = 1,
  onFocus, // Added onFocus as a prop
}) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <>
      <View style={[styles.inputBox, inputBox]}>
        <TextInput
          placeholder={"Type a message"}
          style={[styles.input, input]}
          placeholderTextColor={COLORS.placeholderColor}
          value={value}
          onSubmitEditing={onSubmitEditing}
          onChangeText={onChangeText}
          onFocus={() => {
            if (onFocus) onFocus(); // Call the onFocus prop if provided
            setFocused(true);
          }}
          onBlur={() => setFocused(false)}
          keyboardType={keyboardType ?? "default"}
          editable={editable && !disabled}
          multiline={isMultiline}
          numberOfLines={numberOfLines}
        />
        {rightIcon && <View style={styles.iconContainer}>{rightIcon()}</View>}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
};

export default CustomTextInputChat;

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E9E8E7",
    borderRadius: 100,
    paddingHorizontal: moderateScale(10),
    height: verticalScale(60),
  },
  focusedInput: {
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  input: {
    flex: 1,
    fontSize: scale(14),
    color: COLORS.primary,
    fontFamily: FONTS.Samsungsharpsans_Medium,
    backgroundColor: "transparent",
    paddingHorizontal: moderateScale(10),
  },
  iconContainer: {
    marginRight: moderateScale(10),
  },
  errorText: {
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: "red",
    fontSize: scale(12),
    marginBottom: verticalScale(15),
    marginTop: -8,
  },
});
