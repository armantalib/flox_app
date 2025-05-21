import React, { useRef, useState, useEffect } from "react";
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
import { searchByDate } from "../utils/Helper";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../constants/Screen";
import { useDispatch, useSelector } from "react-redux";
import { setStepsData } from "../storeTolkit/stepsSlice";
import HomeSymptomSliderComp from "./HomeSymptomSliderComp";
import HomeSliderRecoveryChart from "./HomeSliderRecoveryChart";
import HomeSliderBarChart from "./HomeSliderBarChart";
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
export default function AnimatedDotSlider({ content }, ...props) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [selectedTag, setSelectedTag] = useState(1);
  const [currentMonthPer, setCurrentMonthPer] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { stepsData } = useSelector((state) => state?.steps);

  useEffect(() => {
    checkPerDateBy();
  }, [stepsData])

  const checkPerDateBy = async () => {
    if (stepsData?.recovery_history) {
      const date = moment().format('YYYY-MM')
      let searchDate = searchByDate(date, stepsData?.recovery_history)
      if (searchDate.length > 0) {
        setCurrentMonthPer(searchDate[0])
      }
    }
  }

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
          {currentMonthPer ?
            <View style={tabStyle.tabContainerCenter}>
              <>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={27}
                  title={"This month\nI’m feeling"}
                  fontFamily={FONTS.Samsungsharpsans_Medium}
                  textAlign={"center"}
                />
                <Text style={tabStyle.h1}>
                  {currentMonthPer?.percentage}
                  <Text style={tabStyle.h1small}>%</Text>
                </Text>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={27}
                  title={"Recovered"}
                  fontFamily={FONTS.Samsungsharpsans_Medium}
                  textAlign={"center"}
                />
              </>
            </View> :
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
                title={"Record your recovery"}
                fontFamily={FONTS.Samsungsharpsans_Bold}
                textAlign={"center"}
              />
              <TextComponent
                color={COLORS.primary}
                fontSize={23}
                title={
                  "Track your progress this month to view your results!"
                }
                fontFamily={FONTS.Samsungsharpsans_Medium}
                textAlign={"center"}
              />
              <BtnPrimary
                title="Next"
                onPress={() => {
                  // Trigger haptic feedback
                  navigation.navigate(SCREENS.AuthRoutes, {
                    screen: SCREENS.StepEight,
                    params: { pData: { update: true, } },
                  });
                }}
              />
            </View>
          }
        </View>
        {/* 2nd Slide */}
        <HomeSymptomSliderComp
          {...props}
        />

        {/* 3rd Slide */}
        <HomeSliderRecoveryChart
          {...props}
        />
        {/* 4rth Slide */}
        <HomeSliderBarChart
          {...props}
        />
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