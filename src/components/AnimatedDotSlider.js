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
import { normalize } from "../utils/Metrics";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import stylesG from "../assets/css/stylesG";
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
const screenWidth = Dimensions.get("window").width;
export default function AnimatedDotSlider({ content }) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [selectedTag, setSelectedTag] = useState(1);

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
          backgroundColor: "#2c2c2c",
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
          <View style={tabStyle.tabContainerCenter}>
            {content ?
              <>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={27}
                  title={"This month\nI’m feeling"}
                  fontFamily={FONTS.Samsungsharpsans_Medium}
                  textAlign={"center"}
                />
                <Text style={tabStyle.h1}>
                  65<Text style={tabStyle.h1small}>%</Text>
                </Text>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={27}
                  title={"Recovered"}
                  fontFamily={FONTS.Samsungsharpsans_Medium}
                  textAlign={"center"}
                />
              </> :
              <View style={[{width:'100%',height:normalize(300)},stylesG.contentCenter]}>
              <Text style={tabStyle.h1}>
                <Text style={[tabStyle.h1small, { fontSize: normalize(22),lineHeight:normalize(30) }]}>Kindly update this month's data to track the progress</Text>
              </Text>
              </View>
            }
          </View>
        </View>
        {/* 2nd Slide */}
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
                height: Dimensions.get("screen").height * 0.34,
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
        </View>
        {/* 3rd Slide */}
        <View
          style={{
            flex: 1,
          }}
        >
          <View style={[tabStyle.flexRow, tabStyle.mb8]}>
            <TextComponent
              color={COLORS.primary}
              fontSize={20}
              title={"Recovery"}
              fontFamily={FONTS.Samsungsharpsans_Bold}
            />
            <TextComponent
              color={COLORS.primary}
              fontSize={14}
              title={`Wed, Dec 11th`}
              fontFamily={FONTS.Samsungsharpsans_Bold}
            />
          </View>
          <View style={[tabStyle.flexRow, tabStyle.mb8]}>
            <Text style={tabStyle.h2}>
              65<Text style={tabStyle.h2small}>%</Text>
            </Text>
            <ToggleSwitch />
          </View>
          <View
            style={[
              {
                height: normalize(260),
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
              height={normalize(240)}
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
        {/* 4rth Slide */}
        <View
          style={{
            flex: 1,
          }}
        >
          <View style={[tabStyle.flexRow, tabStyle.mb8]}>
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
          <View style={[tabStyle.flexRow, tabStyle.mb8]}>
            <TextComponent
              color={COLORS.primary}
              fontSize={27}
              title={`4,532`}
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />
            <ToggleSwitch />
          </View>
          <View
            style={[
              {
                height: normalize(260),
                flexDirection: "row",
                overflow: "hidden",
                paddingTop: 10,
                marginTop: normalize(10),
                marginBottom: verticalScale(1),
              },
            ]}
          >
            <BarChart
              style={{
                marginVertical: 8,
                borderRadius: 10
              }}
              data={data}
              width={screenWidth}
              height={normalize(240)}
              yAxisLabel=""
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
              verticalLabelRotation={30}
            />
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
              title={"Download your\nprogress"}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />
            <TextComponent
              color={COLORS.primary}
              fontSize={23}
              title={
                "Click the button below to download your current recorded progress as a PDF"
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


const data = {
  labels: ["J", "F", "M", "A", "M", "J", "J"],
  datasets: [
    {
      data: [20, 45, 100, 400, 500, 43, 300]
    }
  ]
};

const chartConfig = {
  backgroundGradientFrom: COLORS.black,
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: COLORS.black,
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional

};