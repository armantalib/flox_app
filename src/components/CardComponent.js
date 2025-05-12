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
import { SCREENS } from "../constants/Screen";
import { useNavigation } from "@react-navigation/native";
import { SVG_IMAGES } from "../constants/images";
const MeditationCard = ({ item, showLiked }) => {
  const navigation = useNavigation();
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate(SCREENS.NavigationRoutes, {
                screen: SCREENS.Subscribe,
              })
            }
          >
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
                style={styles.playButton}
                onPress={() =>
                  navigation.navigate(SCREENS.NavigationRoutes, {
                    screen: SCREENS.Music,
                  })
                }
              >
                <SVG_IMAGES.Play_SVG />
              </TouchableOpacity>
            )}

            <View style={styles.overlay} />
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: moderateScale(7) }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(SCREENS.NavigationRoutes, {
                screen: SCREENS.ExploreDetails,
              })
            }
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
};

const CardComponent = ({ data, showLiked }) => {
  return (
    <View style={[styles.container]}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <MeditationCard item={item} showLiked={showLiked} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={{ width: moderateScale(15) }} />
        )}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 20,
  },
  container: {
    flex: 1,
    marginHorizontal: -20,
  },
  card: {
    width: 245,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    shadowColor: "#fff0",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 5,
    marginBottom: 10,
  },
  imageContainer: {
    position: "relative",
    marginBottom: verticalScale(10),
  },
  image: {
    width: "100%",
    height: 146,
    borderRadius: 10,
  },
  badgeContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#7b5af4",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 15,
    zIndex: 1,
  },
  badgeText: {
    color: COLORS.white,
    fontSize: scale(9),
    fontFamily: FONTS.Samsungsharpsans_Bold,
  },
  dateText: {
    position: "absolute",
    top: 14,
    right: 10,
    color: COLORS.white,
    fontSize: scale(11),
    fontFamily: FONTS.Samsungsharpsans_Bold,
    zIndex: 1,
  },
  content: {
    padding: 10,
  },
  duration: {
    fontSize: scale(19),
    color: COLORS.white,
    fontFamily: FONTS.Samsungsharpsans_Bold,
    position: "absolute",
    bottom: 5,
    left: 10,
    zIndex: 1,
  },
  title: {
    fontSize: scale(16),
    fontFamily: FONTS.Samsungsharpsans_Bold,
    color: "#2c2c2c",
    marginBottom: verticalScale(6),
  },
  description: {
    fontSize: scale(12),
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: "#2c2c2c",
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

export default CardComponent;
