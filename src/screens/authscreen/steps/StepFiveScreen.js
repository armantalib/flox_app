import React, { useMemo, useRef, useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Animated,
  ScrollView,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
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
import ReactNativeHapticFeedback from "react-native-haptic-feedback"; // Import haptic feedback
import { custom_data } from "../../../constants";
import { normalize } from "../../../utils/Metrics";

const tagsData = [
  { id: 1, title: "Tendonitis" },
  { id: 2, title: "Neuropathy" },
  { id: 3, title: "Fatigue" },
  { id: 4, title: "Muscle pains" },
  { id: 5, title: "Fatigue" },
  { id: 6, title: "Neuropathy" },
];

const StepFiveScreen = (props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;
  const [selectedTags, setSelectedTags] = useState([]); // Multi-select state
  const [tendonData, setTendonData] = useState(custom_data.tendon_data);
  const [neuropathyData, setNeuropathyData] = useState(custom_data.neuropathy_data);
  const [CentralData, setCentralData] = useState(custom_data.central_nerve_data);
  const [AutonomicData, setAutonomicData] = useState(custom_data.autonomic_nerve);
  const [GastrointestinalData, setGastrointestinalData] = useState(custom_data.gastrointestinal_data);
  const [MitochondrialData, setMitochondrialData] = useState(custom_data.mitochondrial_data);
  const [VisionData, setVisionData] = useState(custom_data.vision_data);
  const [SkinData, setSkinData] = useState(custom_data.skin_data);
  const [CardiovascularData, setCardiovascularData] = useState(custom_data.cardiovascular_data);
  const [HearingData, setHearingData] = useState(custom_data.hearing_data);
  const [HormonalData, setHormonalData] = useState(custom_data.hormonal_data);
  const [state, setState] = useState({ tendon_issue_resolved: [], neuropathy_nerve_resolved: [], central_nerve_resolved: [], autonomic_nerve_resolved: [], gastrointestinal_resolved: [], mitochondrial_resolved: [], vision_resolved: [], skin_hair_resolved: [], cardio_resolved: [], hearing_resolved: [], hormonal_resolved: [], })
  const { pData } = props.route.params

  // Toggle tag selection
  const toggleTag = (id) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(id)
        ? prevTags.filter((tag) => tag !== id)
        : [...prevTags, id]
    );
  };

  const toggleTendon = (key, value) => {
    setState((prevState) => {
      const currentArray = prevState[key] || [];
      const exists = currentArray.includes(value);
      return {
        ...prevState,
        [key]: exists
          ? currentArray.filter((item) => item !== value)
          : [...currentArray, value],
      };
    });
  };

  // Dynamic Scroll Indicator Calculation
  const tagHeight = 380; // Approximate height per tag including margin
  const visibleHeight = Dimensions.get("screen").height * 0.38; // Visible scroll area
  const contentHeight = tagsData.length * tagHeight; // Total scrollable content height
  const indicatorHeight = Math.max(
    (visibleHeight / contentHeight) * visibleHeight,
    30 // Minimum size for usability
  );

  const handleNextPress = () => {
    // Trigger haptic feedback on button press
    ReactNativeHapticFeedback.trigger("impactMedium");
    let obkCont = { ...pData, ...state };
    // Navigate to the next screen with the selected symptoms
    navigation.navigate(SCREENS.AuthRoutes, {
      screen: SCREENS.StepSix,
      params: { pData: obkCont },
    });
  };

  const isCheckValidation = useMemo(() => {
    return (
      (state.tendon_issue_resolved?.length ?? 0) >= 1 &&
      (state.neuropathy_nerve_resolved?.length ?? 0) >= 1 &&
      (state.cardio_resolved?.length ?? 0) >= 1 &&
      (state.autonomic_nerve_resolved?.length ?? 0) >= 1 &&
      (state.gastrointestinal_resolved?.length ?? 0) >= 1 &&
      (state.mitochondrial_resolved?.length ?? 0) >= 1 &&
      (state.vision_resolved?.length ?? 0) >= 1 &&
      (state.skin_hair_resolved?.length ?? 0) >= 1 &&
      (state.cardio_resolved?.length ?? 0) >= 1 &&
      (state.hearing_resolved?.length ?? 0) >= 1 &&
      (state.hormonal_resolved?.length ?? 0) >= 1
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
        <View style={[commonStyle.wrapper, { flex: 1 }]}>
          <View style={styles.fullCenter}>
            <View style={{ paddingHorizontal: 8 }}>
              <TextComponent
                color={COLORS.primary}
                fontSize={18}
                title="Please list ALL the symptoms you have experienced, including those that have resolved."
                marginBottom={10}
                lineHeight={24}
                fontFamily={FONTS.Samsungsharpsans_Bold}
              />
            </View>

            {/* Scrollable Tags Container */}
            <View
              style={[
                styles.container,
                {
                  height: visibleHeight,
                  flexDirection: "row",
                  padding: 17,
                },
              ]}
            >
              <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                  { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
              >
                <TextComponent
                  color={COLORS.primary}
                  fontSize={14}
                  title="Tendon & Musculoskeletal Issues"
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                  marginBottom={7}
                />
                <View
                  style={[
                    commonStyle.row,
                    {
                      marginBottom: 10,
                    },
                  ]}
                >
                  {tendonData.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      style={[
                        commonStyle.tag,
                        {
                          alignSelf: "flex-start",
                          paddingHorizontal: 15,
                          paddingVertical: 10,
                          margin: 5,
                        },
                        state.tendon_issue_resolved.includes(item.name)
                          ? commonStyle.selectedTag
                          : commonStyle.unselectedTag,
                      ]}
                      onPress={() => toggleTendon('tendon_issue_resolved', item.name)}
                    >
                      <Text
                        style={[
                          commonStyle.tagText,
                          { flexWrap: "wrap", textAlign: "center" },
                          state.tendon_issue_resolved.includes(item.name) &&
                          commonStyle.selectedText,
                        ]}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                {/* Neuropathy (Nerve Damage) */}

                <TextComponent
                  color={COLORS.primary}
                  fontSize={14}
                  title="Neuropathy (Nerve Damage)"
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                  marginBottom={7}
                />
                <View
                  style={[
                    commonStyle.row,
                    {
                      marginBottom: 10,
                    },
                  ]}
                >
                  {neuropathyData.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      style={[
                        commonStyle.tag,
                        {
                          alignSelf: "flex-start",
                          paddingHorizontal: 15,
                          paddingVertical: 10,
                          margin: 5,
                        },
                        state.neuropathy_nerve_resolved.includes(item.name)
                          ? commonStyle.selectedTag
                          : commonStyle.unselectedTag,
                      ]}
                      onPress={() => toggleTendon('neuropathy_nerve_resolved', item.name)}
                    >
                      <Text
                        style={[
                          commonStyle.tagText,
                          { flexWrap: "wrap", textAlign: "center" },
                          state.neuropathy_nerve_resolved.includes(item.name) &&
                          commonStyle.selectedText,
                        ]}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>


                {/* Central Nervous System (CNS) Symptoms */}

                <TextComponent
                  color={COLORS.primary}
                  fontSize={14}
                  title="Central Nervous System (CNS) Symptoms"
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                  marginBottom={7}
                />
                <View
                  style={[
                    commonStyle.row,
                    {
                      marginBottom: 10,
                    },
                  ]}
                >
                  {CentralData.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      style={[
                        commonStyle.tag,
                        {
                          alignSelf: "flex-start",
                          paddingHorizontal: 15,
                          paddingVertical: 10,
                          margin: 5,
                        },
                        state.central_nerve_resolved.includes(item.name)
                          ? commonStyle.selectedTag
                          : commonStyle.unselectedTag,
                      ]}
                      onPress={() => toggleTendon('central_nerve_resolved', item.name)}
                    >
                      <Text
                        style={[
                          commonStyle.tagText,
                          { flexWrap: "wrap", textAlign: "center" },
                          state.central_nerve_resolved.includes(item.name) &&
                          commonStyle.selectedText,
                        ]}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>



                {/*  Autonomic Nervous System Dysfunction (Dysautonomia, POTS-like Symptoms) */}

                <TextComponent
                  color={COLORS.primary}
                  fontSize={14}
                  title="Autonomic Nervous System Dysfunction (Dysautonomia, POTS-like Symptoms)"
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                  marginBottom={7}
                />
                <View
                  style={[
                    commonStyle.row,
                    {
                      marginBottom: 10,
                    },
                  ]}
                >
                  {AutonomicData.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      style={[
                        commonStyle.tag,
                        {
                          alignSelf: "flex-start",
                          paddingHorizontal: 15,
                          paddingVertical: 10,
                          margin: 5,
                        },
                        state.autonomic_nerve_resolved.includes(item.name)
                          ? commonStyle.selectedTag
                          : commonStyle.unselectedTag,
                      ]}
                      onPress={() => toggleTendon('autonomic_nerve_resolved', item.name)}
                    >
                      <Text
                        style={[
                          commonStyle.tagText,
                          { flexWrap: "wrap", textAlign: "center" },
                          state.autonomic_nerve_resolved.includes(item.name) &&
                          commonStyle.selectedText,
                        ]}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>


                {/*  Gastrointestinal Issues */}

                <TextComponent
                  color={COLORS.primary}
                  fontSize={14}
                  title="Gastrointestinal Issues"
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                  marginBottom={7}
                />
                <View
                  style={[
                    commonStyle.row,
                    {
                      marginBottom: 10,
                    },
                  ]}
                >
                  {GastrointestinalData.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      style={[
                        commonStyle.tag,
                        {
                          alignSelf: "flex-start",
                          paddingHorizontal: 15,
                          paddingVertical: 10,
                          margin: 5,
                        },
                        state.gastrointestinal_resolved.includes(item.name)
                          ? commonStyle.selectedTag
                          : commonStyle.unselectedTag,
                      ]}
                      onPress={() => toggleTendon('gastrointestinal_resolved', item.name)}
                    >
                      <Text
                        style={[
                          commonStyle.tagText,
                          { flexWrap: "wrap", textAlign: "center" },
                          state.gastrointestinal_resolved.includes(item.name) &&
                          commonStyle.selectedText,
                        ]}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>


                {/*  Mitochondrial Dysfunction & Fatigue */}

                <TextComponent
                  color={COLORS.primary}
                  fontSize={14}
                  title="Mitochondrial Dysfunction & Fatigue"
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                  marginBottom={7}
                />
                <View
                  style={[
                    commonStyle.row,
                    {
                      marginBottom: 10,
                    },
                  ]}
                >
                  {MitochondrialData.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      style={[
                        commonStyle.tag,
                        {
                          alignSelf: "flex-start",
                          paddingHorizontal: 15,
                          paddingVertical: 10,
                          margin: 5,
                        },
                        state.mitochondrial_resolved.includes(item.name)
                          ? commonStyle.selectedTag
                          : commonStyle.unselectedTag,
                      ]}
                      onPress={() => toggleTendon('mitochondrial_resolved', item.name)}
                    >
                      <Text
                        style={[
                          commonStyle.tagText,
                          { flexWrap: "wrap", textAlign: "center" },
                          state.mitochondrial_resolved.includes(item.name) &&
                          commonStyle.selectedText,
                        ]}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>


                {/* Vision & Eye Issues */}

                <TextComponent
                  color={COLORS.primary}
                  fontSize={14}
                  title="Vision & Eye Issues"
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                  marginBottom={7}
                />
                <View
                  style={[
                    commonStyle.row,
                    {
                      marginBottom: 10,
                    },
                  ]}
                >
                  {VisionData.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      style={[
                        commonStyle.tag,
                        {
                          alignSelf: "flex-start",
                          paddingHorizontal: 15,
                          paddingVertical: 10,
                          margin: 5,
                        },
                        state.vision_resolved.includes(item.name)
                          ? commonStyle.selectedTag
                          : commonStyle.unselectedTag,
                      ]}
                      onPress={() => toggleTendon('vision_resolved', item.name)}
                    >
                      <Text
                        style={[
                          commonStyle.tagText,
                          { flexWrap: "wrap", textAlign: "center" },
                          state.vision_resolved.includes(item.name) &&
                          commonStyle.selectedText,
                        ]}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>


                {/* Skin & Hair Changes*/}

                <TextComponent
                  color={COLORS.primary}
                  fontSize={14}
                  title="Skin & Hair Changes"
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                  marginBottom={7}
                />
                <View
                  style={[
                    commonStyle.row,
                    {
                      marginBottom: 10,
                    },
                  ]}
                >
                  {SkinData.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      style={[
                        commonStyle.tag,
                        {
                          alignSelf: "flex-start",
                          paddingHorizontal: 15,
                          paddingVertical: 10,
                          margin: 5,
                        },
                        state.skin_hair_resolved.includes(item.name)
                          ? commonStyle.selectedTag
                          : commonStyle.unselectedTag,
                      ]}
                      onPress={() => toggleTendon('skin_hair_resolved', item.name)}
                    >
                      <Text
                        style={[
                          commonStyle.tagText,
                          { flexWrap: "wrap", textAlign: "center" },
                          state.skin_hair_resolved.includes(item.name) &&
                          commonStyle.selectedText,
                        ]}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>


                {/*   Cardiovascular Symptoms   */}

                <TextComponent
                  color={COLORS.primary}
                  fontSize={14}
                  title="Cardiovascular Symptoms"
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                  marginBottom={7}
                />
                <View
                  style={[
                    commonStyle.row,
                    {
                      marginBottom: 10,
                    },
                  ]}
                >
                  {CardiovascularData.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      style={[
                        commonStyle.tag,
                        {
                          alignSelf: "flex-start",
                          paddingHorizontal: 15,
                          paddingVertical: 10,
                          margin: 5,
                        },
                        state.cardio_resolved.includes(item.name)
                          ? commonStyle.selectedTag
                          : commonStyle.unselectedTag,
                      ]}
                      onPress={() => toggleTendon('cardio_resolved', item.name)}
                    >
                      <Text
                        style={[
                          commonStyle.tagText,
                          { flexWrap: "wrap", textAlign: "center" },
                          state.cardio_resolved.includes(item.name) &&
                          commonStyle.selectedText,
                        ]}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>


                {/*   Hearing & Tinnitus Issues   */}

                <TextComponent
                  color={COLORS.primary}
                  fontSize={14}
                  title="Hearing & Tinnitus Issues"
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                  marginBottom={7}
                />
                <View
                  style={[
                    commonStyle.row,
                    {
                      marginBottom: 10,
                    },
                  ]}
                >
                  {HearingData.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      style={[
                        commonStyle.tag,
                        {
                          alignSelf: "flex-start",
                          paddingHorizontal: 15,
                          paddingVertical: 10,
                          margin: 5,
                        },
                        state.hearing_resolved.includes(item.name)
                          ? commonStyle.selectedTag
                          : commonStyle.unselectedTag,
                      ]}
                      onPress={() => toggleTendon('hearing_resolved', item.name)}
                    >
                      <Text
                        style={[
                          commonStyle.tagText,
                          { flexWrap: "wrap", textAlign: "center" },
                          state.hearing_resolved.includes(item.name) &&
                          commonStyle.selectedText,
                        ]}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                {/*   Hormonal & Metabolic Changes   */}

                <TextComponent
                  color={COLORS.primary}
                  fontSize={14}
                  title="Hormonal & Metabolic Changes"
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                  marginBottom={7}
                />
                <View
                  style={[
                    commonStyle.row,
                    {
                      marginBottom: 10,
                    },
                  ]}
                >
                  {HormonalData.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      style={[
                        commonStyle.tag,
                        {
                          alignSelf: "flex-start",
                          paddingHorizontal: 15,
                          paddingVertical: 10,
                          margin: 5,
                        },
                        state.hormonal_resolved.includes(item.name)
                          ? commonStyle.selectedTag
                          : commonStyle.unselectedTag,
                      ]}
                      onPress={() => toggleTendon('hormonal_resolved', item.name)}
                    >
                      <Text
                        style={[
                          commonStyle.tagText,
                          { flexWrap: "wrap", textAlign: "center" },
                          state.hormonal_resolved.includes(item.name) &&
                          commonStyle.selectedText,
                        ]}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>


              </ScrollView>

              {/* Custom Scroll Indicator */}
              <View
                style={{
                  width: 4,
                  height: "100%",
                  backgroundColor: "#EAEAEA",
                  marginLeft: 10,
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Animated.View
                  style={{
                    width: 4,
                    height: indicatorHeight,
                    backgroundColor: COLORS.primary,
                    borderRadius: 2,
                    transform: [
                      {
                        translateY: scrollY.interpolate({
                          inputRange: [
                            0,
                            Math.max(contentHeight - visibleHeight, 1),
                          ],
                          outputRange: [0, visibleHeight - indicatorHeight],
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
              fontSize={15}
              title="You will not be able to change this information later"
              marginBottom={10}
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />
          </View>

          {/* Button */}
          <BtnPrimary
            onPress={handleNextPress} // Use the handler to trigger the haptic feedback
            marginBottom={10}
            isDisable={!isCheckValidation}
            title="Next"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default StepFiveScreen;
