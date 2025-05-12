import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
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
import { verticalScale } from "react-native-size-matters";
import { SVG_IMAGES } from "../../../constants/images";
import { SCREENS } from "../../../constants/Screen";
import ReactNativeHapticFeedback from "react-native-haptic-feedback"; // Import haptic feedback

const StepThreeScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  // Haptic feedback options
  const hapticOptions = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const handleNextPress = () => {
    // Trigger medium haptic feedback
    ReactNativeHapticFeedback.trigger("impactMedium", hapticOptions);

    // Navigate to StepFour
    navigation.navigate(SCREENS.AuthRoutes, {
      screen: SCREENS.StepFour,
    });
  };

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
                fontSize={32}
                title="Add some details about yourself!"
                marginBottom={20}
                fontFamily={FONTS.Samsungsharpsans_Bold}
              />
            </View>

            <View style={styles.container}>
              <View
                style={[
                  styles.optionContainer,
                  styles.topOption,
                  {
                    paddingVertical: verticalScale(20),
                    gap: 12,
                  },
                ]}
              >
                <Text style={[styles.optionText, styles.optionText1]}>
                  Select your gender
                </Text>
                <TouchableOpacity style={styles.dropbutton}>
                  <Text style={styles.text}>Select</Text>
                  <SVG_IMAGES.DownArrow_SVG />
                </TouchableOpacity>
              </View>
              <View
                style={[
                  styles.optionContainer,
                  styles.topOption,
                  {
                    paddingVertical: verticalScale(20),
                    gap: 12,
                  },
                ]}
              >
                <Text style={[styles.optionText, styles.optionText1]}>
                  Select your age
                </Text>
                <TouchableOpacity style={styles.dropbutton}>
                  <Text style={styles.text}>Select</Text>
                  <SVG_IMAGES.DownArrow_SVG />
                </TouchableOpacity>
              </View>
              <View
                style={[
                  styles.optionContainer,
                  styles.bottomOption,
                  {
                    paddingVertical: verticalScale(20),
                    gap: 12,
                  },
                ]}
              >
                <Text style={[styles.optionText, styles.optionText1]}>
                  What country are you from?
                </Text>
                <TouchableOpacity style={styles.dropbutton}>
                  <Text style={styles.text}>Select</Text>
                  <SVG_IMAGES.DownArrow_SVG />
                </TouchableOpacity>
              </View>
            </View>

            <TextComponent
              color={COLORS.primary}
              fontSize={15}
              title="You will not be able to change this information later"
              marginBottom={10}
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />
          </View>

          {/* Button with Haptic Feedback */}
          <BtnPrimary
            onPress={handleNextPress}
            marginBottom={10}
            title="Next"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default StepThreeScreen;
