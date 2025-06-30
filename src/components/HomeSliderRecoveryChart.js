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
} from "react-native-chart-kit";
import { normalize } from '../utils/Metrics';
import moment from 'moment';
import { getAverageYearPercentage, getYearlyPercentages, searchByDate } from '../utils/Helper';

const screenWidth = Dimensions.get("window").width;

const HomeSliderRecoveryChart = (props) => {
  const [toggleSwitch, setToggleSwitch] = useState('Monthly');
  const { stepsData } = useSelector((state) => state?.steps);
  const [currentMonthPer, setCurrentMonthPer] = useState(null);
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
    console.log("CE",stepsData?.recovery_history);
    
    if (stepsData?.recovery_history) {
      const date = moment().format('YYYY-MM')
      let searchDate = searchByDate(date, stepsData?.recovery_history)
      if (searchDate.length > 0) {
        setCurrentMonthPer(searchDate[0].percentage)
      }
      const recoverData1 = getAverageYearPercentage(2025, stepsData?.recovery_history)
      setLabels(["J", "F", "M", "A", "M", "J",
        "J", "A", "S", "O", "N", "D"])
      setGraphData(recoverData1?.monthlySums)
    }
  }

  const checkYearlyData = async () => {
    if (stepsData?.recovery_history) {
      const recoverData1 = getYearlyPercentages(stepsData?.recovery_history, 2020, 2025)
      setLabels(["2020", "2021", "2022", "2023", "2024", "2025"])
      setCurrentMonthPer(recoverData1?.averagePercentage)
      setGraphData(recoverData1?.yearlyPercentages)
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
          title={"Recovery"}
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
        <Text style={tabStyle.h2}>
          {currentMonthPer}<Text style={tabStyle.h2small}>%</Text>
        </Text>
        <ToggleSwitch
          toggleValue={(val) => setToggleSwitch(val)}
        />
      </View>
      <View
        style={{
          // paddingTop: 1,
          // marginTop: normalize(1),
          marginBottom: verticalScale(1),
          marginLeft:normalize(-10)
        }}
      >
        {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
        <LineChart
          data={{
            labels: labelData,
            datasets: [
              {
                data: graphData
              }
            ]
          }}
          width={screenWidth-normalize(58)} // Wider than screen to fit all months
          height={normalize(280)}
          yAxisLabel=""
          yAxisSuffix="%"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: "transparent",
            backgroundGradientFrom: "#FFFFFF",
            backgroundGradientTo: "#FFFFFF",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(44, 44, 44, ${opacity})`,
            labelColor: () => "#2C2C2C",
            style: {
              borderRadius: 10,
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
          }}
          bezier
          style={{
            marginVertical: 2,
            borderRadius: 10,
            
          }}
          
          withDots={true} // Consider removing dots if space is tight
          withShadow={true} // Remove shadow to save space
          segments={labelData.length} // Adjust segments to match your data points 
        />

      </View>
    </View>
  );
};

export default HomeSliderRecoveryChart;

const styles = StyleSheet.create({
  backBtn: {
    paddingLeft: moderateScale(15),
    position: 'absolute',
    zIndex: 2,
  },
});
