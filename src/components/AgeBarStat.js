import React from "react";
import { Text, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { FONTS } from "../constants/fonts";
import { COLORS } from "../constants/colors";
import stylesG from "../assets/css/stylesG";
import TextComponent from "./TextComponent";
import { normalize } from "../utils/Metrics";
import { percentBarAge } from "../utils/Math";

const AgeBarStat = ({
  age,
  maleValue,
  femaleValue
}) => {
  return (
    <>
      <View style={[stylesG.spaceBetween, { marginTop: normalize(5) }]}>
        <View style={[stylesG.flexRow, { width: '33%',alignSelf:'flex-end' }]}>
          <TextComponent
            color={COLORS.black}
            fontSize={normalize(12)}
            title={maleValue}
            fontFamily={FONTS.Samsungsharpsans_Bold}
            textAlign={"center"}
          />
          <View style={[{ width: `${percentBarAge(maleValue)}%`, height: normalize(12), backgroundColor: '#BEBEBE', borderRadius: normalize(8), marginLeft: normalize(3) }]}></View>
        </View>
        <View style={[{ alignItems: 'center', width: '33%' }]}>
          <TextComponent
            color={COLORS.black}
            fontSize={normalize(14)}
            title={age}
            fontFamily={FONTS.Samsungsharpsans_Bold}
            textAlign={"center"}
          />
        </View>
        <View style={[stylesG.flexRow, { width: '32%' }]}>
          <View style={[{ width: `${percentBarAge(femaleValue)}%`,  height: normalize(12), backgroundColor: '#BEBEBE', borderRadius: normalize(8) }]}></View>
          <TextComponent
            color={COLORS.black}
            fontSize={normalize(12)}
            title={femaleValue}
            fontFamily={FONTS.Samsungsharpsans_Bold}
            textAlign={"center"}
            marginLeft={normalize(3)}
          />
        </View>
      </View>
    </>
  );
};

export default AgeBarStat;
