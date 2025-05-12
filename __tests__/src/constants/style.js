import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {COLORS} from './colors';
import {FONTS} from './fonts';

const commonStyle = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  wrapper: {
    padding: moderateScale(18),
  },
  height: {
    height: Dimensions.get('window').height,
  },
  h1: {
    fontSize: scale(35),
    fontFamily: FONTS.Samsungsharpsans_Bold,
    color: COLORS.primary,
    marginBottom: verticalScale(10),
  },
  h2: {
    fontSize: scale(39),
    fontFamily: FONTS.Samsungsharpsans_Bold,
    color: COLORS.primary,
  },
  h3: {
    fontSize: scale(17),
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: COLORS.primary,
  },
  textCenter: {
    textAlign: 'center',
  },
  font15: {
    fontSize: scale(15),
  },
  font19: {
    fontSize: scale(19),
  },
  bold: {
    fontFamily: FONTS.Samsungsharpsans_Bold,
  },
  //
  flexColumnWrapper: {
    flexDirection: 'column',
  },
});

export {commonStyle};
