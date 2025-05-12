import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Slick from "react-native-slick";
import { COLORS } from "../constants/colors";
import { commonStyle, tabStyle } from "../constants/style";
import TextComponent from "./TextComponent";
import { FONTS } from "../constants/fonts";
import ToggleSwitch from "./ToggleSwitch";
import { verticalScale } from "react-native-size-matters";
import BtnPrimary from "./BtnPrimary";
import { SVG_IMAGES } from "../constants/images";

const tagsData = [
  { id: 1, title: "Tendonitis", selected: true },
  { id: 2, title: "Neuropathy" },
  { id: 3, title: "Fatigue" },
  { id: 4, title: "Muscle pains" },
  { id: 5, title: "Fatigue" },
  { id: 6, title: "Neuropathy" },
  { id: 7, title: "Neuropathy" },
  { id: 8, title: "Fatigue" },
  { id: 9, title: "Muscle pains" },
  { id: 10, title: "Fatigue" },
  { id: 11, title: "Neuropathy" },
  { id: 12, title: "Neuropathy" },
  { id: 13, title: "Fatigue" },
  { id: 14, title: "Muscle pains" },
  { id: 15, title: "Fatigue" },
  { id: 16, title: "Neuropathy" },
  { id: 17, title: "Neuropathy" },
  { id: 18, title: "Fatigue" },
  { id: 19, title: "Neuropathy" },
  { id: 20, title: "Neuropathy" },
  { id: 21, title: "Fatigue" },
];

export default function ProfileAnimatedDotSlider({ content }) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [selectedTag, setSelectedTag] = useState(1);

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <Slick
        showsButtons={false}
        dotStyle={{
          backgroundColor: COLORS.secondary,
          width: 9,
          height: 9,
          borderRadius: 100,
          margin: 3,
        }}
        activeDotStyle={{
          backgroundColor: COLORS.primary,
          width: 11,
          height: 11,
          borderRadius: 100,
          margin: 3,
        }}
        paginationStyle={{ position: "absolute", bottom: 2 }}
      >
        {/* 1nd Slide */}
        <View
          style={{
            flex: 1,
          }}
        >
          <View style={[tabStyle.flexRow, tabStyle.mb8]}>
            <TextComponent
              color={COLORS.primary}
              fontSize={20}
              title={"My recovery"}
              fontFamily={FONTS.Samsungsharpsans_Bold}
            />
            <Text style={tabStyle.h2}>
              65<Text style={tabStyle.h2small}>%</Text>
            </Text>
          </View>
          <View style={[tabStyle.flexRow, tabStyle.mb8]}>
            <TouchableOpacity style={tabStyle.dropbutton1}>
              <TextComponent
                color={COLORS.white}
                fontSize={11}
                title={"Severe +"}
                fontFamily={FONTS.Samsungsharpsans_Bold}
              />
            </TouchableOpacity>
            <TouchableOpacity style={tabStyle.dropbutton1}>
              <TextComponent
                color={COLORS.white}
                fontSize={11}
                title={"1 year"}
                fontFamily={FONTS.Samsungsharpsans_Bold}
              />

              <SVG_IMAGES.DownArrow_SVG />
            </TouchableOpacity>
          </View>
        </View>
        {/* 2rd Slide */}
        <View
          style={{
            flex: 1,
          }}
        >
          <TextComponent
            color={COLORS.primary}
            fontSize={23}
            title={"Symptoms I have\nexperienced"}
            marginBottom={15}
            fontFamily={FONTS.Samsungsharpsans_Bold}
          />
          {/* Scrollable Tags Container */}
          <View
            style={[
              {
                height: Dimensions.get("screen").height * 0.28,
                flexDirection: "row",
                overflow: "hidden",
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
              <View style={commonStyle.row}>
                {tagsData.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={[
                      commonStyle.tag,
                      {
                        alignSelf: "flex-start",
                        paddingHorizontal: 13,
                        paddingVertical: 10,
                        margin: 5,
                      },
                      item.id === selectedTag
                        ? commonStyle.selectedTag
                        : commonStyle.unselectedTag,
                    ]}
                    onPress={() => setSelectedTag(item.id)}
                  >
                    <Text
                      style={[
                        commonStyle.tagText,
                        { flexWrap: "wrap", textAlign: "center" },
                        item.id === selectedTag && commonStyle.selectedText,
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
                  width: 5,
                  height: 120,
                  backgroundColor: COLORS.primary,
                  borderRadius: 2,
                  transform: [
                    {
                      translateY: scrollY.interpolate({
                        inputRange: [0, 300], // Adjust based on content height
                        outputRange: [0, 150], // Adjust based on container height
                        extrapolate: "clamp",
                      }),
                    },
                  ],
                }}
              />
            </View>
          </View>
        </View>
        {/* 3rth Slide */}
        <View
          style={{
            flex: 1,
          }}
        >
          <TextComponent
            color={COLORS.primary}
            fontSize={23}
            title={"Symptoms I’m\ncurrently experiencing"}
            marginBottom={15}
            fontFamily={FONTS.Samsungsharpsans_Bold}
          />
          {/* Scrollable Tags Container */}
          <View
            style={[
              {
                height: Dimensions.get("screen").height * 0.28,
                flexDirection: "row",
                overflow: "hidden",
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
              <View style={commonStyle.row}>
                {tagsData.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={[
                      commonStyle.tag,
                      {
                        alignSelf: "flex-start",
                        paddingHorizontal: 13,
                        paddingVertical: 10,
                        margin: 5,
                      },
                      item.id === selectedTag
                        ? commonStyle.selectedTag
                        : commonStyle.unselectedTag,
                    ]}
                    onPress={() => setSelectedTag(item.id)}
                  >
                    <Text
                      style={[
                        commonStyle.tagText,
                        { flexWrap: "wrap", textAlign: "center" },
                        item.id === selectedTag && commonStyle.selectedText,
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
                  width: 5,
                  height: 120,
                  backgroundColor: COLORS.primary,
                  borderRadius: 2,
                  transform: [
                    {
                      translateY: scrollY.interpolate({
                        inputRange: [0, 300], // Adjust based on content height
                        outputRange: [0, 150], // Adjust based on container height
                        extrapolate: "clamp",
                      }),
                    },
                  ],
                }}
              />
            </View>
          </View>
        </View>
        {/* 4rth Slide */}
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={[
              tabStyle.flexRow,
              {
                marginBottom: verticalScale(4),
                borderBottomWidth: 1,
                borderBottomColor: "#EAEAEA",
                paddingBottom: verticalScale(10),
                marginBottom: verticalScale(10),
              },
            ]}
          >
            <View style={{ flex: 1 }}>
              <TextComponent
                color={COLORS.primary}
                fontSize={18}
                title={"Which FQ I\nconsumed?"}
                fontFamily={FONTS.Samsungsharpsans_Bold}
              />
            </View>
            <TouchableOpacity
              style={[
                tabStyle.dropbutton1,
                {
                  minWidth: 115,
                },
              ]}
            >
              <TextComponent
                color={COLORS.white}
                fontSize={11}
                title={"Ciprofloxacin"}
                fontFamily={FONTS.Samsungsharpsans_Bold}
              />
            </TouchableOpacity>
          </View>
          <View
            style={[
              tabStyle.flexRow,
              {
                marginBottom: verticalScale(4),
                borderBottomWidth: 1,
                borderBottomColor: "#EAEAEA",
                paddingBottom: verticalScale(10),
                marginBottom: verticalScale(10),
              },
            ]}
          >
            <View style={{ flex: 1 }}>
              <TextComponent
                color={COLORS.primary}
                fontSize={18}
                title={"How many pills I consumed?"}
                fontFamily={FONTS.Samsungsharpsans_Bold}
              />
            </View>
            <TouchableOpacity
              style={[
                tabStyle.dropbutton1,
                {
                  minWidth: 115,
                },
              ]}
            >
              <TextComponent
                color={COLORS.white}
                fontSize={11}
                title={"16 pills"}
                fontFamily={FONTS.Samsungsharpsans_Bold}
              />
            </TouchableOpacity>
          </View>
          <View
            style={[
              tabStyle.flexRow,
              {
                marginBottom: verticalScale(4),
                borderBottomWidth: 1,
                borderBottomColor: "#EAEAEA",
                paddingBottom: verticalScale(10),
                marginBottom: verticalScale(10),
              },
            ]}
          >
            <View style={{ flex: 1 }}>
              <TextComponent
                color={COLORS.primary}
                fontSize={18}
                title={"Which drugs I combined with?"}
                fontFamily={FONTS.Samsungsharpsans_Bold}
              />
            </View>
            <TouchableOpacity
              style={[
                tabStyle.dropbutton1,
                {
                  minWidth: 115,
                },
              ]}
            >
              <TextComponent
                color={COLORS.white}
                fontSize={11}
                title={"NSAIDS"}
                fontFamily={FONTS.Samsungsharpsans_Bold}
              />
            </TouchableOpacity>
          </View>
          <View
            style={[
              tabStyle.flexRow,
              {
                marginBottom: verticalScale(4),
              },
            ]}
          >
            <View style={{ flex: 1 }}>
              <TextComponent
                color={COLORS.primary}
                fontSize={18}
                title={"My reaction\nseverity."}
                fontFamily={FONTS.Samsungsharpsans_Bold}
              />
            </View>
            <TouchableOpacity
              style={[
                tabStyle.dropbutton1,
                {
                  minWidth: 115,
                },
              ]}
            >
              <TextComponent
                color={COLORS.white}
                fontSize={11}
                title={"Severe +"}
                fontFamily={FONTS.Samsungsharpsans_Bold}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* 5th Slide */}
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={[
              tabStyle.flexRow,
              {
                marginBottom: verticalScale(4),
              },
            ]}
          >
            <TextComponent
              color={COLORS.primary}
              fontSize={20}
              title={"Average Steps"}
              fontFamily={FONTS.Samsungsharpsans_Bold}
            />
            <TextComponent
              color={COLORS.primary}
              fontSize={14}
              title={`Wed, Dec 11th`}
              fontFamily={FONTS.Samsungsharpsans_Bold}
            />
          </View>
          <View
            style={[
              tabStyle.flexRow,

              {
                marginBottom: verticalScale(13),
              },
            ]}
          >
            <TextComponent
              color={COLORS.primary}
              fontSize={27}
              title={`4,532`}
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />
            <ToggleSwitch />
          </View>
        </View>
      </Slick>
    </View>
  );
}
