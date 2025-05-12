import { Dimensions, StyleSheet } from "react-native";
import { verticalScale } from "react-native-size-matters";
import { COLORS } from "../../../constants/colors";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapper: {
    padding: 20,
  },
  //
  card: {
    flex: 1,
    maxWidth: "100%", // Ensures two items fit in a row
  },
  content: {},
  flexRow: {
    marginBottom: 12,
    paddingHorizontal: 17,
    borderBottomWidth: 2,
    borderBottomColor: "#EAEAEA",
    paddingBottom: verticalScale(12),
    marginBottom: verticalScale(10),
  },
  centerText: {
    alignSelf: "center",
    position: "absolute",
    paddingVertical: verticalScale(8),
  },
  listFlex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "#f5f5f7",
    paddingBottom: verticalScale(12),
    marginBottom: verticalScale(12),
  },
  listFlexPro: {
    justifyContent: "flex-start",
    gap: 15,
  },
  listFlexNone: {
    borderBottomWidth: 0,
  },
  //
  userPro: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    objectFit: "cover",
  },
  unblockBtn: {
    backgroundColor: COLORS.blue,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 100,
    marginLeft: "auto",
  },
  // Footer
  footBtns: {
    padding: 20,
    paddingTop: 5,
    paddingBottom: Platform.OS === "ios" ? 15 : 15,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  profileBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  userStyle: {
    width: 81,
    height: 81,
    objectFit: "cover",
    borderRadius: 100,
  },
  bgContainer: {
    backgroundColor: "#EAE9E8",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
});

export default styles;
