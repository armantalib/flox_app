import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";
import { FONTS } from "../../../constants/fonts";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapper: {
    padding: 20,
  },
  notificationText: {
    fontFamily: FONTS.Samsungsharpsans_Bold,
    fontSize: scale(14),
    color: COLORS.primary,
  },
  notificationHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  notificationbage: {
    backgroundColor: COLORS.blue,
    paddingHorizontal: scale(7.5),
    paddingVertical: scale(3.5),
    borderRadius: scale(100),
  },
  //
  notificationContainer: {
    borderBottomWidth: 1.4,
    borderBottomColor: "#EAE9E8",
    paddingBottom: 15,
    marginBottom: 15,
    paddingTop: 0,
  },
  notificationContainer1: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  chatUserContainer: {
    flex: 1,
  },
  chatUserImage: {
    width: scale(53),
    height: scale(53),
    borderRadius: scale(100),
  },
});

export default styles;
