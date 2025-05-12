import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { COLORS } from "../constants/colors";
import { FONTS } from "../constants/fonts";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SVG_IMAGES } from "../constants/images";

const MeditationCard = ({ item, showLiked, onPressPray }) => {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <TouchableOpacity
      onPress={item.onPress}
      activeOpacity={0.8}
      style={styles.card}
    >
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
          <LinearGradient
            colors={["#3995FF", "#3995FF"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={styles.badgeContainer}
          >
            <Text style={styles.badgeText}>New</Text>
          </LinearGradient>
          {item.date && <Text style={styles.dateText}>{item.date}</Text>}
          <Text style={styles.duration}>{item.duration}</Text>
          {showLiked && (
            <TouchableOpacity
              onPress={toggleLike}
              style={{
                position: "absolute",
                bottom: 10,
                right: 10,
                zIndex: 3,
              }}
            >
              {isLiked ? (
                <SVG_IMAGES.HeartFill_SVG />
              ) : (
                <SVG_IMAGES.Heart1_SVG />
              )}
            </TouchableOpacity>
          )}
          {item.isVideo && (
            <TouchableOpacity
              onPress={item.onPressPray}
              style={styles.playButton}>
              <SVG_IMAGES.Play_SVG />
            </TouchableOpacity>
          )}
          <View style={styles.overlay} />
        </View>
        <View style={{ paddingHorizontal: moderateScale(5) }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const CardTwoItemsComponent = ({ data, onPress, showLiked, onPressPray }) => {
  const insets = useSafeAreaInsets();
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <MeditationCard showLiked={showLiked} item={{ ...item, onPress, onPressPray }} />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2} // Ensures two items per row
      columnWrapperStyle={styles.row} // Adds spacing between columns
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom:
          insets.bottom +
          insets.bottom +
          insets.bottom +
          insets.bottom +
          insets.bottom +
          insets.bottom +
          insets.bottom +
          insets.bottom,
      }} // Adds spacing around the list
    />
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
  },

  row: {
    justifyContent: "space-between", // Ensures equal spacing between items
    marginBottom: verticalScale(5),
  },
  card: {
    flex: 1,
    maxWidth: "48.75%", // Ensures two items fit in a row
    borderRadius: 20,
    backgroundColor: COLORS.white,
    shadowColor: "#fff0",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
    margin: 0,
    marginBottom: 2.5,
  },
  imageContainer: {
    position: "relative",
    marginBottom: verticalScale(7),
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  badgeContainer: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#7b5af4",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 15,
    zIndex: 1,
  },
  badgeText: {
    color: COLORS.white,
    fontSize: scale(8.5),
    fontFamily: FONTS.Samsungsharpsans_Bold,
  },
  dateText: {
    position: "absolute",
    top: 14,
    right: 10,
    color: COLORS.white,
    fontSize: scale(10),
    fontFamily: FONTS.Samsungsharpsans_Bold,
    zIndex: 1,
  },
  content: {
    padding: 8,
  },
  duration: {
    fontSize: scale(14),
    color: COLORS.white,
    fontFamily: FONTS.Samsungsharpsans_Bold,
    position: "absolute",
    bottom: 5,
    left: 10,
    zIndex: 1,
  },
  title: {
    fontSize: scale(14),
    fontFamily: FONTS.Samsungsharpsans_Bold,
    color: "#333",
    marginBottom: verticalScale(5),
  },
  description: {
    fontSize: scale(10.5),
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: "#333",
    paddingBottom: verticalScale(3),
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }],
    zIndex: 3,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CardTwoItemsComponent;
