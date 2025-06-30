import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Animated, Text, Dimensions, ScrollView, View, TouchableOpacity } from 'react-native';
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
import { getAverageYearPercentage, getYearlyAveragePercentages, getYearlyPercentageMonthly, getYearlyPercentages, getYearlyStepCounts, getYearlyStepTotals, searchByDate } from '../utils/Helper';
import stylesG from '../assets/css/stylesG';
import { dataGet_, dataPost } from '../utils/myAxios';

const screenWidth = Dimensions.get("window").width;

const ExploreSliderBarChart = (props) => {
  const [toggleSwitch, setToggleSwitch] = useState('Yearlyqqq');
  const [tab, setTab] = useState('Moderate');
  const { stepsData } = useSelector((state) => state?.steps);
  const [serveData, setServeData] = useState([]);
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
  }, [serveData, toggleSwitch])

  useEffect(() => {
    getDataSer()
  }, [tab])

  const getDataSer = async () => {
    const endPoint = 'antibiotic/check/serve';
    const response = await dataPost(endPoint, {rate_reaction:tab});
    console.log("RE",response);
    
    if (response.success) {
      setServeData(response?.data)
    } else {
      setServeData([])
    }
  }


  const checkPerDateBy = async () => {
   if (serveData.length>0) {

      const recoverData1 = getYearlyPercentageMonthly(2025, serveData)
      setLabels(["J", "F", "M", "A", "M", "J",
        "J", "A", "S", "O", "N", "D"])
      setCurrentMonthPer(recoverData1?.totalSteps)
      setGraphData(recoverData1?.monthlySteps)
    }else{
      setCurrentMonthPer(0)
      setGraphData([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    }
  }

  const checkYearlyData = async () => {
    if (serveData.length>0) {
      const recoverData1 = getYearlyAveragePercentages(serveData, 2020, 2025)
      
      setLabels(["2020", "2021", "2022", "2023", "2024", "2025"])
      setCurrentMonthPer(recoverData1?.average)
      setGraphData(recoverData1?.yearlySteps)
    }else{
      setCurrentMonthPer(0)
      setGraphData([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    }
  }


  return (
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
          title={parseFloat(currentMonthPer).toFixed(1)+" %"}
          textAlign={"center"}
          marginBottom={15}
          fontFamily={FONTS.Samsungsharpsans_Bold}
        />
      </View>
      <View style={[stylesG.spaceBetween]}>
        <View style={[{ width: '73%', height: normalize(38), borderColor: '#2C2C2C', borderWidth: normalize(0.5), borderRadius: normalize(50), justifyContent: 'center' }]}>
          <View style={[stylesG.flexRow, { overflow: 'hidden' }]}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
              <TouchableOpacity
                onPress={() => setTab('Mild')}
                style={[{ paddingLeft: normalize(10), marginLeft: normalize(5), paddingRight: normalize(10), height: normalize(38), backgroundColor: tab === 'Mild' ? COLORS.black : COLORS.white, borderRadius: normalize(50) }, stylesG.contentCenter]}>
                <TextComponent
                  color={tab === 'Mild' ? COLORS.white : COLORS.black}
                  fontSize={normalize(9)}
                  title={"Mild"}
                  textAlign={"left"}
                  fontFamily={FONTS.Samsungsharpsans_Medium}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setTab('Moderate')}
                style={[{ paddingLeft: normalize(10), marginLeft: normalize(5), paddingRight: normalize(10), height: normalize(38), backgroundColor: tab === 'Moderate' ? COLORS.black : COLORS.white, borderRadius: normalize(50) }, stylesG.contentCenter]}>
                <TextComponent
                  color={tab === 'Moderate' ? COLORS.white : COLORS.black}
                  fontSize={normalize(9)}
                  title={"Moderate"}
                  textAlign={"left"}
                  fontFamily={FONTS.Samsungsharpsans_Medium}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setTab('Severe')}
                style={[{ paddingLeft: normalize(10), marginLeft: normalize(5), paddingRight: normalize(10), height: normalize(38), backgroundColor: tab === 'Severe' ? COLORS.black : COLORS.white, borderRadius: normalize(50) }, stylesG.contentCenter]}>
                <TextComponent
                  color={tab === 'Severe' ? COLORS.white : COLORS.primary}
                  fontSize={normalize(9)}
                  title={"Severe"}
                  textAlign={"left"}
                  fontFamily={FONTS.Samsungsharpsans_Medium}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setTab('Severe+')}
                style={[{ paddingLeft: normalize(10), marginLeft: normalize(5), paddingRight: normalize(10), height: normalize(38), backgroundColor: tab === 'Severe+' ? COLORS.black : COLORS.white, borderRadius: normalize(50) }, stylesG.contentCenter]}>
                <TextComponent
                  color={tab === 'Severe+' ? COLORS.white : COLORS.black}
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
            labels: labelData,
            datasets: [
              {
                data: graphData,

              }
            ]
          }}
          width={screenWidth - normalize(70)} // Wider than screen to fit all months
          height={normalize(200)}
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

export default ExploreSliderBarChart;

const data = {
  labels: ["J", "F", "M", "A", "M", "J", "J"],
  datasets: [
    {
      data: [20, 45, 100, 400, 500, 43, 300]
    }
  ]
};
