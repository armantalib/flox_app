import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
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

const StepFourScreen = () => {
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

    // Navigate to StepFive
    navigation.navigate(SCREENS.AuthRoutes, {
      screen: SCREENS.StepFive,
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
                paddingHorizontal: 8,
              }}
            >
              <TextComponent
                color={COLORS.primary}
                fontSize={20}
                title="Please provide details about the fluoroquinolone (FQ) you consumed."
                marginBottom={10}
                lineHeight={24}
                fontFamily={FONTS.Samsungsharpsans_Bold}
              />
            </View>

            <View style={styles.container}>
              <View
                style={[
                  styles.optionContainer,
                  styles.topOption,
                  {
                    paddingVertical: verticalScale(10),
                    gap: 12,
                  },
                ]}
              >
                <Text style={[styles.optionText, styles.optionText1]}>
                  Which FQ did you consume?
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
                    paddingVertical: verticalScale(10),
                    gap: 12,
                  },
                ]}
              >
                <Text style={[styles.optionText, styles.optionText1]}>
                  How many pills did you consume before stopping?
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
                    paddingVertical: verticalScale(10),
                    gap: 12,
                  },
                ]}
              >
                <Text style={[styles.optionText, styles.optionText1]}>
                  Did you combine the FQ with any of the following options?
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
                    paddingVertical: verticalScale(10),
                    gap: 12,
                  },
                ]}
              >
                <Text style={[styles.optionText, styles.optionText1]}>
                  Rate the severity of your reaction
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

export default StepFourScreen;
