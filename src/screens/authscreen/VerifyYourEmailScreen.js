import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
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
import VerifyIcon from "../../components/svgcomponent/VerifyIcon";
import { useKeyboard } from "../../providers/KeyboardOpenProvider";
import ReactNativeHapticFeedback from "react-native-haptic-feedback"; // Import haptic feedback

const VerifyYourEmailScreen = () => {
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

    // Navigate to the CreateYourPassword screen
    navigation.navigate(SCREENS.AuthRoutes, {
      screen: SCREENS.CreateYourPassword,
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
              title="Verify your email."
              marginBottom={10}
              fontFamily={FONTS.Samsungsharpsans_Bold}
            />
            <TextComponent
              color={COLORS.primary}
              fontSize={14}
              marginBottom={15}
              title="Please enter the six digit verification code sent to your email, make sure to check your spam too."
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />

            {/* Email Input */}
            <CustomTextInput
              placeholderText={"X X X X X X"}
              rightIcon={() => <VerifyIcon />}
            />

            {/* Resend Code */}
            <TouchableOpacity
              onPress={() => {
                // Add your resend code logic here
              }}
            >
              <View style={styles.footerFlex}>
                <Text style={styles.loginText}>
                  Didn't get code? <Text style={styles.loginLink}>Click to resend</Text>
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Button */}
          <BtnPrimary
            marginBottom={10}
            onPress={handleNextPress} // Use the haptic feedback handler
            title="Next"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default VerifyYourEmailScreen;