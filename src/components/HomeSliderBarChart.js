import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Animated, Text, Dimensions, ScrollView, View } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { COLORS } from '../constants/colors';
import TextComponent from './TextComponent';
import { FONTS } from '../constants/fonts';
import { tabStyle } from '../constants/style';
import { useSelector } from 'react-redux';
import ToggleSwitch from "./ToggleSwitch";
import {
  LineChart,
  BarChart
} from "react-native-chart-kit";
import { normalize } from '../utils/Metrics';
import moment from 'moment';
import { getAverageYearPercentage, getYearlyPercentages, getYearlyStepCounts, getYearlyStepTotals, searchByDate } from '../utils/Helper';

const screenWidth = Dimensions.get("window").width;

const HomeSliderBarChart = (props) => {
  const [toggleSwitch, setToggleSwitch] = useState('Monthly');
  const { stepsData } = useSelector((state) => state?.steps);
  const [currentMonthPer, setCurrentMonthPer] = useState(0);
  const [labelData, setLabels] = useState(["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);
  const [graphData, setGraphData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    if (toggleSwitch == 'Yearly') {
      checkYearlyData();
    } else {
      checkPerDateBy();
    }
  }, [stepsData, toggleSwitch])

  const checkPerDateBy = async () => {
    if (stepsData?.count_history) {
      const recoverData1 = getYearlyStepTotals(2025, stepsData?.count_history)
      setLabels(["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"])
      setCurrentMonthPer(recoverData1?.totalSteps)
      setGraphData(recoverData1?.monthlySteps)
    }
  }

  const checkYearlyData = async () => {
    if (stepsData?.count_history) {
      const recoverData1 = getYearlyStepCounts(stepsData?.count_history, 2020, 2025)
      setLabels(["2020", "2021", "2022", "2023", "2024", "2025"])
      setCurrentMonthPer(recoverData1?.average)
      setGraphData(recoverData1?.yearlySteps)
    }
  }


  return (
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
          title={moment().format('ddd, MMM DD')}
          fontFamily={FONTS.Samsungsharpsans_Bold}
        />
      </View>
      <View style={[tabStyle.flexRow, tabStyle.mb8]}>
        <TextComponent
          color={COLORS.primary}
          fontSize={27}
          title={currentMonthPer}
          fontFamily={FONTS.Samsungsharpsans_Medium}
        />
        <ToggleSwitch
          toggleValue={(val) => setToggleSwitch(val)}
        />
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <BarChart
            style={{
              marginVertical: 8,
              borderRadius: 10
            }}
            data={{
              labels: labelData,
              datasets: [
                {
                  data: graphData
                }
              ]
            }}
            width={screenWidth * 1.6}
            height={normalize(240)}
            yAxisLabel=""
            chartConfig={{
              backgroundColor: "transparent",
              backgroundGradientFrom: "#000000",
              backgroundGradientTo: "#000000",
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(101, 100, 184, ${opacity})`,
              labelColor: () => "#6564b8",
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
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeSliderBarChart;

const data = {
  labels: ["J", "F", "M", "A", "M", "J", "J"],
  datasets: [
    {
      data: [20, 45, 100, 400, 500, 43, 300]
    }
  ]
};
