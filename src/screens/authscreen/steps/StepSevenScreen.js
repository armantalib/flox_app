import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useRef, useState } from "react";
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
import ReactNativeHapticFeedback from "react-native-haptic-feedback"; // Import for haptic feedback
import moment from "moment";
import { DatePickerModal } from "../../../components/DatePicker";
import { PickerBottomSheet } from "../../../components/BottomSheets/PickerBottomSheet";
import PickerItem from "../../../components/BottomSheets/PickerItem";
import { custom_data } from "../../../constants";

const StepSevenScreen = (props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [dateModal, setDateModal] = useState(false)
  const [state, setState] = useState({ consume_date: '', warn_doctor: '', supportive_doctor: '' })
  const refWarn = useRef();
  const refSupportive = useRef();

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
                fontSize={32}
                title="Please share your experience."
                marginBottom={14}
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
                  What date did you consume the FQ?
                </Text>
                <TouchableOpacity
                  onPress={() => setDateModal(true)}
                  style={styles.dropbutton}>
                  <Text style={styles.text}>{state.consume_date ? state.consume_date : 'Select'}</Text>
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
                  Did your doctor warn you about potential side effects?
                </Text>
                <TouchableOpacity
                  onPress={() => refWarn.current.open()}
                  style={styles.dropbutton}>
                  <Text style={styles.text}>{state.warn_doctor ? state.warn_doctor : 'Select'}</Text>
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
                  Was your doctor supportive after and provided you with care?
                </Text>
                <TouchableOpacity 
                onPress={() => refSupportive.current.open()}
                style={styles.dropbutton}>
                  <Text style={styles.text}>{state.supportive_doctor ? state.supportive_doctor : 'Select'}</Text>
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

          {/* Button with haptic feedback */}
          <BtnPrimary
            onPress={() => {
              // Trigger haptic feedback on button press
              ReactNativeHapticFeedback.trigger("impactMedium");

              // Navigate to the next screen
              navigation.navigate(SCREENS.AuthRoutes, {
                screen: SCREENS.StepYesNoFlaxed,
              });
            }}
            marginBottom={10}
            title="Next"
          />
        </View>
      </View>
      <DatePickerModal
        show={dateModal}
        close={() => { setDateModal(false) }}
        maximumDate={new Date()}
        confirmDate={(val) => {
          let date = moment(val).format('YYYY-MM-DD')
          setState(prevState => ({ ...prevState, consume_date: date }))

        }}
      />

      <PickerBottomSheet
        {...props}
        refRBSheet={refWarn}
        heightLen={0.4}
        headerText='Please Select'
        closeSheet={() => refWarn.current.close()}
      >
        {custom_data.yes_no.map((item, index) => (
          <PickerItem
            text={item.name}
            onPress={() => {
              setState(prevState => ({ ...prevState, warn_doctor: item.name }))
              refWarn.current.close()
            }}
          />
        ))}
      </PickerBottomSheet>

      <PickerBottomSheet
        {...props}
        refRBSheet={refSupportive}
        heightLen={0.4}
        headerText='Please Select'
        closeSheet={() => refSupportive.current.close()}
      >
        {custom_data.yes_no.map((item, index) => (
          <PickerItem
            text={item.name}
            onPress={() => {
              setState(prevState => ({ ...prevState, supportive_doctor: item.name }))
              refSupportive.current.close()
            }}
          />
        ))}
      </PickerBottomSheet>
    </KeyboardAvoidingView>
  );
};

export default StepSevenScreen;
