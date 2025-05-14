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
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { dataPost } from "../../utils/myAxios";
import { storeData } from "../../utils/async_storage";
import { setUser } from "../../storeTolkit/userSlice";

const LoginScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { isKeyboardVisible } = useKeyboard();
  const [input, setInput] = useState({ email: 'marmantalib@gmail.com', password: '123456' });
  const [loader, setLoader] = useState(false)
  const dispatch = useDispatch();

  // Haptic feedback options
  const hapticOptions = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const handleNextPress = () => {
    // Trigger medium haptic feedback
    ReactNativeHapticFeedback.trigger("impactMedium", hapticOptions);

    loginUser();
  };

  const loginUser = async () => {
    const fcmToken = await AsyncStorage.getItem('fcmToken');
    setLoader(true)
    let data = {
      email: input?.email,
      password: input?.password,
      fcmtoken: fcmToken ? fcmToken : '',
    }
    const endPoint = 'auth';
    const response = await dataPost(endPoint, data);
    setLoader(false)
    if (response?.success) {
      await storeData('token', response?.token)
      await storeData('user_role', response?.user?.type);
      await storeData('user_data', response?.user);
      dispatch(setUser(response?.user));
      // Navigate to the home screen

      if (response?.fq_antibiotic == null && response?.user?.fq_antibiotic == true) {
        navigation.navigate(SCREENS.AuthRoutes, {
          screen: SCREENS.StepThree,
        });
      } else {
        navigation.navigate(SCREENS.TabRoutes, {
          screen: SCREENS.TabHome,
        });
      }
    }
  }

  const isCheckValidation = useMemo(() => {
    let checkEmail = validateEmail(input.email)
    return (
      input.password?.trim() &&
      input.email?.trim() &&
      checkEmail
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
              value={input.email}
              onChangeText={(val) => setInput(prevState => ({ ...prevState, email: val }))}
            />

            {/* Password Input */}
            <CustomTextInput
              placeholderText={"Password"}
              rightIcon={() => <SVG_IMAGES.Password_SVG />}
              secureTextEntry={true}
              value={input.password}
              onChangeText={(val) => setInput(prevState => ({ ...prevState, password: val }))}
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
            loader={loader}
            isDisable={!isCheckValidation}
            marginBottom={10}
            title="Login"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
