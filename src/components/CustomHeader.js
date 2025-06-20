import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../constants/colors";
import { FONTS } from "../constants/fonts";
import { SVG_IMAGES } from "../constants/images";
import TextComponent from "./TextComponent";
import { moderateScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
const CustomHeader = ({ title, opacity, rightTitle, dotShow,onPressTitle,onPressDot }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[styles.backBtn]}
      >
        <SVG_IMAGES.Arrow_SVG />
      </TouchableOpacity>
      {title && (
        <View style={styles.titleContainer}>
          <TextComponent
            color={COLORS.primary}
            fontSize={15}
            title={title}
            fontFamily={FONTS.Samsungsharpsans_Bold}
            textAlign="center"
          />
        </View>
      )}
      <TouchableOpacity
        style={[
          styles.rightContainer,
          {
            opacity: opacity,
          },
        ]}
        onPress={onPressTitle}
      >
        <TextComponent
            color={COLORS.white}
            fontSize={12}
          title={rightTitle}
          fontFamily={FONTS.Samsungsharpsans_Bold}
          textAlign={"center"}
        />

      </TouchableOpacity>
      {dotShow && (
        <TouchableOpacity 
        onPress={onPressDot}
        style={styles.dotsSTyle}>
          <SVG_IMAGES.DotsIcon_SVG />
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: moderateScale(16),
    gap: moderateScale(10),
    borderBottomWidth: 2,
    borderBottomColor: COLORS.border,
    paddingBottom: moderateScale(13),
  },
  titleContainer: {
    position: "absolute",
    left: "auto",
    right: "auto",
    alignSelf: "center",
    width: Dimensions.get("screen").width,
    top: 14,
    zIndex: -1,
  },
  rightContainer: {
    backgroundColor: COLORS.blue,
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(8),
    borderRadius: moderateScale(100),
    marginLeft: "auto",
    color: COLORS.white,
  },


  

  dotsSTyle: {
    zIndex: 2,
    marginLeft: "auto",
    height: 20,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomHeader;
