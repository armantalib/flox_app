import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useMemo, useState } from "react";
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
import { validateEmail } from "../../utils/Regex";
import { dataPost } from "../../utils/myAxios";
import stylesG from "../../assets/css/stylesG";
import { normalize } from "../../utils/Metrics";

const CreateYourAccountScreen = (props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { isKeyboardVisible } = useKeyboard();
  const [loader, setLoader] = useState(false)
  const [input, setInput] = useState({ email: '', username: '' });

  // Haptic feedback options
  const hapticOptions = {
    enableVibrateFallback: true, // Fallback to vibration if haptic feedback is not supported
    ignoreAndroidSystemSettings: false, // Respect system settings on Android
  };

  const handleNextPress = () => {
    // Trigger medium haptic feedback
    ReactNativeHapticFeedback.trigger("impactMedium", hapticOptions);
    sendCodeToEmail()
  };

  const sendCodeToEmail = async () => {
    setLoader(true)
    let data = {
      email: input?.email?.toLocaleLowerCase().trim(),
    }
    const endPoint = 'users/send-code';
    const response = await dataPost(endPoint, data);
    setLoader(false)
    if (response?.success) {
      console.log("Sign Up Code", response?.code);
      // Navigate to the VerifyYourEmail screen
      navigation.navigate(SCREENS.AuthRoutes, {
        screen: SCREENS.VerifyYourEmail,
        params: {
          pData: {
            ...input,
            emailCode: response?.code
          }
        },
      });
    }
  }

  const isCheckValidation = useMemo(() => {
    let checkEmail = validateEmail(input.email)
    return (
      input.username?.trim() &&
      input.email?.trim() &&
      !(/\s/.test(input.username)) &&
      checkEmail
    );
  }, [input]);
  const checkSpaceUsername = useMemo(() => {
    return (
      /\s/.test(input.username)
    );
  }, [input]);

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
            {checkSpaceUsername && (input.username?.length ?? 0) > 0 ?
              <Text style={[stylesG.fontBold, { color: COLORS.danger, marginBottom: normalize(5) }]}>Space not allowed in username</Text> : null}
            {/* Password Input */}
            <CustomTextInput
              placeholderText={"Username"}
              rightIcon={() => <SVG_IMAGES.User_SVG />}
              value={input.username}
              onChangeText={(val) => setInput(prevState => ({ ...prevState, username: val }))}
            />
            {!validateEmail(input.email) && (input.email?.length ?? 0) > 0 ?
              <Text style={[stylesG.fontBold, { color: COLORS.danger, marginBottom: normalize(5) }]}>Please enter valid email</Text> : null}
            <CustomTextInput
              placeholderText={"Email"}
              rightIcon={() => <SVG_IMAGES.Email_SVG />}
              value={input.email}
              onChangeText={(val) => setInput(prevState => ({ ...prevState, email: val }))}
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
            isDisable={!isCheckValidation}
            marginBottom={10}
            loader={loader}
            title="Next"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateYourAccountScreen;