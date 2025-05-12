import {Dimensions, Platform, StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {COLORS} from '../../../constants/colors';
import {FONTS} from '../../../constants/fonts';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    paddingTop: verticalScale(20),
  },
  wrapper: {
    padding: moderateScale(20),
    flex: 1,
    paddingBottom: Platform.OS === 'ios' ? verticalScale(0) : verticalScale(50),
  },
  backStylePos: {},
  //
  headerFlex: {
    paddingHorizontal: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
    paddingBottom: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.10)',
  },
  avatarContainer: {
    width: 78,
    height: 78,
    borderRadius: 100,
    zIndex: 2,
    backgroundColor: 'rgba(255,255,255,0.10)',
    padding: 6,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  centerBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: verticalScale(35),
  },
  noscrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footBtns: {
    padding: moderateScale(20),
    paddingBottom: verticalScale(7),
    paddingTop: verticalScale(5),
  },
  rightStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(13),
  },
  dropdownBG: {
    height: 90,
    width: 124,
    position: 'absolute',
    right: 25,
    top: Dimensions.get('screen').height * 0.145,
    padding: 10,
    resizeMode: 'cover',
  },
  dropdownFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownItemText: {
    color: COLORS.white,
    fontSize: 15,
    fontFamily: FONTS.Samsungsharpsans_Bold,
    marginLeft: 10,
  },
  dropdownItemLine: {
    height: 1,
    width: '90%',
    backgroundColor: COLORS.white10,
    alignSelf: 'center',
    marginVertical: 10,
  },
  //
  rightChat: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: verticalScale(15),
    flexDirection: 'row',
    gap: moderateScale(20),
  },
  leftChat: {
    marginBottom: verticalScale(15),
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(20),
  },
  rightChatBox: {
    backgroundColor: COLORS.rgbacolor,
    padding: 12,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
    marginBottom: 8,
    width: '73%',
  },
  rightChatBox1: {padding: 0, overflow: 'hidden'},
  switchBackground: {
    padding: 12,
  },
  leftChatBox: {
    backgroundColor: COLORS.rgbacolor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10,
    borderLeftColor: COLORS.secondary,
  },
  rightChatTitle: {
    fontSize: scale(13),
    fontFamily: FONTS.Oxygen_Regular,
    color: COLORS.black,
    lineHeight: 20,
    marginBottom: verticalScale(7),
  },
  rightChatTime: {
    fontSize: scale(10),
    fontFamily: FONTS.Oxygen_Regular,
    color: '#989898',
  },
  cFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 5,
  },
  chatImg: {
    width: '100%',
    borderRadius: 5,
    marginBottom: verticalScale(10),
  },
});

export default styles;
