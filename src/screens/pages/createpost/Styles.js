import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { COLORS } from "../../../constants/colors";
import { FONTS } from "../../../constants/fonts";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapper: {
    padding: 15,
    paddingHorizontal: 0,
  },
  //
  card: {
    borderRadius: 20,
    backgroundColor: COLORS.white,
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
    marginBottom: verticalScale(15),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  //
  usePro: {
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    gap: 15,
  },
  listFlex: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#EAEAEA",
    paddingBottom: 15,
    marginBottom: verticalScale(14),
    gap: 13,
  },
  userPro: {
    height: 70,
    width: 70,
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
  input: {
    flex: 1,
    fontSize: scale(15),
    color: COLORS.primary,
    fontFamily: FONTS.Samsungsharpsans_Medium,
    backgroundColor: "transparent",
    paddingHorizontal: moderateScale(0),
  },
  //
  totalCharcter: {
    borderTopWidth: 2,
    borderTopColor: "#EAEAEA",
    paddingTop: verticalScale(16),
    paddingHorizontal: 20,
  },
  footer: {
    padding: 20,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 10,
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
});

export default styles;
