import React, { useRef, useState } from "react";
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

const tagsData = [
  { id: 1, title: "Tendonitis" },
  { id: 2, title: "Neuropathy" },
  { id: 3, title: "Fatigue" },
  { id: 4, title: "Muscle pains" },
  { id: 5, title: "Fatigue" },
  { id: 6, title: "Neuropathy" },
];

const StepFiveScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;
  const [selectedTags, setSelectedTags] = useState([]); // Multi-select state

  // Toggle tag selection
  const toggleTag = (id) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(id)
        ? prevTags.filter((tag) => tag !== id)
        : [...prevTags, id]
    );
  };

  // Dynamic Scroll Indicator Calculation
  const tagHeight = 50; // Approximate height per tag including margin
  const visibleHeight = Dimensions.get("screen").height * 0.38; // Visible scroll area
  const contentHeight = tagsData.length * tagHeight; // Total scrollable content height
  const indicatorHeight = Math.max(
    (visibleHeight / contentHeight) * visibleHeight,
    30 // Minimum size for usability
  );

  const handleNextPress = () => {
    // Trigger haptic feedback on button press
    ReactNativeHapticFeedback.trigger("impactMedium");

    // Navigate to the next screen with the selected symptoms
    navigation.navigate(SCREENS.AuthRoutes, {
      screen: SCREENS.StepSix,
      params: { selectedSymptoms: selectedTags },
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
        <View style={[commonStyle.wrapper, { flex: 1 }]}>
          <View style={styles.fullCenter}>
            <View style={{ paddingHorizontal: 8 }}>
              <TextComponent
                color={COLORS.primary}
                fontSize={18}
                title="Please list ONLY your current symptoms, excluding those that have resolved."
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
                  {tagsData.map((item) => (
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
                        selectedTags.includes(item.id)
                          ? commonStyle.selectedTag
                          : commonStyle.unselectedTag,
                      ]}
                      onPress={() => toggleTag(item.id)}
                    >
                      <Text
                        style={[
                          commonStyle.tagText,
                          { flexWrap: "wrap", textAlign: "center" },
                          selectedTags.includes(item.id) &&
                            commonStyle.selectedText,
                        ]}
                      >
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <TextComponent
                  color={COLORS.primary}
                  fontSize={14}
                  title="Neuropathy (Nerve Damage)"
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                  marginBottom={7}
                />
                <View style={commonStyle.row}>
                  {tagsData.map((item) => (
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
                        selectedTags.includes(item.id)
                          ? commonStyle.selectedTag
                          : commonStyle.unselectedTag,
                      ]}
                      onPress={() => toggleTag(item.id)}
                    >
                      <Text
                        style={[
                          commonStyle.tagText,
                          { flexWrap: "wrap", textAlign: "center" },
                          selectedTags.includes(item.id) &&
                            commonStyle.selectedText,
                        ]}
                      >
                        {item.title}
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
              title="You will be able to update this information later"
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
                screen: SCREENS.StepSeven,
              });
            }}
            marginBottom={10}
            title="Next"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default StepFiveScreen;
