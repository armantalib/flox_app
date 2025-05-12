import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BackBtn from "../../../components/BackBtn";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import { IMAGES, SVG_IMAGES } from "../../../constants/images";
import { verticalScale } from "react-native-size-matters";

const data = [
  {
    id: "1",
    title: "Grounding yourself\ninto earth",

    image: IMAGES.S_Img1, // Replace with actual image path
    date: "Feb 10, 2025",
    duration: "5 min read",
  },
];

const ExploreDetailsScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={styles.safeArea}>
      <BackBtn
        customStyle={{
          paddingTop: insets.top,
          left: 0,
        }}
        navigation={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={[]}>
          {data?.map((item) => (
            <View key={item.id} style={styles.card}>
              <TouchableOpacity style={styles.dotsSTyle}>
                <SVG_IMAGES.DotsIcon_SVG />
              </TouchableOpacity>
              <View style={styles.content}>
                <View style={styles.imageContainer}>
                  <Image source={item.image} style={styles.image} />
                  <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>New</Text>
                  </View>
                  <View style={styles.posNew}>
                    <Text style={styles.duration}>{item.duration}</Text>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>

                  <View style={styles.overlay} />
                </View>
                <View style={styles.authorContainer}>
                  <View style={styles.authorImageContainer}>
                    <Image
                      source={IMAGES.User1_Img}
                      style={styles.authorImage}
                    />
                  </View>
                  <View style={styles.authorInfoContainer}>
                    <Text style={styles.authorName}>Ben</Text>
                    <Text style={styles.authorRole}>12th Dec 2024</Text>
                  </View>
                  <TouchableOpacity style={styles.authorButton}>
                    <SVG_IMAGES.HeartGrey_SVG  width={26} height={26} marginRight={3} />
                  </TouchableOpacity>
                </View>
                <View style={styles.descriptionContainer}>
                  <Text style={styles.description}>
                    In today’s fast-paced world, it’s easy to feel overwhelmed,
                    disconnected, or lost in constant stress. Grounding yourself
                    is a simple yet powerful practice that brings you back to
                    the present moment, helping you regain clarity, calmness,
                    and balance.
                  </Text>
                  <Image
                    source={IMAGES.Island_IMG}
                    style={styles.islandImage}
                  />
                  <Text style={styles.description}>
                    In today’s fast-paced world, it’s easy to feel overwhelmed,
                    disconnected, or lost in constant stress. Grounding yourself
                    is a simple yet powerful practice that brings you back to
                    the present moment, helping you regain clarity, calmness,
                    and balance.
                  </Text>
                </View>
                <View
                  style={[
                    styles.authorContainer,
                    {
                      paddingVertical: verticalScale(20),
                    },
                  ]}
                >
                  <Text style={styles.buttonText}>
                    Thanks for reading, have a great day!
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ExploreDetailsScreen;
