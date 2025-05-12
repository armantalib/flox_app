import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {FONTS} from '../constants/fonts';
import {COLORS} from '../constants/colors';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import TextComponent from './TextComponent';

const SeeAllComponent = ({title, onPress}) => {
  return (
    <View style={Styles.flexRow}>
      <TextComponent
        color={COLORS.primary}
        fontSize={25}
        title={title}
        fontFamily={FONTS.Samsungsharpsans_Bold}
      />
      <TouchableOpacity onPress={onPress} style={Styles.btnShadow}>
        <TextComponent
          color={COLORS.primary}
          fontSize={12}
          title={'See all'}
          fontFamily={FONTS.Samsungsharpsans_Bold}
        />
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(17),
  },
  btnShadow: {
    backgroundColor: COLORS.white,
    padding: 15,
    paddingHorizontal: moderateScale(18),
    borderRadius: 100,
    shadowColor: '#fff0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default SeeAllComponent;
