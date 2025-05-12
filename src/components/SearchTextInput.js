import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { verticalScale, scale, moderateScale } from "react-native-size-matters";
import { FONTS } from "../constants/fonts";
import { COLORS } from "../constants/colors";
import { SVG_IMAGES } from "../constants/images";

const SearchTextInput = ({
  value,
  onChangeText,
  placeholderText,
  inputBox,
  error,
  onSubmitEditing,
  input,
  disabled,
  leftIcon,
  keyboardType,
  editable = true,
  isMultiline = false,
  numberOfLines = 1,
  onFocus, // Added onFocus as a prop
}) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <>
      <View
        style={[styles.inputBox, inputBox, isFocused && styles.focusedInput]}
      >
        <View style={styles.iconContainer}>
          <SVG_IMAGES.SearchIcon_SVG />
        </View>
        <TextInput
          placeholder={placeholderText}
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
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
};

export default SearchTextInput;

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EAE9E8",
    borderRadius: 100,
    marginBottom: verticalScale(16),
    paddingHorizontal: moderateScale(5),
    height: verticalScale(37),
  },
  focusedInput: {
    borderWidth: 0,
    borderColor: COLORS.primary,
  },
  input: {
    flex: 1,
    fontSize: scale(14),
    letterSpacing: 0,
    color: COLORS.primary,
    fontFamily: FONTS.Samsungsharpsans,
    backgroundColor: "transparent",
    paddingHorizontal: moderateScale(10),
    marginTop: 1,
  },
  iconContainer: {
    marginLeft: moderateScale(10),
    opacity: 0.4,
  },
  errorText: {
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: "red",
    fontSize: scale(12),
    marginBottom: verticalScale(15),
    marginTop: -8,
  },
});
