import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useMemo, useRef, useState } from "react";
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
import { PickerBottomSheet } from "../../../components/BottomSheets/PickerBottomSheet";
import { custom_data } from "../../../constants";
import PickerItem from "../../../components/BottomSheets/PickerItem";
import CustomTextInput from "../../../components/CustomTextInput";

const StepFourScreen = (props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const refConsume = useRef();
  const refHowMany = useRef();
  const refCombine = useRef();
  const refRate = useRef();
  const [state, setState] = useState({ consume: '', pills: '', combine: '', rate_reaction: '' })
  const {pData} = props.route.params
  // Haptic feedback options
  const hapticOptions = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const handleNextPress = () => {
    // Trigger medium haptic feedback
    ReactNativeHapticFeedback.trigger("impactMedium", hapticOptions);
    let obkCont = {...pData,...state};
    // Navigate to StepFive
    navigation.navigate(SCREENS.AuthRoutes, {
      screen: SCREENS.StepFive,
      params: {
        pData:obkCont
      },
    });
  };

  const isCheckValidation = useMemo(() => {
    return (
      state.consume?.trim() &&
      state.combine?.trim() &&
      state.rate_reaction?.trim() &&
      state.pills?.trim()
    );
  }, [state]);

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
                <TouchableOpacity
                  onPress={() => refConsume.current.open()}
                  style={styles.dropbutton}>
                  <Text style={styles.text}>{state.consume ? state.consume : 'Select'}</Text>
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
                <TouchableOpacity
                  onPress={() => refHowMany.current.open()}
                  style={styles.dropbutton}>
                  <Text style={styles.text}>{state.pills ? "Pills: " + state.pills : 'Select'}</Text>
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
                <TouchableOpacity
                  onPress={() => refCombine.current.open()}
                  style={styles.dropbutton}>
                  <Text style={styles.text}>{state.combine ? state.combine : 'Select'}</Text>
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
                <TouchableOpacity
                  onPress={() => refRate.current.open()}
                  style={styles.dropbutton}>
                  <Text style={styles.text}>{state.rate_reaction ? state.rate_reaction : 'Select'}</Text>
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
            // isDisable={!isCheckValidation}
            marginBottom={10}
            title="Next"
          />
        </View>
      </View>

      <PickerBottomSheet
        {...props}
        refRBSheet={refConsume}
        heightLen={0.6}
        headerText='Please Select'
        closeSheet={() => refConsume.current.close()}
      >
        {custom_data.fq_consume.map((item, index) => (
          <PickerItem
            text={item.name}
            onPress={() => {
              setState(prevState => ({ ...prevState, consume: item.name }))
              refConsume.current.close()
            }}
          />
        ))}
      </PickerBottomSheet>

      <PickerBottomSheet
        {...props}
        refRBSheet={refHowMany}
        heightLen={0.6}
        headerText='Please Select'
        closeSheet={() => refHowMany.current.close()}
      >
        {custom_data.pil_consume.map((item, index) => (
          <PickerItem
            text={'Pills: ' + item.name}
            onPress={() => {
              setState(prevState => ({ ...prevState, pills: item.name }))
              refHowMany.current.close()
            }}
          />
        ))}
      </PickerBottomSheet>

      <PickerBottomSheet
        {...props}
        refRBSheet={refCombine}
        heightLen={0.6}
        headerText='Please Select'
        closeSheet={() => refCombine.current.close()}
      >
        {custom_data.fq_combine.map((item, index) => (
          <PickerItem
            text={item.name}
            onPress={() => {
              setState(prevState => ({ ...prevState, combine: item.name }))
              refCombine.current.close()
            }}
          />
        ))}
      </PickerBottomSheet>

      <PickerBottomSheet
        {...props}
        refRBSheet={refRate}
        heightLen={0.5}
        headerText='Please Select'
        closeSheet={() => refRate.current.close()}
      >
        {custom_data.severity_data.map((item, index) => (
          <PickerItem
            text={item.name}
            onPress={() => {
              setState(prevState => ({ ...prevState, rate_reaction: item.name }))
              refRate.current.close()
            }}
          />
        ))}
      </PickerBottomSheet>
    </KeyboardAvoidingView>
  );
};

export default StepFourScreen;
