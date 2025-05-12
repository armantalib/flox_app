import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {FONTS} from '../../constants/fonts';
import {COLORS} from '../../constants/colors';

const styles = StyleSheet.create({
  mapStyle: {
    width: '100%',
    height: Dimensions.get('window').height * 0.2,
    objectFit: 'contain',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  footerFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    fontFamily: FONTS.Samsungsharpsans_Medium,
    fontSize: scale(15),
  },
  loginLink: {
    fontFamily: FONTS.Samsungsharpsans_Bold,
  },
  fullCenter: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  //
  languageStyle: {
    flexDirection: 'row',
    gap: 7,
    backgroundColor: COLORS.white,
    padding: 7,
    paddingHorizontal: moderateScale(12),
    justifyContent: 'flex-end',
    borderRadius: 100,
    marginLeft: 'auto',
    marginBottom: verticalScale(7),
    shadowColor: '#fff0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  //
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 8,
    shadowColor: '#fff0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: verticalScale(15),
    paddingHorizontal: moderateScale(16),
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  topOption: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  bottomOption: {},
  optionText: {
    fontSize: scale(18),
    color: '#2C2C2C',
    flex: 1,
    fontFamily: FONTS.Samsungsharpsans_Bold,
  },
  optionText1: {
    fontSize: scale(15),
  },
  iconContainer: {
    marginLeft: 8,
  },
  //
  dropbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222', // Dark background
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 20, // Rounded button
  },
  text: {
    color: COLORS.white,
    fontSize: scale(12),
    fontFamily: FONTS.Samsungsharpsans_Bold,
    marginRight: 7, // Spacing between text and icon
  },
  icon: {
    marginTop: 2, // Align the icon better with the text
  },
});

export {styles};
