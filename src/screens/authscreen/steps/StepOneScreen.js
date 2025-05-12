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
import { SCREENS } from "../../../constants/Screen";
import { SVG_IMAGES } from "../../../constants/images";
import ReactNativeHapticFeedback from "react-native-haptic-feedback"; // Import haptic feedback

const StepOneScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const options = [
    { id: 1, text: `Yes, I have personally\nconsumed an FQ myself` },
    { id: 2, text: `No, a loved one or\nsomeone I know has` },
  ];
  const [selectedOption, setSelectedOption] = useState(1);

  // Haptic feedback options
  const hapticOptions = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const handleNextPress = () => {
    // Trigger medium haptic feedback
    ReactNativeHapticFeedback.trigger("impactMedium", hapticOptions);

    // Navigate to StepTwo
    navigation.navigate(SCREENS.AuthRoutes, {
      screen: SCREENS.StepTwo,
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
            <TextComponent
              color={COLORS.primary}
              fontSize={20}
              lineHeight={24}
              title="Have you personally been affected by a fluoroquinolone (FQ) antibiotic?"
              marginBottom={14}
              fontFamily={FONTS.Samsungsharpsans_Bold}
            />

            <View style={styles.container}>
              {options.map((option, index) => (
                <TouchableOpacity
                  key={option.id}
                  style={[
                    styles.optionContainer,
                    selectedOption === option.id ? styles.selectedOption : {},
                    index === 0 ? styles.topOption : styles.bottomOption,
                  ]}
                  onPress={() => setSelectedOption(option.id)}
                >
                  <Text style={styles.optionText}>{option.text}</Text>
                  <View style={styles.iconContainer}>
                    {selectedOption === option.id ? (
                      <SVG_IMAGES.CheckIcon_SVG />
                    ) : (
                      <SVG_IMAGES.UnCheckIcon_SVG />
                    )}
                  </View>
                </TouchableOpacity>
              ))}
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

export default StepOneScreen;
