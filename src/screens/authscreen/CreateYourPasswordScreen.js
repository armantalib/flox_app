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
import stylesG from "../../assets/css/stylesG";
import { normalize } from "../../utils/Metrics";

const CreateYourPasswordScreen = (props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { isKeyboardVisible } = useKeyboard();
  const [input, setInput] = useState({ password: '', confirm_password: '' });
  const {pData} = props.route.params;
  // Haptic feedback options
  const hapticOptions = {
    enableVibrateFallback: true, // Fallback to vibration if haptic feedback is not supported
    ignoreAndroidSystemSettings: false, // Respect system settings on Android
  };

  const handleNextPress = () => {
    // Trigger medium haptic feedback
    ReactNativeHapticFeedback.trigger("impactMedium", hapticOptions);

    let obj = pData;
    obj.password = input.password

    // Navigate to the StepOne screen
    navigation.navigate(SCREENS.AuthRoutes, {
      screen: SCREENS.StepOne,
      params: {
        pData:obj
      },
    });
  };

  const isCheckValidation = useMemo(() => {
    let checkPassword = input.password == input.confirm_password
    return (
      input.password?.trim() &&
      (input.password?.length ?? 0) >= 6 &&
      input.confirm_password?.trim() &&
      checkPassword
    );
  }, [input]);

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
              title="Create your password."
              marginBottom={10}
              fontFamily={FONTS.Samsungsharpsans_Bold}
            />
            <TextComponent
              color={COLORS.primary}
              fontSize={13}
              marginBottom={15}
              title="Please enter the password you would like to use for your account, you can reset this by logging out and selecting forgot password."
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />
     {(input.password?.length ?? 0) < 6 && (input.password?.length ?? 0) > 0 ?
              <Text style={[stylesG.fontBold, { color: COLORS.danger, marginBottom: normalize(5) }]}>Password length must be at least 6 character</Text> : null}
            {/* Password Input */}
            <CustomTextInput
              placeholderText={"Password"}
              rightIcon={() => <SVG_IMAGES.Password_SVG />}
              value={input.password}
              onChangeText={(val) => setInput(prevState => ({ ...prevState, password: val }))}
              secureTextEntry={true}
            />
            {/* Confirm Password Input */}
            <CustomTextInput
              placeholderText={"Confirm password"}
              rightIcon={() => <SVG_IMAGES.Password_SVG />}
              value={input.confirm_password}
              onChangeText={(val) => setInput(prevState => ({ ...prevState, confirm_password: val }))}
              secureTextEntry={true}
            />
          </View>

          {/* Button */}
          <BtnPrimary
            onPress={handleNextPress} // Use the haptic feedback handler
            isDisable={!isCheckValidation}
            marginBottom={10}
            title="Next"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateYourPasswordScreen;