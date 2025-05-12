import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";
import { FONTS } from "../../../constants/fonts";
import { scale, verticalScale } from "react-native-size-matters";
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  wrapper: {
    padding: 20,
    flex: 1,
    flexDirection: "column",
  },
  tierContainer: {
    borderRadius: 15,
    padding: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: verticalScale(15),
  },
  tierTitle: {
    fontSize: scale(22),
    fontFamily: FONTS.Samsungsharpsans_Bold,
    color: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 3,
  },
});

export default styles;
