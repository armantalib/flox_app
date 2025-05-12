import {
  View,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { styles } from "../Styles";
import GradientBackground from "../../../components/GradientBackground";
import { commonStyle } from "../../../constants/style";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TextComponent from "../../../components/TextComponent";
import { FONTS } from "../../../constants/fonts";
import { COLORS } from "../../../constants/colors";
import BtnPrimary from "../../../components/BtnPrimary";
import BackBtn from "../../../components/BackBtn";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../constants/Screen";
import { SVG_IMAGES } from "../../../constants/images";
import ReactNativeHapticFeedback from "react-native-haptic-feedback"; // Importing haptic feedback

const StepTenScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={commonStyle.safeArea}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <GradientBackground />
      <BackBtn navigation={() => navigation.goBack()} />
      <View
        style={{
          flexGrow: 1,
          justifyContent: "center",
          paddingTop: insets.top,
        }}
      >
        <View
          style={[
            commonStyle.wrapper,
            {
              flex: 1,
            },
          ]}
        >
          <View style={styles.fullCenter}>
            <View
              style={{
                paddingHorizontal: 5,
              }}
            >
              <TextComponent
                color={COLORS.primary}
                fontSize={34}
                title={"Give your\nprofile a face!"}
                marginBottom={18}
                fontFamily={FONTS.Samsungsharpsans_Bold}
              />
            </View>

            <View style={commonStyle.uploadFaceProfile}>
              {/* if image is big */}
              {/* <Image
                source={IMAGES.Map_IMG}
                resizeMode="contain"
                style={commonStyle.uploadFaceProfileStyle}
              /> */}
              {/* if image is Thumbnail */}
              <SVG_IMAGES.AddCircle_SVG />
            </View>

            <TextComponent
              color={COLORS.primary}
              fontSize={15}
              title="Upload a photo or select an emoji"
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />
            <View style={commonStyle.iconFlex}>
              <TouchableOpacity style={[commonStyle.iconStyle, { backgroundColor: '#FFFEFD' }]}>
                <SVG_IMAGES.Picon1_SVG />
              </TouchableOpacity>
              <TouchableOpacity style={[commonStyle.iconStyle, { backgroundColor: '#FFFEFD' }]}>
                <SVG_IMAGES.Picon2_SVG />
              </TouchableOpacity>
              <TouchableOpacity style={[commonStyle.iconStyle, { backgroundColor: '#FFFEFD' }]}>
                <SVG_IMAGES.Picon3_SVG />
              </TouchableOpacity>
              <TouchableOpacity style={[commonStyle.iconStyle, { backgroundColor: '#FFFEFD' }]}>
                <SVG_IMAGES.Picon4_SVG />
              </TouchableOpacity>
              <TouchableOpacity style={[commonStyle.iconStyle, { backgroundColor: '#FFFEFD' }]}>
                <SVG_IMAGES.Picon5_SVG />
              </TouchableOpacity>
              <TouchableOpacity style={[commonStyle.iconStyle, { backgroundColor: '#FFFEFD' }]}>
                <SVG_IMAGES.Picon6_SVG />
              </TouchableOpacity>
            </View>
            <TextComponent
              color={COLORS.primary}
              fontSize={15}
              title="Select a colour"
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />
            <View style={commonStyle.iconFlex}>
              <TouchableOpacity style={commonStyle.iconStyle}>
                <View
                  style={[
                    commonStyle.iconColor,
                    commonStyle.iconActiveColor,
                    {
                      backgroundColor: "#F02424",
                    },
                  ]}
                />
              </TouchableOpacity>
              <TouchableOpacity style={commonStyle.iconStyle}>
                <View
                  style={[
                    commonStyle.iconColor,
                    {
                      backgroundColor: "#F08524",
                    },
                  ]}
                />
              </TouchableOpacity>
              <TouchableOpacity style={commonStyle.iconStyle}>
                <View
                  style={[
                    commonStyle.iconColor,
                    {
                      backgroundColor: "#F7D72F",
                    },
                  ]}
                />
              </TouchableOpacity>
              <TouchableOpacity style={commonStyle.iconStyle}>
                <View
                  style={[
                    commonStyle.iconColor,
                    {
                      backgroundColor: "#89DD87",
                    },
                  ]}
                />
              </TouchableOpacity>
              <TouchableOpacity style={commonStyle.iconStyle}>
                <View
                  style={[
                    commonStyle.iconColor,
                    {
                      backgroundColor: "#4488FB",
                    },
                  ]}
                />
              </TouchableOpacity>
              <TouchableOpacity style={commonStyle.iconStyle}>
                <View
                  style={[
                    commonStyle.iconColor,
                    {
                      backgroundColor: "#E37DE8",
                    },
                  ]}
                />
              </TouchableOpacity>
            </View>
            <TextComponent
              color={COLORS.primary}
              fontSize={15}
              title="Help build the community by uploading a picture or choosing an avatar."
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />
          </View>

          {/* Button with Haptic Feedback */}
          <BtnPrimary
            onPress={() => {
              // Trigger haptic feedback
              ReactNativeHapticFeedback.trigger('impactMedium');
              navigation.navigate(SCREENS.TabRoutes, {
                screen: SCREENS.TabHome,
              });
            }}
            marginBottom={10}
            title="Next"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default StepTenScreen;
