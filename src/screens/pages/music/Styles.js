import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";
import { moderateScale } from "react-native-size-matters";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingHorizontal: moderateScale(20),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default styles;
