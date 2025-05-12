import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {FONTS} from '../constants/fonts';
import {COLORS} from '../constants/colors';
import {SVG_IMAGES} from '../constants/images';

const SearchInput = ({
  value,
  onChangeText,
  placeholderText,
  marginBottom,
  error,
  onSubmitEditing,
  input,
  disabled,
}) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <View style={[styles.inputBox, marginBottom]}>
      <TextInput
        placeholder={placeholderText}
        style={[
          styles.input,
          input,
          {
            borderColor: isFocused ? COLORS.white : 'rgba(255, 255, 255,0.5)',
          },
        ]}
        placeholderTextColor={'rgba(255, 255, 255,0.5)'}
        value={value}
        onSubmitEditing={onSubmitEditing}
        onChangeText={onChangeText}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        underlineColor="transparent"
        disabled={disabled}
        underlineStyle={{
          height: 0,
        }}
        ref={ref =>
          ref &&
          ref.setNativeProps({
            style: {
              fontFamily: FONTS.Samsungsharpsans_Medium,
              color: COLORS.white,
              fontSize: scale(13),
            },
          })
        }
        theme={{
          roundness: 100,
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
        left={<TextInput.Icon icon={() => <SVG_IMAGES.Search_SVG />} />}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  inputBox: {},
  input: {
    fontSize: scale(14),
    color: COLORS.black,
    flexGrow: 1,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: 'transparent',
    paddingHorizontal: moderateScale(11),
    height: 48,
  },
  errorText: {
    fontFamily: FONTS.PlusJakartaSans_Regular,
    color: 'red',
    fontSize: scale(12),
    marginBottom: verticalScale(15),
    marginTop: -8,
  },
});
