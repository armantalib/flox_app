import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Text,
  TouchableOpacity,
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
import VerifyIcon from "../../components/svgcomponent/VerifyIcon";
import { useKeyboard } from "../../providers/KeyboardOpenProvider";
import ReactNativeHapticFeedback from "react-native-haptic-feedback"; // Import haptic feedback
import { dataPost } from "../../utils/myAxios";

const VerifyYourEmailScreen = (props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { isKeyboardVisible } = useKeyboard();
  const [input, setInput] = useState({ code: '' });
  const {pData} = props.route.params;
  const [sendedCode, setSendedCode] = useState(pData?.emailCode);
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
      params: {
        pData:pData
      },
    });
  };

  const sendNewCode = async () => {
    let data = {
      email: pData?.email,
    }
    const endPoint = 'users/send-code';
    const response = await dataPost(endPoint, data);
    if (response?.success) {
      setSendedCode(response?.code)
    }
  }
  const isCheckValidation = useMemo(() => {
    return (
      input.code?.trim() == sendedCode
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
              title="Verify your email."
              marginBottom={10}
              fontFamily={FONTS.Samsungsharpsans_Bold}
            />
            <TextComponent
              color={COLORS.primary}
              fontSize={14}
              marginBottom={15}
              title="Please enter the four digit verification code sent to your email, make sure to check your spam too."
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />

            {/* Email Input */}
            <CustomTextInput
              placeholderText={"X X X X"}
              rightIcon={() => <VerifyIcon color={sendedCode==input.code?COLORS.success: '#2C2C2C'} />}
              value={input.code}
              maxLength={4}
              keyboardType={'number-pad'}
              onChangeText={(val) => setInput(prevState => ({ ...prevState, code: val }))}
            />

            {/* Resend Code */}
            <TouchableOpacity
              onPress={() => {
                sendNewCode()
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
            isDisable={!isCheckValidation}
            onPress={handleNextPress} // Use the haptic feedback handler
            title="Next"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default VerifyYourEmailScreen;