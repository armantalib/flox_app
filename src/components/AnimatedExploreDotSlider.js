import React, { useEffect, useRef, useState } from "react";
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
import { useSelector } from "react-redux";
import { numberWithCommas } from "../utils/Math";
import moment from "moment";
const screenWidth = Dimensions.get("window").width;

export default function AnimatedExploreDotSlider({ content }) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const { exploreStat } = useSelector((state) => state?.steps);
  const [userAges, setUserAges] = useState(exploreStat?.userAges[0])

  useEffect(() => {
    setUserAges(exploreStat?.userAges[0])
  }, [exploreStat])


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
            <Text style={[tabStyle.h1, tabStyle.h1Font]}>{numberWithCommas(exploreStat?.totalUsers)}</Text>
            <TextComponent
              color={COLORS.primary}
              fontSize={22}
              title={`Since\n${moment().format('DD/MM/YYYY')}`}
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
                <Text style={tabStyle.number}>{numberWithCommas(exploreStat?.genderMale)}</Text>
                <Text style={tabStyle.label}>Men</Text>
              </View>
              <View style={tabStyle.column}>
                <Text style={tabStyle.percentage}>{parseFloat(exploreStat?.malePercent).toFixed(0)}%</Text>
                <Text style={tabStyle.label}>Percent</Text>
              </View>
            </View>

            {/* Separator */}
            <View style={tabStyle.separator} />

            {/* Row 2: Women */}
            <View style={tabStyle.row}>
              <View style={tabStyle.column}>
                <Text style={tabStyle.number}>{numberWithCommas(exploreStat?.genderFemale)}</Text>
                <Text style={tabStyle.label}>Women</Text>
              </View>
              <View style={tabStyle.column}>
                <Text style={tabStyle.percentage}>{parseFloat(exploreStat?.femalePercent).toFixed(0)}%</Text>
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
              maleValue={userAges?.age61 ? userAges?.age61.maleCount : "0"}
              femaleValue={userAges?.age61 ? userAges?.age61.femaleCount : "0"}
            />
            <AgeBarStat
              age="60-64"
              maleValue={userAges?.age61 ? userAges?.age61.maleCount : "0"}
              femaleValue={userAges?.age61 ? userAges?.age61.femaleCount : "0"}
            />
            <AgeBarStat
              age="55-59"
              maleValue={userAges?.age56 ? userAges?.age56.maleCount : "0"}
              femaleValue={userAges?.age56 ? userAges?.age56.femaleCount : "0"}
            />
            <AgeBarStat
              age="50-54"
              maleValue={userAges?.age51 ? userAges?.age51.maleCount : "0"}
              femaleValue={userAges?.age51 ? userAges?.age51.femaleCount : "0"}
            />
            <AgeBarStat
              age="45-49"
              maleValue={userAges?.age46 ? userAges?.age46.maleCount : "0"}
              femaleValue={userAges?.age46 ? userAges?.age46.femaleCount : "0"}
            />
            <AgeBarStat
              age="40-44"
              maleValue={userAges?.age41 ? userAges?.age41.maleCount : "0"}
              femaleValue={userAges?.age41 ? userAges?.age41.femaleCount : "0"}
            />
            <AgeBarStat
              age="35-39"
              maleValue={userAges?.age36 ? userAges?.age36.maleCount : "0"}
              femaleValue={userAges?.age36 ? userAges?.age36.femaleCount : "0"}
            />
            <AgeBarStat
              age="30-34"
              maleValue={userAges?.age31 ? userAges?.age31.maleCount : "0"}
              femaleValue={userAges?.age31 ? userAges?.age31.femaleCount : "0"}
            />
            <AgeBarStat
              age="25-29"
              maleValue={userAges?.age26 ? userAges?.age26.maleCount : "0"}
              femaleValue={userAges?.age26 ? userAges?.age26.femaleCount : "0"}
            />
            <AgeBarStat
              age="20-24"
              maleValue={userAges?.age21 ? userAges?.age21.maleCount : "0"}
              femaleValue={userAges?.age21 ? userAges?.age21.femaleCount : "0"}
            />
            <AgeBarStat
              age="15-19"
              maleValue={userAges?.age16 ? userAges?.age16.maleCount : "0"}
              femaleValue={userAges?.age16 ? userAges?.age16.femaleCount : "0"}
            />
            <AgeBarStat
              age="10-14"
              maleValue={userAges?.age11 ? userAges?.age11.maleCount : "0"}
              femaleValue={userAges?.age11 ? userAges?.age11.femaleCount : "0"}
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
              {exploreStat?.consumed.map((item) => (
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
                  <View
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
                      title={item.consume}
                      fontFamily={FONTS.Samsungsharpsans_Bold}
                    />
                  </View>
                  <TextComponent
                    color={COLORS.primary}
                    fontSize={22}
                    title={numberWithCommas(item.pills)}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                  <TextComponent
                    color={COLORS.primary}
                    fontSize={22}
                    title={parseFloat(item.percentage).toFixed(0) + "%"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </View>
              ))}
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
              {exploreStat?.takenWith.map((item) => (
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
                      title={item.combine}
                      fontFamily={FONTS.Samsungsharpsans_Bold}
                    />
                  </TouchableOpacity>

                  <TextComponent
                    color={COLORS.primary}
                    fontSize={22}
                    title={item.minPills}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />

                  <TextComponent
                    color={COLORS.primary}
                    fontSize={22}
                    title={item.maxPills}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                  <TextComponent
                    color={COLORS.primary}
                    fontSize={22}
                    title={parseFloat(item.avgPills).toFixed(1)}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </View>
              ))}
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
              {exploreStat?.takenWith.map((item) => (
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
                      title={item.combine}
                      fontFamily={FONTS.Samsungsharpsans_Bold}
                    />
                  </TouchableOpacity>

                  <TextComponent
                    color={COLORS.primary}
                    fontSize={22}
                    title={item.minPills}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />

                  <TextComponent
                    color={COLORS.primary}
                    fontSize={22}
                    title={item.maxPills}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                  <TextComponent
                    color={COLORS.primary}
                    fontSize={22}
                    title={parseFloat(item.avgPills).toFixed(1)}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </View>
              ))}
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
                <Text style={tabStyle.number}>{numberWithCommas(exploreStat?.doctorWarn?.doctorWarnYes)}</Text>
                <Text style={tabStyle.label}>Yes</Text>
              </View>
              <View style={tabStyle.column}>
                <Text style={tabStyle.percentage}>{parseFloat(exploreStat?.doctorWarn?.warnYesPer).toFixed(0)}%</Text>
                <Text style={tabStyle.label}>Percent</Text>
              </View>
            </View>

            {/* Separator */}
            <View style={tabStyle.separator} />

            {/* Row 2: Women */}
            <View style={tabStyle.row}>
              <View style={tabStyle.column}>
                <Text style={tabStyle.number}>{numberWithCommas(exploreStat?.doctorWarn?.doctorWarnNo)}</Text>
                <Text style={tabStyle.label}>No</Text>
              </View>
              <View style={tabStyle.column}>
                <Text style={tabStyle.percentage}>{parseFloat(exploreStat?.doctorWarn?.warnNoPer).toFixed(0)}%</Text>
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
              title={"Was your doctor supportive after and provided you with care?"}
              marginBottom={0}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />

            {/* Row 1: Men */}
            <View style={tabStyle.row}>
              <View style={tabStyle.column}>
                <Text style={tabStyle.number}>{numberWithCommas(exploreStat?.doctorSupport?.doctorWarnYesSup)}</Text>
                <Text style={tabStyle.label}>Yes</Text>
              </View>
              <View style={tabStyle.column}>
                <Text style={tabStyle.percentage}>{parseFloat(exploreStat?.doctorSupport?.warnYesPerSup).toFixed(0)}%</Text>
                <Text style={tabStyle.label}>Percent</Text>
              </View>
            </View>

            {/* Separator */}
            <View style={tabStyle.separator} />

            {/* Row 2: Women */}
            <View style={tabStyle.row}>
              <View style={tabStyle.column}>
                <Text style={tabStyle.number}>{numberWithCommas(exploreStat?.doctorSupport?.doctorWarnNoSup)}</Text>
                <Text style={tabStyle.label}>No</Text>
              </View>
              <View style={tabStyle.column}>
                <Text style={tabStyle.percentage}>{parseFloat(exploreStat?.doctorSupport?.warnNoPerSup).toFixed(0)}%</Text>
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
              fontSize={15}
              title={"Severity"}
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
                <View
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
                    title={'Mild'}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </View>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={numberWithCommas(exploreStat?.severity?.sev_mild)}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                  textAlign={'right'}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={numberWithCommas(exploreStat?.severity?.sev_mildP)}
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
                <View
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
                    title={'Moderate'}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </View>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={numberWithCommas(exploreStat?.severity?.sev_moderate)}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                  textAlign={'center'}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={parseFloat(exploreStat?.severity?.sev_moderateP).toFixed(0)}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                  textAlign={'right'}
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
                <View
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
                    title={'Severe'}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </View>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={numberWithCommas(exploreStat?.severity?.sev_severe)}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                  textAlign={'right'}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={parseFloat(exploreStat?.severity?.sev_severeP).toFixed(0)}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                  textAlign={'right'}
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
                <View
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
                    title={'Severe +'}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </View>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={numberWithCommas(exploreStat?.severity?.sev_severePlus)}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={parseFloat(exploreStat?.severity?.sev_severePlusP).toFixed(0)}
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
                  title={"2"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"50%"}
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
                  title={"1"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"10%"}
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
                  title={"1"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"10%"}
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
                  title={"1"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TextComponent
                  color={COLORS.primary}
                  fontSize={22}
                  title={"10%"}
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
              {exploreStat?.drugPercentageFloxed.map((item, index) => (
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
                        minWidth: normalize(10),
                        paddingHorizontal: normalize(10),
                      },
                    ]}
                  >
                    <TextComponent
                      color={COLORS.white}
                      fontSize={9}
                      title={item.name}
                      fontFamily={FONTS.Samsungsharpsans_Bold}
                    />
                  </TouchableOpacity>
                  <TextComponent
                    color={COLORS.primary}
                    fontSize={22}
                    title={item.total}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                  <TextComponent
                    color={COLORS.primary}
                    fontSize={22}
                    title={parseFloat(item.yesPercentage).toFixed(0) + '%'}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </View>
              ))}

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
              {exploreStat?.country.map((item, index) => (
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
                      title={item.country}
                      fontFamily={FONTS.Samsungsharpsans_Bold}
                    />
                  </TouchableOpacity>
                  <TextComponent
                    color={COLORS.primary}
                    fontSize={22}
                    title={item.count}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                  <TextComponent
                    color={COLORS.primary}
                    fontSize={22}
                    title={item.percent + '%'}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </View>
              ))}
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