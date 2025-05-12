import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./Styles";
import GradientBackground from "../../components/GradientBackground";
import { commonStyle } from "../../constants/style";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TextComponent from "../../components/TextComponent";
import { FONTS } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";
import { SVG_IMAGES } from "../../constants/images";
import BtnPrimary from "../../components/BtnPrimary";
import CustomTextInput from "../../components/CustomTextInput";
import BackBtn from "../../components/BackBtn";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../constants/Screen";
import { useKeyboard } from "../../providers/KeyboardOpenProvider";
import ReactNativeHapticFeedback from "react-native-haptic-feedback"; // Import haptic feedback

const CreateYourAccountScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { isKeyboardVisible } = useKeyboard();

  // Haptic feedback options
  const hapticOptions = {
    enableVibrateFallback: true, // Fallback to vibration if haptic feedback is not supported
    ignoreAndroidSystemSettings: false, // Respect system settings on Android
  };

  const handleNextPress = () => {
    // Trigger medium haptic feedback
    ReactNativeHapticFeedback.trigger("impactMedium", hapticOptions);

    // Navigate to the VerifyYourEmail screen
    navigation.navigate(SCREENS.AuthRoutes, {
      screen: SCREENS.VerifyYourEmail,
    });
  };

  return (
    <KeyboardAvoidingView
      style={commonStyle.safeArea}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <GradientBackground />
      <BackBtn navigation={() => navigation.goBack()} />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingTop: insets.top,
        }}
        keyboardShouldPersistTaps="handled"
        scrollEnabled={isKeyboardVisible}
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
            <TextComponent
              color={COLORS.primary}
              fontSize={35}
              title="Create your account!"
              marginBottom={10}
              fontFamily={FONTS.Samsungsharpsans_Bold}
            />
            <TextComponent
              color={COLORS.primary}
              fontSize={13}
              marginBottom={15}
              title="Please enter your username & email. Your username will be visible to others. You will not be able to change this information later"
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />

            {/* Email Input */}
            <CustomTextInput
              placeholderText={"Username"}
              rightIcon={() => <SVG_IMAGES.User_SVG />}
            />

            {/* Password Input */}
            <CustomTextInput
              placeholderText={"Password"}
              rightIcon={() => <SVG_IMAGES.Password_SVG />}
            />

            {/* Forgot Password */}
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(SCREENS.AuthRoutes, {
                  screen: SCREENS.Login,
                })
              }
            >
              <View style={styles.footerFlex}>
                <Text style={[styles.loginText]}>
                  I have an account? <Text style={styles.loginLink}>Login</Text>
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Button */}
          <BtnPrimary
            onPress={handleNextPress} // Use the haptic feedback handler
            marginBottom={10}
            title="Next"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateYourAccountScreen;