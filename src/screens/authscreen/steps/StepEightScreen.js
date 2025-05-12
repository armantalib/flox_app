import {
  View,
  KeyboardAvoidingView,
  Platform,
  Animated,
  FlatList,
  Dimensions,
  TouchableOpacity,
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
import { SCREENS } from "../../../constants/Screen";
import { SVG_IMAGES } from "../../../constants/images";
import ReactNativeHapticFeedback from "react-native-haptic-feedback"; // Importing haptic feedback

const tribes = [
  {
    id: "1",
    name: "The Antiflox app is designed to empower the community by creating a space where people can connect, share information, and access recovery tools. This screen is specifically for those who have not personally taken fluoroquinolones but are here on behalf of a loved one or someone they know.\n\nWhile your responses won’t be included in the app’s real-time database of statistics, your input is still invaluable in supporting someone affected by fluoroquinolone-associated conditions. By participating, you help provide valuable insights and encouragement to those in need.",
  },
];
const StepEightScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;
  const renderItem = ({ item }) => {
    return (
      <View style={[commonStyle.item]}>
        <View style={[commonStyle.itemFlex, commonStyle.itemBorder]}>
          <View style={{ flex: 1 }}>
            <TextComponent
              color={COLORS.primary}
              fontSize={15}
              title={"Jan 2024"}
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <TouchableOpacity style={commonStyle.dropFlex}>
              <TextComponent
                color={COLORS.primary}
                fontSize={22}
                title={"30%"}
                fontFamily={FONTS.Samsungsharpsans_Medium}
              />
              <SVG_IMAGES.DownArrow1_SVG />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[commonStyle.itemFlex, commonStyle.itemBorder]}>
          <View style={{ flex: 1 }}>
            <TextComponent
              color={COLORS.primary}
              fontSize={15}
              title={"Feb 2024"}
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <TouchableOpacity style={commonStyle.dropFlex}>
              <TextComponent
                color={COLORS.primary}
                fontSize={22}
                title={"45%"}
                fontFamily={FONTS.Samsungsharpsans_Medium}
              />
              <SVG_IMAGES.DownArrow1_SVG />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[commonStyle.itemFlex, commonStyle.itemBorder]}>
          <View style={{ flex: 1 }}>
            <TextComponent
              color={COLORS.primary}
              fontSize={15}
              title={"Mar 2024"}
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <TouchableOpacity style={commonStyle.dropFlex}>
              <TextComponent
                color={COLORS.primary}
                fontSize={22}
                title={"55%"}
                fontFamily={FONTS.Samsungsharpsans_Medium}
              />
              <SVG_IMAGES.DownArrow1_SVG />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[commonStyle.itemFlex, commonStyle.itemBorder]}>
          <View style={{ flex: 1 }}>
            <TextComponent
              color={COLORS.primary}
              fontSize={15}
              title={"Aug 2024"}
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <TouchableOpacity style={commonStyle.dropFlex}>
              <TextComponent
                color={COLORS.primary}
                fontSize={22}
                title={"60%"}
                fontFamily={FONTS.Samsungsharpsans_Medium}
              />
              <SVG_IMAGES.DownArrow1_SVG />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[commonStyle.itemFlex, commonStyle.itemBorder]}>
          <View style={{ flex: 1 }}>
            <TextComponent
              color={COLORS.primary}
              fontSize={15}
              title={"Add date"}
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <TouchableOpacity style={commonStyle.dropFlex}>
              <TextComponent
                color={COLORS.primary}
                fontSize={22}
                title={"00%"}
                fontFamily={FONTS.Samsungsharpsans_Medium}
              />
              <SVG_IMAGES.DownArrow1_SVG />
            </TouchableOpacity>
          </View>
        </View>
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
            <View
              style={{
                paddingHorizontal: 5,
              }}
            >
              <TextComponent
                color={COLORS.primary}
                fontSize={25}
                title="Add some history about your recovery."
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
                      title={"Dates since floxing"}
                      fontFamily={FONTS.Samsungsharpsans_Bold}
                    />
                  </View>
                  <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <TextComponent
                      color={COLORS.primary}
                      fontSize={18}
                      lineHeight={20}
                      title={"Percentage recovered"}
                      fontFamily={FONTS.Samsungsharpsans_Bold}
                      textAlign={"right"}
                    />
                  </View>
                </View>
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
                />
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
              ReactNativeHapticFeedback.trigger("impactMedium");
              navigation.navigate(SCREENS.AuthRoutes, {
                screen: SCREENS.StepNine,
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

export default StepEightScreen;
