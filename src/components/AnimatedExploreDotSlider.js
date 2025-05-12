import React, { useRef } from "react";
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
import { moderateScale, verticalScale } from "react-native-size-matters";
import BtnPrimary from "./BtnPrimary";
import { normalize } from "../utils/Metrics";
import stylesG from "../assets/css/stylesG";
import AgeBarStat from "./AgeBarStat";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;

export default function AnimatedExploreDotSlider({ content }) {
  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <View style={{ flex: 1, position: "relative", padding: 7 }}>
      <Slick
        showsButtons={false}
        dotStyle={{
          backgroundColor: '#FFFFFF',
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
        paginationStyle={{ position: "absolute", bottom: normalize(-50) }}
      >
        {/* 1st Slide */}
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={[tabStyle.tabContainerCenter, tabStyle.tabContainerCenter1]}
          >
            <TextComponent
              color={COLORS.primary}
              fontSize={23}
              title={"Total users"}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />
            <Text style={[tabStyle.h1, tabStyle.h1Font]}>5,163</Text>
            <TextComponent
              color={COLORS.primary}
              fontSize={22}
              title={"Since\n12/02/2024"}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />
          </View>
        </View>
        {/* 2nd Slide */}
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={[tabStyle.tabContainerCenter, tabStyle.tabContainerCenter1]}
          >
            <TextComponent
              color={COLORS.primary}
              fontSize={23}
              title={"Genders"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />

            {/* Row 1: Men */}
            <View style={tabStyle.row}>
              <View style={tabStyle.column}>
                <Text style={tabStyle.number}>2,142</Text>
                <Text style={tabStyle.label}>Men</Text>
              </View>
              <View style={tabStyle.column}>
                <Text style={tabStyle.percentage}>38%</Text>
                <Text style={tabStyle.label}>Percent</Text>
              </View>
            </View>

            {/* Separator */}
            <View style={tabStyle.separator} />

            {/* Row 2: Women */}
            <View style={tabStyle.row}>
              <View style={tabStyle.column}>
                <Text style={tabStyle.number}>3,142</Text>
                <Text style={tabStyle.label}>Women</Text>
              </View>
              <View style={tabStyle.column}>
                <Text style={tabStyle.percentage}>62%</Text>
                <Text style={tabStyle.label}>Percent</Text>
              </View>
            </View>
          </View>
        </View>
        {/* 3nd Slide */}
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={[]}
          >
            <View
              style={[
                tabStyle.flexRow,
                {
                  paddingHorizontal: moderateScale(20),
                },
              ]}
            >
              <TextComponent
                color={COLORS.primary}
                fontSize={23}
                title={"Males"}
                fontFamily={FONTS.Samsungsharpsans_Bold}
                textAlign={"center"}
              />
              <TextComponent
                color={COLORS.primary}
                fontSize={23}
                title={"Females"}
                fontFamily={FONTS.Samsungsharpsans_Bold}
                textAlign={"center"}
              />
            </View>
            <AgeBarStat
              age="65+"
              maleValue={"5"}
              femaleValue={"4"}
            />
            <AgeBarStat
              age="60-64"
              maleValue={"5"}
              femaleValue={"3"}
            />
            <AgeBarStat
              age="55-59"
              maleValue={"4"}
              femaleValue={"5"}
            />
            <AgeBarStat
              age="50-54"
              maleValue={"2"}
              femaleValue={"3"}
            />
            <AgeBarStat
              age="45-49"
              maleValue={"2"}
              femaleValue={"4"}
            />
            <AgeBarStat
              age="40-44"
              maleValue={"5"}
              femaleValue={"4"}
            />
            <AgeBarStat
              age="35-39"
              maleValue={"5"}
              femaleValue={"3"}
            />
            <AgeBarStat
              age="30-34"
              maleValue={"4"}
              femaleValue={"5"}
            />
            <AgeBarStat
              age="25-29"
              maleValue={"2"}
              femaleValue={"3"}
            />
            <AgeBarStat
              age="20-24"
              maleValue={"2"}
              femaleValue={"4"}
            />
            <AgeBarStat
              age="15-19"
              maleValue={"5"}
              femaleValue={"4"}
            />
            <AgeBarStat
              age="10-14"
              maleValue={"5"}
              femaleValue={"4"}
            />
          </View>
        </View>
        {/* 4th Slide */}
        <View
          style={{
            flex: 1,
          }}
        >
          {/* Scrollable Tags Container */}
          <View style={tabStyle.tableHeader}>
            <TextComponent
              color={COLORS.primary}
              fontSize={15}
              title={"Drug taken"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />

            <TextComponent
              color={COLORS.primary}
              fontSize={15}
              title={"Number"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />

            <TextComponent
              color={COLORS.primary}
              fontSize={15}
              title={"Percent"}
              textAlign={"center"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
            />
          </View>
          <View
            style={[
              {
                height: Dimensions.get("screen").height * 0.255,
                flexDirection: "row",
                overflow: "hidden",
                paddingTop: 10,
                marginBottom: verticalScale(10),
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
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Ciprofloxacin"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"2,145"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"56%"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Levofloxacin"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1,145"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"28%"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Ciprofloxacin"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"2,145"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"56%"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Levofloxacin"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1,145"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"28%"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Ciprofloxacin"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"2,145"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"56%"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Levofloxacin"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1,145"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"28%"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
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
                  height: normalize(140),
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
          <TextComponent
            color={COLORS.placeholderColor}
            fontSize={10}
            title={
              "This data displays the number of people who consumed each drug and the percent that equals"
            }
            fontFamily={FONTS.Samsungsharpsans_Medium}
            textAlign={"center"}
          />
        </View>
        {/* 5th Slide */}
        <View
          style={{
            flex: 1,
          }}
        >
          {/* Scrollable Tags Container */}
          <View style={tabStyle.tableHeader}>
            <TextComponent
              color={COLORS.primary}
              fontSize={13}
              title={"No. Pills Taken"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />

            <TextComponent
              color={COLORS.primary}
              fontSize={13}
              title={"Lowest"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />

            <TextComponent
              color={COLORS.primary}
              fontSize={13}
              title={"Highest"}
              textAlign={"center"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
            />
            <TextComponent
              color={COLORS.primary}
              fontSize={13}
              title={"Average"}
              textAlign={"center"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
            />
          </View>
          <View
            style={[
              {
                height: Dimensions.get("screen").height * 0.255,
                flexDirection: "row",
                overflow: "hidden",
                paddingTop: 10,
                marginBottom: verticalScale(10),
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
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Ciprofloxacin"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"12"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"9"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Ciprofloxacin"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"12"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"9"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Ciprofloxacin"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"12"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"9"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Ciprofloxacin"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"12"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"9"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Ciprofloxacin"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"12"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"9"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Ciprofloxacin"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"12"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"9"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Ciprofloxacin"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"12"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"9"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
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
          <TextComponent
            color={COLORS.placeholderColor}
            fontSize={10}
            title={
              "This data displays the number of pills consumed and the lowest, highest and average counts "
            }
            fontFamily={FONTS.Samsungsharpsans_Medium}
            textAlign={"center"}
          />
        </View>
        {/* 6th Slide */}
        <View
          style={{
            flex: 1,
          }}
        >
          {/* Scrollable Tags Container */}
          <View style={tabStyle.tableHeader}>
            <TextComponent
              color={COLORS.primary}
              fontSize={13}
              title={"Taken with"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />

            <TextComponent
              color={COLORS.primary}
              fontSize={13}
              title={"Lowest"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />

            <TextComponent
              color={COLORS.primary}
              fontSize={13}
              title={"Highest"}
              textAlign={"center"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
            />
            <TextComponent
              color={COLORS.primary}
              fontSize={13}
              title={"Average"}
              textAlign={"center"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
            />
          </View>
          <View
            style={[
              {
                height: Dimensions.get("screen").height * 0.255,
                flexDirection: "row",
                overflow: "hidden",
                paddingTop: 10,
                marginBottom: verticalScale(10),
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
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Nothing"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"9"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"NSAIDS"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"9"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Corticosteroids"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"9"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
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
          <TextComponent
            color={COLORS.placeholderColor}
            fontSize={10}
            title={
              "This data displays the drugs taken at the same time and the number of FQ pills consumed "
            }
            fontFamily={FONTS.Samsungsharpsans_Medium}
            textAlign={"center"}
          />
        </View>
        {/* 7th Slide */}
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={[tabStyle.tabContainerCenter, tabStyle.tabContainerCenter1]}
          >
            <TextComponent
              color={COLORS.primary}
              fontSize={17}
              title={"Did your doctor warn you  about serious side effects?"}
              marginBottom={0}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />

            {/* Row 1: Men */}
            <View style={tabStyle.row}>
              <View style={tabStyle.column}>
                <Text style={tabStyle.number}>63</Text>
                <Text style={tabStyle.label}>Yes</Text>
              </View>
              <View style={tabStyle.column}>
                <Text style={tabStyle.percentage}>2%</Text>
                <Text style={tabStyle.label}>Percent</Text>
              </View>
            </View>

            {/* Separator */}
            <View style={tabStyle.separator} />

            {/* Row 2: Women */}
            <View style={tabStyle.row}>
              <View style={tabStyle.column}>
                <Text style={tabStyle.number}>3,142</Text>
                <Text style={tabStyle.label}>No</Text>
              </View>
              <View style={tabStyle.column}>
                <Text style={tabStyle.percentage}>98%</Text>
                <Text style={tabStyle.label}>Percent</Text>
              </View>
            </View>
          </View>
        </View>
        {/* 8th Slide */}
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={[tabStyle.tabContainerCenter, tabStyle.tabContainerCenter1]}
          >
            <TextComponent
              color={COLORS.primary}
              fontSize={17}
              title={"Did your doctor warn you  about serious side effects?"}
              marginBottom={0}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />

            {/* Row 1: Men */}
            <View style={tabStyle.row}>
              <View style={tabStyle.column}>
                <Text style={tabStyle.number}>532</Text>
                <Text style={tabStyle.label}>Yes</Text>
              </View>
              <View style={tabStyle.column}>
                <Text style={tabStyle.percentage}>18%</Text>
                <Text style={tabStyle.label}>Percent</Text>
              </View>
            </View>

            {/* Separator */}
            <View style={tabStyle.separator} />

            {/* Row 2: Women */}
            <View style={tabStyle.row}>
              <View style={tabStyle.column}>
                <Text style={tabStyle.number}>2,712</Text>
                <Text style={tabStyle.label}>No</Text>
              </View>
              <View style={tabStyle.column}>
                <Text style={tabStyle.percentage}>98%</Text>
                <Text style={tabStyle.label}>Percent</Text>
              </View>
            </View>
          </View>
        </View>
        {/* 9th Slide */}
        <View
          style={{
            flex: 1,
          }}
        >
          {/* Scrollable Tags Container */}
          <View style={tabStyle.tableHeader}>
            <TextComponent
              color={COLORS.primary}
              fontSize={13}
              title={"Severity"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />

            <TextComponent
              color={COLORS.primary}
              fontSize={13}
              title={"Number"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />

            <TextComponent
              color={COLORS.primary}
              fontSize={13}
              title={"Percent"}
              textAlign={"center"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
            />
            <TextComponent
              color={COLORS.primary}
              fontSize={13}
              title={"Average"}
              textAlign={"center"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
            />
          </View>
          <View
            style={[
              {
                height: Dimensions.get("screen").height * 0.255,
                flexDirection: "row",
                overflow: "hidden",
                paddingTop: 10,
                marginBottom: verticalScale(10),
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
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Mild"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"9"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Moderate"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"9"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={8}
                    title={"Severe"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />

                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"9"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <Text style={tabStyle.boldTextFont}>
                <Text style={tabStyle.boldText}>Mild</Text> defined as an onset
                of mild symptoms, being able to maintain physical activity with
                mild discomfort
              </Text>
              <Text style={tabStyle.boldTextFont}>
                <Text style={tabStyle.boldText}>Moderate</Text> defined as an
                onset of mild symptoms, being able to maintain physical activity
                with mild discomfort
              </Text>
              <Text style={tabStyle.boldTextFont}>
                <Text style={tabStyle.boldText}>Severe</Text> defined as an
                onset of mild symptoms, being able to maintain physical activity
                with mild discomfort
              </Text>
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
          <TextComponent
            color={COLORS.placeholderColor}
            fontSize={10}
            title={
              "This data displays the number level of severity reported at the beginning"
            }
            fontFamily={FONTS.Samsungsharpsans_Medium}
            textAlign={"center"}
          />
        </View>
        {/* 11th Slide */}
        <View
          style={{
            flex: 1,
          }}
        >
          {/* Scrollable Tags Container */}
          <View style={tabStyle.tableHeader}>
            <TextComponent
              color={COLORS.primary}
              fontSize={15}
              title={"Symptoms"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />

            <TextComponent
              color={COLORS.primary}
              fontSize={15}
              title={"Number"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />

            <TextComponent
              color={COLORS.primary}
              fontSize={15}
              title={"Percent"}
              textAlign={"center"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
            />
          </View>
          <View
            style={[
              {
                height: Dimensions.get("screen").height * 0.255,
                flexDirection: "row",
                overflow: "hidden",
                paddingTop: 10,
                marginBottom: verticalScale(10),
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
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Tendonitis"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"2,145"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"56%"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Neuopathy"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1,145"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"28%"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Fatigue"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"2,145"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"56%"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Muscle pain"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1,145"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"28%"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>

              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Joint pain"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"2,145"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"56%"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
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
          <TextComponent
            color={COLORS.placeholderColor}
            fontSize={10}
            title={
              "This data displays the number of symptoms reported and the total  percent of users who experienced them"
            }
            fontFamily={FONTS.Samsungsharpsans_Medium}
            textAlign={"center"}
          />
        </View>
        {/* 10th Slide */}
        <View
          style={{
            flex: 1,
          }}
        >
          {/* Scrollable Tags Container */}
          <View style={tabStyle.tableHeader}>
            <TextComponent
              color={COLORS.primary}
              fontSize={15}
              title={"Drug Flared"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />

            <TextComponent
              color={COLORS.primary}
              fontSize={15}
              title={"Number"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />

            <TextComponent
              color={COLORS.primary}
              fontSize={15}
              title={"Percent"}
              textAlign={"center"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
            />
          </View>
          <View
            style={[
              {
                height: Dimensions.get("screen").height * 0.255,
                flexDirection: "row",
                overflow: "hidden",
                paddingTop: 10,
                marginBottom: verticalScale(10),
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
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Amoxicillin"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"2,145"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"56%"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Augmentin"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1,145"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"28%"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"NSAIDS"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"2,145"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"56%"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Corticosteroids"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1,145"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"28%"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>

              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"Gabapentin"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"2,145"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"56%"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
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
                  height: normalize(160),
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
          <TextComponent
            color={COLORS.placeholderColor}
            fontSize={10}
            title={
              "This data displays the different drugs that users have consumed and flared from after being floxed"
            }
            fontFamily={FONTS.Samsungsharpsans_Medium}
            textAlign={"center"}
          />
        </View>
        {/* 10th Slide */}
        <View
          style={{
            flex: 1,
          }}
        >
          {/* Scrollable Tags Container */}
          <View style={[stylesG.spaceBetween]}>
            <TextComponent
              color={COLORS.primary}
              fontSize={normalize(20)}
              title={"Average recovery"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />



            <TextComponent
              color={COLORS.primary}
              fontSize={normalize(20)}
              title={"65 %"}
              textAlign={"center"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
            />
          </View>
          <View style={[stylesG.spaceBetween]}>
            <View style={[{ width: '73%', height: normalize(38), borderColor: '#2C2C2C', borderWidth: normalize(0.5), borderRadius: normalize(50), justifyContent: 'center' }]}>
              <View style={[stylesG.flexRow, { overflow: 'hidden' }]}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                  <TouchableOpacity style={[{ paddingLeft: normalize(10), marginLeft: normalize(5), paddingRight: normalize(10), height: normalize(38) }, stylesG.contentCenter]}>
                    <TextComponent
                      color={COLORS.primary}
                      fontSize={normalize(9)}
                      title={"Mild"}
                      textAlign={"left"}
                      fontFamily={FONTS.Samsungsharpsans_Medium}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={[{ paddingLeft: normalize(10), marginLeft: normalize(5), paddingRight: normalize(10), height: normalize(38), backgroundColor: COLORS.black, borderRadius: normalize(50) }, stylesG.contentCenter]}>
                    <TextComponent
                      color={COLORS.white}
                      fontSize={normalize(9)}
                      title={"Moderate"}
                      textAlign={"left"}
                      fontFamily={FONTS.Samsungsharpsans_Medium}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={[{ paddingLeft: normalize(10), marginLeft: normalize(5), paddingRight: normalize(10), height: normalize(38) }, stylesG.contentCenter]}>
                    <TextComponent
                      color={COLORS.primary}
                      fontSize={normalize(9)}
                      title={"Severe"}
                      textAlign={"left"}
                      fontFamily={FONTS.Samsungsharpsans_Medium}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={[{ paddingLeft: normalize(10), marginLeft: normalize(5), paddingRight: normalize(10), height: normalize(38) }, stylesG.contentCenter]}>
                    <TextComponent
                      color={COLORS.primary}
                      fontSize={normalize(9)}
                      title={"Severe+"}
                      textAlign={"left"}
                      fontFamily={FONTS.Samsungsharpsans_Medium}
                    />
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={[
                  tabStyle.dropbutton1,
                  {
                    width: 80,
                    paddingHorizontal: 5,
                  },
                ]}
              >
                <View style={[stylesG.flexRow]}>
                  <TextComponent
                    color={COLORS.white}
                    fontSize={normalize(10)}
                    title={"1 Year"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              {
                height: Dimensions.get("screen").height * 0.255,
                flexDirection: "row",
                overflow: "hidden",
                paddingTop: 10,
                marginTop: normalize(10),
                marginBottom: verticalScale(1),
              },
            ]}
          >


            <LineChart
              data={{
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100
                    ]
                  }
                ]
              }}
              width={Dimensions.get("window").width} // from react-native
              height={normalize(190)}
              yAxisLabel=""
              yAxisSuffix="%"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "transparent",
                backgroundGradientFrom: "#000000",
                backgroundGradientTo: "#FFFFFF",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `#FFFFFF`,
                style: {
                  borderRadius: 10
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#FFFFFF"
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 10
              }}
            />

          </View>

        </View>
        {/* 10th Slide */}
        <View
          style={{
            flex: 1,
          }}
        >
          {/* Scrollable Tags Container */}
          <View style={tabStyle.tableHeader}>
            <TextComponent
              color={COLORS.primary}
              fontSize={15}
              title={"Location"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />

            <TextComponent
              color={COLORS.primary}
              fontSize={15}
              title={"Number"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />

            <TextComponent
              color={COLORS.primary}
              fontSize={15}
              title={"Percent"}
              textAlign={"center"}
              marginBottom={15}
              fontFamily={FONTS.Samsungsharpsans_Bold}
            />
          </View>
          <View
            style={[
              {
                height: Dimensions.get("screen").height * 0.255,
                flexDirection: "row",
                overflow: "hidden",
                paddingTop: 10,
                marginBottom: verticalScale(10),
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
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"USA"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"2,145"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"56%"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"UK"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1,145"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"28%"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"USA"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"2,145"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"56%"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"UK"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1,145"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"28%"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"USA"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"2,145"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"56%"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </View>
              <View
                style={[
                  tabStyle.flexRow,
                  {
                    marginBottom: verticalScale(4),
                    borderBottomWidth: 1,
                    borderBottomColor: "#EAEAEA",
                    paddingBottom: verticalScale(7),
                    marginBottom: verticalScale(7),
                  },
                ]}
              >
                <TouchableOpacity
                  style={[
                    tabStyle.dropbutton1,
                    {
                      width: 90,
                      paddingHorizontal: 5,
                    },
                  ]}
                >
                  <TextComponent
                    color={COLORS.white}
                    fontSize={9}
                    title={"UK"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"1,145"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"28%"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
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
          <TextComponent
            color={COLORS.placeholderColor}
            fontSize={10}
            title={
              "This data displays the number of people affected in different countries and the  percent of users"
            }
            fontFamily={FONTS.Samsungsharpsans_Medium}
            textAlign={"center"}
          />
        </View>
        {/* 11th Slide */}
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={[
              tabStyle.tabContainerCenter,
              {
                paddingTop: verticalScale(5),
                paddingBottom: verticalScale(25),
              },
            ]}
          >
            <TextComponent
              color={COLORS.primary}
              fontSize={26}
              title={"Download our\nstatistics"}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />
            <TextComponent
              color={COLORS.primary}
              fontSize={18}
              title={
                "Click the button below to download our total  recorded statistics as a PDF to date"
              }
              fontFamily={FONTS.Samsungsharpsans_Medium}
              textAlign={"center"}
            />
            <BtnPrimary title="Download" />
          </View>
        </View>
      </Slick>
    </View>
  );
}


let data = {
  labels: ['Feb 5', 'Feb 6', 'Feb 7', 'Feb 8', 'Feb 9', 'Feb 10', 'Feb 10'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(0, 158, 247, ${opacity})`, // optional
      strokeWidth: 5, // optional

    },
    {
      data: [10, 20, 28, 4, 10, 20, 10, 20, 28, 4, 10, 20],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 6 // optional
    },
  ],
  legend: ["Post Success", "Post Failed",] // optional
};

const chartConfig = {
  backgroundGradientFrom: COLORS.primary,
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 287, 120, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional

};