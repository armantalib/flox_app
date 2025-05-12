import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {FONTS} from '../constants/fonts';
import {COLORS} from '../constants/colors';
import TextComponent from './TextComponent';

const SingleTextInput = ({
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
  labelText,
}) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <>
      <View
        style={{
          paddingHorizontal: 7,
        }}>
        <TextComponent
          color={COLORS.primary}
          fontSize={15}
          title={labelText}
          fontFamily={FONTS.Samsungsharpsans_Bold}
          marginBottom={7}
        />
      </View>
      <View
        style={[styles.inputBox, inputBox, isFocused && styles.focusedInput]}>
        <TextInput
          placeholder={placeholderText}
          style={[styles.input, input]}
          placeholderTextColor={COLORS.placeholderColor}
          value={value}
          onSubmitEditing={onSubmitEditing}
          onChangeText={onChangeText}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          keyboardType={keyboardType ?? 'default'}
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

export default SingleTextInput;

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    marginBottom: verticalScale(16),
    paddingHorizontal: moderateScale(5),
    height: verticalScale(55),
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },
  focusedInput: {
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  input: {
    flex: 1,
    fontSize: scale(14),
    letterSpacing: 0,
    color: COLORS.primary,
    fontFamily: FONTS.Samsungsharpsans_Medium,
    backgroundColor: 'transparent',
    paddingHorizontal: moderateScale(13),
  },
  iconContainer: {
    marginRight: moderateScale(10),
  },
  errorText: {
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: 'red',
    fontSize: scale(12),
    marginBottom: verticalScale(15),
    marginTop: -8,
  },
});
