import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constants/colors';
import {FONTS} from '../../constants/fonts';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
const TabHomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.safeArea}>
      <ScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={Styles.wrapper}>
          <Text style={Styles.heading}>Services</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default TabHomeScreen;

const Styles = StyleSheet.create({
  safeArea: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  wrapper: {
    padding: moderateScale(20),
  },
  // Heading
  heading: {
    fontSize: scale(17),
    color: COLORS.primary,
    fontFamily: FONTS.PlusJakartaSans_SemiBold,
    marginBottom: verticalScale(15),
  },
});
