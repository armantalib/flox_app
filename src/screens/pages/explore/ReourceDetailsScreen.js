import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import GradientBackground from "../../../components/GradientBackground";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TextComponent from "../../../components/TextComponent";
import { FONTS } from "../../../constants/fonts";
import { COLORS } from "../../../constants/colors";
import BackBtn from "../../../components/BackBtn";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import { IMAGES } from "../../../constants/images";
import { verticalScale } from "react-native-size-matters";
import { SCREENS } from "../../../constants/Screen";
import ResourcesComponent from "../../../components/ResourcesComponent";
import { ResourceCard } from "../../../components/ResourcesCardComp";
import { normalize } from "../../../utils/Metrics";

const categories = ["All", "Studies", "FDA", "Drug Warnings", "Recovery"];

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
  },
  {
    id: "2",
    title: "Grounding yourself into",
    duration: "16 mins",
    description:
      "1-on-1 live coaching from experienced floxies who have fully recovered",
    image: IMAGES.IMG2,
    date: "12/03/2024",
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

const ReourceDetailsScreen = () => {
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
        <View style={[styles.wrapper]}>
          <TextComponent
            color={COLORS.primary}
            fontSize={31}
            title="Resources"
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
            />
          </View>
          <View style={{ height: verticalScale(15) }} />

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              paddingBottom: insets.bottom + normalize(250),
            }}
            keyboardShouldPersistTaps="handled"
          >
            <View style={{ marginHorizontal: verticalScale(0) }}>
              <ResourceCard
                width={'100%'}
              />
              <ResourceCard
                width={'100%'}
              />
               <ResourceCard
                width={'100%'}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ReourceDetailsScreen;
