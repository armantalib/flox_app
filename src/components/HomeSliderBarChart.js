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
  const [labelData, setLabels] = useState(["J", "F", "M", "A", "M", "J",
    "J", "A", "S", "O", "N", "D"]);
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
      setLabels(["J", "F", "M", "A", "M", "J",
        "J", "A", "S", "O", "N", "D"])
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
        <BarChart

          data={{
            labels: labelData,
            datasets: [
              {
                data: graphData,
           
              }
            ]
          }}
          width={screenWidth - normalize(70)} // Wider than screen to fit all months
          height={normalize(240)}
          yAxisLabel=""
          fromZero={true} // Start Y-axis at 0

          chartConfig={{
            backgroundColor: "transparent",
            backgroundGradientFrom: "#FFFFFF",
            backgroundGradientTo: "#FFFFFF",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Fallback
            labelColor: () => "#2C2C2C",
            barPercentage: 0.2, // Reduces bar width (0.5 = 50% of available space)
            style: {
              borderRadius: 10,
            },
            propsForBackgroundLines: {
              strokeWidth: 0, // No grid lines
            },
            propsForDots: {
              r: "1",
              strokeWidth: "1",
              stroke: "#2C2C2C",
            },
            propsForLabels: {
              fontSize: 10, // Reduce font size if needed
            },
            propsForBackgroundLines: {
              strokeWidth: 0, // This removes the grid lines
            },

            fillShadowGradient: '#000000', // ⭐ Force solid black fill
            fillShadowGradientOpacity: 1,   // ⭐ No transparency

          }}
          bezier
          style={{
            marginVertical: 2,
            borderRadius: 10,

          }}
          withDots={false} // Disable dots for cleaner look
          withShadow={false} // No shadow
          verticalLabelRotation={30} // Angled X-axis labels
          showBarTops={false} // Remove caps from bars
        />
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
