import { View, FlatList, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import GradientBackground from "../../../components/GradientBackground";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TextComponent from "../../../components/TextComponent";
import { FONTS } from "../../../constants/fonts";
import { COLORS } from "../../../constants/colors";
import BackBtn from "../../../components/BackBtn";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import CardTwoItemsComponent from "../../../components/CardTwoItemsComponent";
import { IMAGES } from "../../../constants/images";
import { verticalScale } from "react-native-size-matters";
import { SCREENS } from "../../../constants/Screen";

const categories = [
  "All",
  "Recovery",
  "Anxiety",
  "Depression",
  "Stress",
  "Mindfulness",
];

const data = [
  {
    id: "1",
    title: "Meditation for gratitude",
    duration: "16 mins",
    description:
      "1-on-1 live coaching from experienced floxies who have fully recovered",
    image: IMAGES.IMG1,
    date: "12/03/2024",
    onPress: () => alert("Morning Meditation Clicked!"),
    isVideo: true,
  },
  {
    id: "2",
    title: "Grounding yourself into",
    duration: "16 mins",
    description:
      "1-on-1 live coaching from experienced floxies who have fully recovered",
    image: IMAGES.IMG2,
    date: "12/03/2024",
    isVideo: true,
  },
  {
    id: "3",
    title: "Meditation for gratitude",
    duration: "16 mins",
    description:
      "1-on-1 live coaching from experienced floxies who have fully recovered",
    image: IMAGES.IMG1,
    date: "12/03/2024",
  },
  {
    id: "4",
    title: "Grounding yourself into",
    duration: "16 mins",
    description:
      "1-on-1 live coaching from experienced floxies who have fully recovered",
    image: IMAGES.IMG2,
    date: "12/03/2024",
  },
  {
    id: "5",
    title: "Meditation for gratitude",
    duration: "16 mins",
    description:
      "1-on-1 live coaching from experienced floxies who have fully recovered",
    image: IMAGES.IMG1,
    date: "12/03/2024",
  },
  {
    id: "6",
    title: "Grounding yourself into",
    duration: "16 mins",
    description:
      "1-on-1 live coaching from experienced floxies who have fully recovered",
    image: IMAGES.IMG2,
    date: "12/03/2024",
  },
];

const MeditationAudioScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <View style={styles.safeArea}>
      <GradientBackground />
      <BackBtn navigation={() => navigation.goBack()} />
      <View
        style={{ paddingTop: insets.top + 40 }}
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={[
            styles.wrapper,
            {
              paddingHorizontal: 0,
            },
          ]}
        >
          <TextComponent
            color={COLORS.primary}
            fontSize={31}
            title="Mindfulness"
            marginBottom={20}
            fontFamily={FONTS.Samsungsharpsans_Bold}
            textAlign="center"
          />
          <View>
            <FlatList
              data={categories}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.categoryButton,
                    selectedCategory === item && styles.selectedCategoryButton,
                  ]}
                  onPress={() => setSelectedCategory(item)}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      selectedCategory === item && styles.selectedCategoryText,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
              contentContainerStyle={{
                paddingHorizontal: 20,
              }}
            />
          </View>
          <View style={{ height: verticalScale(10) }} />
          <View style={{ paddingHorizontal: 15 }}>
            <CardTwoItemsComponent
              showLiked
              onPress={() =>
                navigation.navigate(SCREENS.NavigationRoutes, {
                  screen: SCREENS.ExploreDetails,
                })
              }
              data={data}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MeditationAudioScreen;
