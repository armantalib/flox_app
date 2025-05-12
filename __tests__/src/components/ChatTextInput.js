import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {FONTS} from '../constants/fonts';
import {COLORS} from '../constants/colors';

const ChatTextInput = ({
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
  editable,
  isMultiline,
  numberOfLines,
}) => {
  return (
    <View style={[styles.inputBox, inputBox]}>
      <TextInput
        placeholder={placeholderText}
        style={[styles.input, input]}
        placeholderTextColor={COLORS.white}
        value={value}
        onSubmitEditing={onSubmitEditing}
        onChangeText={onChangeText}
        underlineColor="transparent"
        keyboardType={keyboardType ?? 'default'}
        disabled={disabled}
        editable={editable}
        multiline={isMultiline}
        numberOfLines={numberOfLines}
        underlineStyle={{
          height: 0,
        }}
        ref={ref =>
          ref &&
          ref.setNativeProps({
            style: {
              fontFamily: FONTS.Samsungsharpsans,
              color: COLORS.white,
              fontSize: scale(13),
            },
          })
        }
        theme={{
          roundness: 15,
          colors: {
            primary: COLORS.primary,
            color: COLORS.white,
            fontSize: scale(13),
          },
          fonts: {
            regular: {
              fontFamily: FONTS.Samsungsharpsans_Medium,
            },
          },
        }}
        right={
          <TextInput.Icon
            style={{width: 150, left: -45}}
            icon={() => (rightIcon ? rightIcon : null)}
          />
        }
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default ChatTextInput;

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: COLORS.rgbacolor,
    borderRadius: 15,
    marginBottom: 15,
  },

  input: {
    fontSize: scale(14),
    color: COLORS.black,
    backgroundColor: 'transparent',
    paddingHorizontal: moderateScale(20),
    height: verticalScale(51),
    paddingRight: moderateScale(80),
  },
  errorText: {
    fontFamily: FONTS.PlusJakartaSans_Regular,
    color: 'red',
    fontSize: scale(12),
    marginBottom: verticalScale(15),
    marginTop: -8,
  },
});
