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
import PickerItem from "../../../components/BottomSheets/PickerItem";
import { custom_data } from "../../../constants";
import { searchFunctions } from "../../../utils/Helper";

const countryCodes = require('../../../json/CountryCodes.json')

const StepThreeScreen = (props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const refGender = useRef();
  const refAge = useRef();
  const refCountry = useRef();
  const [state, setState] = useState({ gender: '', age: '', country: '' })
  const [countryData, setCountryData] = useState(countryCodes)

  // Haptic feedback options
  const hapticOptions = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const handleNextPress = () => {
    // Trigger medium haptic feedback
    ReactNativeHapticFeedback.trigger("impactMedium", hapticOptions);

    // Navigate to StepFour
    navigation.navigate(SCREENS.AuthRoutes, {
      screen: SCREENS.StepFour,
      params: {
        pData:state
      },
    });
  };

  const isCheckValidation = useMemo(() => {
      return (
        state.gender?.trim() &&
        state.age?.trim() &&
        state.country?.trim()
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
                paddingHorizontal: 5,
              }}
            >
              <TextComponent
                color={COLORS.primary}
                fontSize={32}
                title="Add some details about yourself!"
                marginBottom={20}
                fontFamily={FONTS.Samsungsharpsans_Bold}
              />
            </View>

            <View style={styles.container}>
              <View
                style={[
                  styles.optionContainer,
                  styles.topOption,
                  {
                    paddingVertical: verticalScale(20),
                    gap: 12,
                  },
                ]}
              >
                <Text style={[styles.optionText, styles.optionText1]}>
                  Select your gender
                </Text>
                <TouchableOpacity
                  onPress={() => refGender.current.open()}
                  style={styles.dropbutton}>
                  <Text style={styles.text}>{state.gender ? state.gender : 'Select'}</Text>
                  <SVG_IMAGES.DownArrow_SVG />
                </TouchableOpacity>
              </View>
              <View
                style={[
                  styles.optionContainer,
                  styles.topOption,
                  {
                    paddingVertical: verticalScale(20),
                    gap: 12,
                  },
                ]}
              >
                <Text style={[styles.optionText, styles.optionText1]}>
                  Select your age
                </Text>
                <TouchableOpacity
                  onPress={() => refAge.current.open()}
                  style={styles.dropbutton}>
                  <Text style={styles.text}>{state.age ? 'Age: ' + state.age : 'Select'}</Text>
                  <SVG_IMAGES.DownArrow_SVG />
                </TouchableOpacity>
              </View>
              <View
                style={[
                  styles.optionContainer,
                  styles.bottomOption,
                  {
                    paddingVertical: verticalScale(20),
                    gap: 12,
                  },
                ]}
              >
                <Text style={[styles.optionText, styles.optionText1]}>
                  What country are you from?
                </Text>
                <TouchableOpacity
                  onPress={() => refCountry.current.open()}
                  style={styles.dropbutton}>
                  <Text style={styles.text}>{state.country ? state.country : 'Select'}</Text>
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
            isDisable={!isCheckValidation}
            marginBottom={10}
            title="Next"
          />
        </View>
      </View>

      <PickerBottomSheet
        {...props}
        refRBSheet={refGender}
        heightLen={0.4}
        headerText='Select Gender'
        closeSheet={() => refGender.current.close()}
      >
        {custom_data.gender_data.map((item, index) => (
          <PickerItem
            text={item.name}
            onPress={() => {
              setState(prevState => ({ ...prevState, gender: item.name }))
              refGender.current.close()
            }}
          />
        ))}
      </PickerBottomSheet>

      <PickerBottomSheet
        {...props}
        refRBSheet={refAge}
        heightLen={0.6}
        headerText='Select Age'
        closeSheet={() => refAge.current.close()}
      >
        {custom_data.age_data.map((item, index) => (
          <PickerItem
            text={'Age: ' + item.name}
            onPress={() => {
              setState(prevState => ({ ...prevState, age: item.name }))
              refAge.current.close()
            }}
          />
        ))}
      </PickerBottomSheet>

      <PickerBottomSheet
        {...props}
        refRBSheet={refCountry}
        heightLen={0.8}
        headerText='Select Country'
        closeSheet={() => {
          refCountry.current.close()
        }}
        isSearch
        onChangeText={(val) => {
          if (!val) {
            setCountryData(countryCodes)
            return
          }
          const searchData = searchFunctions(val, countryCodes)
          setCountryData(searchData)
        }}
      >
        {countryData.map((item, index) => (
          <PickerItem
            text={item.name}
            onPress={() => {
              setState(prevState => ({ ...prevState, country: item.name }))
              refCountry.current.close()
            }}
          />
        ))}
      </PickerBottomSheet>
    </KeyboardAvoidingView>
  );
};

export default StepThreeScreen;
