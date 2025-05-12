import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import TextComponent from "./TextComponent";
import { COLORS } from "../constants/colors";
import { FONTS } from "../constants/fonts";
import BtnPrimary from "./BtnPrimary";
import { verticalScale } from "react-native-size-matters";
import CustomProgressBar from "./CustomProgressBar";

const ResourcesComponent = ({
  title,
  count1,
  count2,
  btnText,
  btnonPress,
  userImage,
  countProgress,
  style,
  btnStyle,
  description,
  onPress,
}) => {
  return (
    <View style={[styles.card, { ...style }]}>
      <TouchableOpacity style={styles.imgFlex} onPress={onPress}>
        <Image source={userImage} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <TextComponent
          color={COLORS.primary}
          fontSize={19}
          title={title}
          marginBottom={10}
          fontFamily={FONTS.Samsungsharpsans_Bold}
        />
      </TouchableOpacity>
      {countProgress && (
        <>
          <View style={styles.countFlex}>
            <TextComponent
              color={COLORS.primary}
              fontSize={19}
              title={count1}
              fontFamily={FONTS.Samsungsharpsans_Bold}
            />
            <TextComponent
              color={COLORS.primary}
              fontSize={19}
              title={count2}
              fontFamily={FONTS.Samsungsharpsans_Bold}
            />
          </View>
          <CustomProgressBar progress={35} />
        </>
      )}
      {description && (
        <TextComponent
          color={COLORS.primary}
          fontSize={15}
          title={description}
          marginBottom={10}
          fontFamily={FONTS.Samsungsharpsans_Medium}
        />
      )}

      <BtnPrimary style={btnStyle} onPress={btnonPress} title={btnText} />
    </View>
  );
};

const styles = StyleSheet.create({
  countFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: verticalScale(5),
  },
  card: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: COLORS.white,
    shadowColor: '#fff0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    padding: 12,
  },
  //
  imgFlex: {
    flexDirection: "row",
    marginBottom: verticalScale(15),
    width: "100%",
    height: 204,
    borderRadius: 20,
  },
  imageContainer: {
    borderRadius: 100,
    overflow: "hidden",
    marginLeft: -17,
    left: 17,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default ResourcesComponent;
