import { Dimensions, StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { COLORS } from "./colors";
import { FONTS } from "./fonts";

const commonStyle = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  wrapper: {
    padding: moderateScale(18),
  },
  height: {
    height: Dimensions.get("window").height,
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
    fontSize: scale(16),
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: COLORS.primary,
  },
  textCenter: {
    textAlign: "center",
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
    flexDirection: "column",
  },
  // Tags
  tag: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 20,
    margin: 5,
    borderWidth: 1,
    marginLeft: 1,
  },
  selectedTag: {
    backgroundColor: "#2c2c2c",
    borderColor: "#2c2c2c",
  },
  unselectedTag: {
    backgroundColor: COLORS.white,
    borderColor: "#fff0",
    backgroundColor: '#eaeaea'
  },
  tagText: {
    fontSize: scale(11),
    textAlign: "center",
    fontFamily: FONTS.Samsungsharpsans_Bold,
    color: "#808080",
  },
  selectedText: {
    color: COLORS.white,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  //
  itemFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: moderateScale(10),
  },
  itemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
    paddingVertical: moderateScale(5),
  },
  dropFlex: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(7),
  },
  // Profile Face Upload
  uploadFaceProfile: {
    width: 125,
    height: 125,
    borderRadius: 100,
    backgroundColor: COLORS.white,
    shadowColor: '#fff0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#808080",
    marginHorizontal: "auto",
    marginBottom: moderateScale(27),
    justifyContent: "center",
    alignItems: "center",
  },
  uploadFaceProfileStyle: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 100,
  },
  //
  iconFlex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: verticalScale(18),
  },
  iconStyle: {
    backgroundColor: '#EAEAEA',
    shadowColor: '#fff0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    width: 47,
    height: 47,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  iconColor: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  iconActiveColor: {
    borderWidth: 5,
    borderColor: "rgba(255, 255,255,0.4)",
  },
});

const tabStyle = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  wrapperhorizontal: {
    paddingVertical: moderateScale(20),
  },
  wrapper: {
    padding: moderateScale(15),
  },
  tabContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    shadowColor: '#fff0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: verticalScale(30),
    paddingHorizontal: moderateScale(16),
    padding: 17,
    height: Dimensions.get("screen").height * 0.52,
  },
  tabContainer2: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    shadowColor: '#fff0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: verticalScale(30),
    paddingHorizontal: moderateScale(16),
    padding: 17,
    height: Dimensions.get("screen").height * 0.45,
  },
  tabContainerCenter: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: verticalScale(20),
    flex: 1,
    paddingBottom: verticalScale(40),
  },
  tabContainerCenter1: {
    paddingVertical: verticalScale(0),
    flex: 1,
  },
  //
  h1: {
    fontFamily: FONTS.Samsungsharpsans_Bold,
    fontSize: scale(95),
    textAlign: "center",
    marginVertical: verticalScale(12),
    color: "#2c2c2c",
  },
  h1Font: {
    fontSize: scale(75),
    color: "#2c2c2c",
  },
  h1small: {
    fontSize: scale(47),
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: "#2c2c2c",
  },
  h2: {
    fontFamily: FONTS.Samsungsharpsans_Medium,
    fontSize: scale(27),
    textAlign: "center",
    color: "#2c2c2c",
  },
  h2small: {
    fontSize: scale(17),
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: "#2c2c2c",
  },
  // Flex
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mb8: {
    marginBottom: verticalScale(8),
  },
  floatBtn: {
    position: "absolute",
    bottom: moderateScale(100),
    right: moderateScale(20),
  },
  //
  dropbutton1: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2c2c2c", // Dark background
    paddingVertical: 12,
    paddingHorizontal: 17,
    borderRadius: 100, // Rounded button
    justifyContent: "center",
    gap: 7,
  },
  //
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  column: {
    alignItems: "center",
    flex: 1,
  },
  number: {
    fontSize: scale(52),
    fontFamily: FONTS.Samsungsharpsans_Bold,
    color: COLORS.primary,
  },
  percentage: {
    fontSize: scale(52),
    fontFamily: FONTS.Samsungsharpsans_Bold,
    color: COLORS.primary,
  },
  label: {
    fontFamily: FONTS.Samsungsharpsans_Bold,
    color: COLORS.primary,
    fontSize: scale(22),
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },
  // Table
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  boldTextFont: {
    fontFamily: FONTS.Samsungsharpsans,
    fontSize: scale(10),
    textAlign: "center",
    marginBottom: 7,
  },
  boldText: {
    fontFamily: FONTS.Samsungsharpsans_Bold,
  },
});

export { commonStyle, tabStyle };
