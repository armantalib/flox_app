import { TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./Styles";
import TextComponent from "../../../components/TextComponent";
import { FONTS } from "../../../constants/fonts";
import { COLORS } from "../../../constants/colors";
import CustomHeader from "../../../components/CustomHeader";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SVG_IMAGES } from "../../../constants/images";
import { commonStyle } from "../../../constants/style";

const ProfilePictureScreen = () => {
  const insets = useSafeAreaInsets();
  
  return (
    <View
      style={[
        styles.safeArea,
        {
          paddingTop: insets.top,
          flex: 1, // Added to ensure full screen coverage
        },
      ]}
    >
      <CustomHeader title={"Profile picture"} rightTitle={"Save"} />

      <View style={[styles.wrapper, { flex: 1, marginTop: 15 }]}>
        <View style={commonStyle.uploadFaceProfile}>
          <SVG_IMAGES.AddCircle_SVG />
        </View>
        
        <TextComponent
          color={COLORS.primary}
          fontSize={12}
          title={"Upload a photo or select an emoji"}
          marginBottom={18}
          fontFamily={FONTS.Samsungsharpsans_Medium}
          textAlign={'center'}
        />
        
        <View style={commonStyle.iconFlex}>
          <TouchableOpacity style={commonStyle.iconStyle}>
            <SVG_IMAGES.Picon1_SVG />
          </TouchableOpacity>
          <TouchableOpacity style={commonStyle.iconStyle}>
            <SVG_IMAGES.Picon2_SVG />
          </TouchableOpacity>
          <TouchableOpacity style={commonStyle.iconStyle}>
            <SVG_IMAGES.Picon3_SVG />
          </TouchableOpacity>
          <TouchableOpacity style={commonStyle.iconStyle}>
            <SVG_IMAGES.Picon4_SVG />
          </TouchableOpacity>
          <TouchableOpacity style={commonStyle.iconStyle}>
            <SVG_IMAGES.Picon5_SVG />
          </TouchableOpacity>
          <TouchableOpacity style={commonStyle.iconStyle}>
            <SVG_IMAGES.Picon6_SVG />
          </TouchableOpacity>
        </View>
        
        <TextComponent
          color={COLORS.primary}
          fontSize={12}
          title={"Select a colour"}
          textAlign={'center'}
          marginBottom={18}
          fontFamily={FONTS.Samsungsharpsans_Medium}
        />

        <View style={commonStyle.iconFlex}>
          <TouchableOpacity style={commonStyle.iconStyle}>
            <View
              style={[
                commonStyle.iconColor,
                commonStyle.iconActiveColor,
                { backgroundColor: "#F02424" },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity style={commonStyle.iconStyle}>
            <View
              style={[
                commonStyle.iconColor,
                { backgroundColor: "#F08524" },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity style={commonStyle.iconStyle}>
            <View
              style={[
                commonStyle.iconColor,
                { backgroundColor: "#F7D72F" },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity style={commonStyle.iconStyle}>
            <View
              style={[
                commonStyle.iconColor,
                { backgroundColor: "#89DD87" },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity style={commonStyle.iconStyle}>
            <View
              style={[
                commonStyle.iconColor,
                { backgroundColor: "#4488FB" },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity style={commonStyle.iconStyle}>
            <View
              style={[
                commonStyle.iconColor,
                { backgroundColor: "#E37DE8" },
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfilePictureScreen;