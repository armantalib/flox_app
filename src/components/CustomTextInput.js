import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { verticalScale, scale, moderateScale } from "react-native-size-matters";
import { FONTS } from "../constants/fonts";
import { COLORS } from "../constants/colors";

const CustomTextInput = ({
  value,
  onChangeText,
  placeholderText,
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
  maxLength,
  secureTextEntry
}) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <>
      <View
        style={[styles.inputBox, inputBox, isFocused && styles.focusedInput]}
      >
        <TextInput
          placeholder={placeholderText}
          style={[styles.input, input]}
          placeholderTextColor={COLORS.placeholderColor}
          value={value}
          onSubmitEditing={onSubmitEditing}
          onChangeText={onChangeText}
          maxLength={maxLength}
          onFocus={() => {
            if (onFocus) onFocus(); // Call the onFocus prop if provided
            setFocused(true);
          }}
          onBlur={() => setFocused(false)}
          keyboardType={keyboardType ?? "default"}
          editable={editable && !disabled}
          multiline={isMultiline}
          numberOfLines={numberOfLines}
          secureTextEntry={secureTextEntry}
        />
        {rightIcon && <View style={styles.iconContainer}>{rightIcon()}</View>}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 20,
    marginBottom: verticalScale(16),
    paddingHorizontal: moderateScale(10),
    height: verticalScale(60),
    // Shadow for iOS
    shadowColor: "#fff0",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 5,
    borderWidth: 1,
    borderColor: "transparent",
  },
  focusedInput: {
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  input: {
    flex: 1,
    fontSize: scale(15),
    letterSpacing: 0.2,
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
