import {
  View,
  KeyboardAvoidingView,
  Platform,
  Animated,
  FlatList,
  Dimensions,
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
import { SCREENS } from "../../../constants/Screen";
import ReactNativeHapticFeedback from "react-native-haptic-feedback"; // Import haptic feedback

const { height: SCREEN_HEIGHT } = Dimensions.get("screen");

const tribes = [
  {
    id: "1",
    name: "The Antiflox app is designed to empower the community by creating a space where people can connect, share information, and access recovery tools. This screen is specifically for those who have not personally taken fluoroquinolones but are here on behalf of a loved one or someone they know.\n\nWhile your responses won’t be included in the app’s real-time database of statistics, your input is still invaluable in supporting someone affected by fluoroquinolone-associated conditions. By participating, you help provide valuable insights and encouragement to those in need. ",
  },
];

const StepTwoScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;
  const [contentHeight, setContentHeight] = useState(1);
  const containerHeight = SCREEN_HEIGHT * 0.48;

  // Compute dynamic scroll thumb height
  const scrollThumbHeight = containerHeight * (containerHeight / contentHeight);

  // Haptic feedback options
  const hapticOptions = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const handleNextPress = () => {
    // Trigger medium haptic feedback
    ReactNativeHapticFeedback.trigger("impactMedium", hapticOptions);

    // Navigate to StepThree
    navigation.navigate(SCREENS.AuthRoutes, {
      screen: SCREENS.StepThree,
    });
  };

  const renderItem = ({ item }) => {
    return (
      <View style={[commonStyle.item]}>
        <TextComponent
          color={COLORS.primary}
          fontSize={14}
          lineHeight={20}
          title={item.name}
          fontFamily={FONTS.Samsungsharpsans_Medium}
        />
      </View>
    );
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
            <View style={{ paddingHorizontal: 5 }}>
              <TextComponent
                color={COLORS.primary}
                fontSize={32}
                title="Thank you for signing up!"
                marginBottom={15}
                fontFamily={FONTS.Samsungsharpsans_Bold}
              />
            </View>
            <View
              style={[
                styles.container,
                {
                  height: containerHeight,
                  flexDirection: "row",
                  padding: 20,
                  marginBottom: 0,
                },
              ]}
            >
              <FlatList
                data={tribes}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                  { useNativeDriver: false }
                )}
                onContentSizeChange={(width, height) => {
                  setContentHeight(height);
                }}
              />

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
                    height: scrollThumbHeight,
                    backgroundColor: COLORS.primary,
                    borderRadius: 2,
                    transform: [
                      {
                        translateY: scrollY.interpolate({
                          inputRange: [
                            0,
                            Math.max(1, contentHeight - containerHeight),
                          ],
                          outputRange: [0, containerHeight - scrollThumbHeight],
                          extrapolate: "clamp",
                        }),
                      },
                    ],
                  }}
                />
              </View>
            </View>
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

export default StepTwoScreen;
