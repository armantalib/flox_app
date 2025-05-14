import {
  View,
  KeyboardAvoidingView,
  Platform,
  Animated,
  FlatList,
  ScrollView,
  Dimensions,
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
import { SCREENS } from "../../../constants/Screen";
import { SVG_IMAGES } from "../../../constants/images";
import ReactNativeHapticFeedback from "react-native-haptic-feedback"; // Importing haptic feedback
import { DatePickerModal } from "../../../components/DatePicker";
import moment from "moment";
import { PickerBottomSheet } from "../../../components/BottomSheets/PickerBottomSheet";
import { custom_data } from "../../../constants";
import PickerItem from "../../../components/BottomSheets/PickerItem";
import { normalize } from "../../../utils/Metrics";
import stylesG from "../../../assets/css/stylesG";
import { showToast } from "../../../components/General";

const tribes = [
  {
    id: "1",
    name: "The Antiflox app is designed to empower the community by creating a space where people can connect, share information, and access recovery tools. This screen is specifically for those who have not personally taken fluoroquinolones but are here on behalf of a loved one or someone they know.\n\nWhile your responses won’t be included in the app’s real-time database of statistics, your input is still invaluable in supporting someone affected by fluoroquinolone-associated conditions. By participating, you help provide valuable insights and encouragement to those in need.",
  },
];
const StepYesNoFlaxed = (props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;
  const [state, setState] = useState({ drug: '', answer: '' })
  const [drugData, setDrugData] = useState([])
  const [dateModal, setDateModal] = useState(false)
  const refWarn = useRef();
  const refDrug = useRef();
  const { pData } = props.route.params

  const addDrugFun = () => {
    if (state.drug && state.answer) {
      let data = [...drugData];
      // Check if the drug already exists (based on name)
      const exists = data.some(item => item.name === state.drug);

      if (!exists) {
        data.push({ name: state.drug, value: state.answer });
        setDrugData(data);
        setState({
          drug: '', answer: ''
        })
      }else{
        showToast("Drug already exist")
      }
    } else {
      showToast("Please Select Drug and Yes/No")
    }
  }

     const handleNextPress = () => {
        // Trigger haptic feedback on button press
        ReactNativeHapticFeedback.trigger("impactMedium");
        let obkCont = {...pData};
        obkCont.drug = drugData
        // Navigate to the next screen
        navigation.navigate(SCREENS.AuthRoutes, {
          screen: SCREENS.StepEight,
          params: { pData: obkCont },
        });
      };

        const isCheckValidation = useMemo(() => {
          return (
            (drugData.length ?? 0) >= 1
          );
        }, [drugData]);


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
                fontSize={23}
                title="Have you ever flared from any of the following after being floxed?"
                marginBottom={7}
                fontFamily={FONTS.Samsungsharpsans_Bold}
              />
            </View>
            <View
              style={[
                styles.container,
                {
                  height: Dimensions.get("screen").height * 0.44,
                  flexDirection: "row",
                  padding: 20,
                  marginBottom: 15,
                  paddingRight: 12,
                },
              ]}
            >
              <View style={{ flex: 1 }}>
                <View
                  style={[
                    commonStyle.itemFlex,
                    {
                      borderBottomWidth: 1,
                      borderBottomColor: "#EAEAEA",
                      paddingBottom: verticalScale(10),
                    },
                  ]}
                >
                  <View style={{ flex: 1 }}>
                    <TextComponent
                      color={COLORS.primary}
                      fontSize={18}
                      lineHeight={20}
                      title={"Drug"}
                      fontFamily={FONTS.Samsungsharpsans_Bold}
                    />
                  </View>
                  <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <TextComponent
                      color={COLORS.primary}
                      fontSize={18}
                      lineHeight={20}
                      title={"Yes/No"}
                      fontFamily={FONTS.Samsungsharpsans_Bold}
                      textAlign={"right"}
                    />
                  </View>
                </View>
                <ScrollView
                  contentContainerStyle={{ flexGrow: 1 }}
                  showsVerticalScrollIndicator={false}
                  onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                  )}
                  scrollEventThrottle={16}
                >
                  {drugData.map((item, index) => (
                    <View style={[commonStyle.item]}>
                      <View style={[commonStyle.itemFlex, commonStyle.itemBorder]}>
                        <View style={{ flex: 1 }}>
                          <TextComponent
                            color={COLORS.primary}
                            fontSize={15}
                            title={item.name}
                            fontFamily={FONTS.Samsungsharpsans_Medium}
                          />
                        </View>
                        <View style={{ flex: 1, alignItems: "flex-end" }}>
                          <View style={commonStyle.dropFlex}>
                            <TextComponent
                              color={COLORS.primary}
                              fontSize={22}
                              title={item.value}
                              fontFamily={FONTS.Samsungsharpsans_Medium}
                            />
                            <SVG_IMAGES.DownArrow1_SVG />
                          </View>
                        </View>
                      </View>
                    </View>
                  ))}
                </ScrollView>
                <View style={[commonStyle.itemFlex, commonStyle.itemBorder]}>
                  <TouchableOpacity
                    onPress={() => refDrug.current.open()}
                    style={{ flex: 1 }}>
                    <TextComponent
                      color={COLORS.primary}
                      fontSize={15}
                      title={state.drug ? state.drug : "Add drug"}
                      fontFamily={FONTS.Samsungsharpsans_Medium}
                    />
                  </TouchableOpacity>
                  <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <TouchableOpacity
                      onPress={() => refWarn.current.open()}
                      style={commonStyle.dropFlex}>
                      <TextComponent
                        color={COLORS.primary}
                        fontSize={18}
                        title={state.answer ? state?.answer : "Select"}
                        fontFamily={FONTS.Samsungsharpsans_Medium}
                      />
                      <SVG_IMAGES.DownArrow1_SVG />
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => addDrugFun()}
                  style={[{ width: '30%', height: normalize(25), backgroundColor: COLORS.black, borderRadius: normalize(8), alignSelf: 'center', marginTop: normalize(5) }, stylesG.contentCenter]}>
                  <Text style={[{ fontFamily: FONTS.Samsungsharpsans_Bold, fontSize: normalize(12), color: '#FFF' }]}>Add</Text>
                </TouchableOpacity>

              </View>
              {/* Custom Scroll Indicator */}
              <View
                style={{
                  width: 4,
                  backgroundColor: "#EAEAEA",
                  marginLeft: 15,
                  borderRadius: 2,
                  top: 70,
                  height: Dimensions.get("screen").height * 0.31,
                }}
              >
                <Animated.View
                  style={{
                    width: 4,
                    height: 100, // Scroll thumb height
                    backgroundColor: COLORS.primary,
                    borderRadius: 2,
                    transform: [
                      {
                        translateY: scrollY.interpolate({
                          inputRange: [0, 400], // Adjust based on content height
                          outputRange: [0, 300], // Adjust based on container height
                          extrapolate: "clamp",
                        }),
                      },
                    ],
                  }}
                />
              </View>
            </View>
            <TextComponent
              color={COLORS.primary}
              fontSize={14}
              title="This data will generate a personalized recovery graph that you can update regularly to track your progress over time."
              marginBottom={10}
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />
          </View>

          {/* Button with Haptic Feedback */}
          <BtnPrimary
            onPress={() => {
              // Trigger haptic feedback
              handleNextPress()

            }}
            isDisable={!isCheckValidation}
            marginBottom={10}
            title="Next"
          />
        </View>
      </View>

      <PickerBottomSheet
        {...props}
        refRBSheet={refDrug}
        heightLen={0.6}
        headerText='Please Select'
        closeSheet={() => refDrug.current.close()}
      >
        {custom_data.drugList.map((item, index) => (
          <PickerItem
            text={item.name}
            onPress={() => {
              setState(prevState => ({ ...prevState, drug: item.name }))
              refDrug.current.close()
            }}
          />
        ))}
      </PickerBottomSheet>

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
              setState(prevState => ({ ...prevState, answer: item.name }))
              refWarn.current.close()
            }}
          />
        ))}
      </PickerBottomSheet>
    </KeyboardAvoidingView>
  );
};

export default StepYesNoFlaxed;
