import { Dimensions, StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { COLORS } from "../../../constants/colors";
import { FONTS } from "../../../constants/fonts";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapper: {
    padding: 20,
    flex: 1,
  },
  backBtn: {
    zIndex: 2,
  },
  dotsSTyle: {
    zIndex: 2,
    marginLeft: "auto",
    height: 20,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  //
  card: {
    borderRadius: 20,
    backgroundColor: COLORS.white,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 13,
  },
  flexRow: {
    paddingHorizontal: 0,
    borderBottomWidth: 2,
    borderBottomColor: "#EAEAEA",
    paddingBottom: verticalScale(12),
    marginBottom: verticalScale(0),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  //
  listFlex: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#EAEAEA",
    paddingBottom: verticalScale(16),
    marginBottom: verticalScale(14),
    gap: 13,
  },
  userPro: {
    height: 62,
    width: 62,
    borderRadius: 100,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    objectFit: "cover",
  },
  //
  dropbutton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222", // Dark background
    paddingVertical: 12,
    paddingHorizontal: 17,
    borderRadius: 100, // Rounded button
    justifyContent: "center",
    gap: 7,
    marginLeft: "auto",
  },
  //
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
    objectFit: "cover",
  },
  statsBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(10),
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: moderateScale(15),
    flexGrow: 1,
  },
  stat: {
    alignItems: "center",
  },
  titleCenter: {
    position: "absolute",
    left: 0,
    right: 0,
    alignSelf: "center",
  },
  titleCenter1: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  imgBox: {
    width: 57,
    height: 57,
    borderRadius: 100,
    overflow: "hidden",
  },
  img1: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    objectFit: "cover",
  },
  //
  btnFlex: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  //
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: verticalScale(0),
    marginTop: verticalScale(15),
  },
  tab: {
    flex: 1,
    alignItems: "center",
    borderBottomWidth: 2,
    paddingBottom: verticalScale(15),
  },
  tabText: {
    fontFamily: FONTS.Samsungsharpsans_Bold,
    fontSize: scale(15),
    color: COLORS.primary,
  },
  activeTabText: {
    color: COLORS.primary,
  },
  indicatorContainer: {
    height: 2,
    width: "100%",
    backgroundColor: "#EAEAEA",
    position: "relative",
  },
  indicator: {
    height: 2,
    width: "50%",
    backgroundColor: COLORS.primary,
    position: "absolute",
    bottom: 0,
  },
  //
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
  },
  topOption: {
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  bottomOption: {},
  optionText: {
    fontSize: scale(18),
    color: "#2C2C2C",
    flex: 1,
    fontFamily: FONTS.Samsungsharpsans_Bold,
  },
  optionText1: {
    fontSize: scale(16),
  },
  iconContainer: {
    marginLeft: 8,
  },
  //
  dropbutton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222", // Dark background
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 20, // Rounded button
  },

  // chatContainer
  chatFooter: {},
  chatContainer: {
    flex: 1,
  },
  chatWrapper: {
    flex: 1,
    height: 400,
  },
  ///
  rightChat: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: verticalScale(15),
    flexDirection: "row",
    gap: moderateScale(20),
  },
  leftChat: {
    marginBottom: verticalScale(15),
    flexDirection: "row",
    alignItems: "center",
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
    width: "83%",
  },
  rightChatBox1: { padding: 0, overflow: "hidden" },
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
    fontFamily: FONTS.Samsungsharpsans,
    color: COLORS.black,
    lineHeight: 20,
    marginBottom: verticalScale(7),
  },
  rightChatTime: {
    fontSize: scale(10),
    fontFamily: FONTS.Samsungsharpsans,
    color: "#989898",
  },
  cFlex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 5,
  },
  chatImg: {
    width: "100%",
    borderRadius: 5,
    marginBottom: verticalScale(10),
  },
  //
  noChat: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 40,
  },
  //
  dropdownContainer: {
    position: "absolute",
    right: 15,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 17,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 999,
  },
  dropdownDivider: {
    height: 1,
    width: "100%",
    backgroundColor: "#EAEAEA",
    marginVertical: 15,
  },
  editStyle: {
    padding: 10,
    paddingVertical: 10,
    borderRadius: 100,
    backgroundColor: COLORS.blue,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  editImage: {
    position: "absolute",
    top: 0,

    right: 0,
    zIndex: 2,
  },
});

export default styles;
