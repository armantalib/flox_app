import React from "react";
import { View, StyleSheet } from "react-native";
import { verticalScale } from "react-native-size-matters";

const CustomProgressBar = ({ progress }) => {
  return (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    width: "100%",
    height: 20,
    borderRadius: 10,
    backgroundColor: "#d3d3d3",
    overflow: "hidden",
    marginBottom: verticalScale(15),
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#222", // Dark color as in the image
  },
});

export default CustomProgressBar;
