import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  Platform,
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
import { useKeyboard } from "../../providers/KeyboardOpenProvider";
import ReactNativeHapticFeedback from "react-native-haptic-feedback"; // Import haptic feedback

const LoginScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { isKeyboardVisible } = useKeyboard();

  // Haptic feedback options
  const hapticOptions = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const handleNextPress = () => {
    // Trigger medium haptic feedback
    ReactNativeHapticFeedback.trigger("impactMedium", hapticOptions);

    // Navigate to the home screen
    navigation.navigate(SCREENS.TabRoutes, {
      screen: SCREENS.TabHome,
    });
  };

  return (
    <KeyboardAvoidingView
      style={commonStyle.safeArea}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <GradientBackground />
      <BackBtn
        navigation={() =>
          navigation.navigate(SCREENS.AuthRoutes, {
            screen: SCREENS.ChooseLanguage,
          })
        }
      />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingTop: insets.top,
        }}
        scrollEnabled={isKeyboardVisible}
        keyboardShouldPersistTaps="handled"
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
              title="Sign in!"
              marginBottom={10}
              fontFamily={FONTS.Samsungsharpsans_Bold}
            />
            <TextComponent
              color={COLORS.primary}
              fontSize={14}
              marginBottom={15}
              title="Welcome back! Please enter your details."
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />

            {/* Email Input */}
            <CustomTextInput
              placeholderText={"Email"}
              keyboardType={"email-address"}
              rightIcon={() => <SVG_IMAGES.Email_SVG />}
            />

            {/* Password Input */}
            <CustomTextInput
              placeholderText={"Password"}
              rightIcon={() => <SVG_IMAGES.Password_SVG />}
            />

            {/* Forgot Password */}
            <View style={styles.footerFlex}>
              <Text style={styles.loginText}>Forgot password? </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(SCREENS.AuthRoutes, {
                    screen: SCREENS.ResetPassword,
                  })
                }
              >
                <Text style={[styles.loginText, styles.loginLink]}>Reset</Text>
              </TouchableOpacity>
            </View>
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

export default LoginScreen;
