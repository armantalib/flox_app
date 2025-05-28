import { View, FlatList, TouchableOpacity, Text } from "react-native";
import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { dataGet_ } from "../../../utils/myAxios";
import { setHubPostDetail } from "../../../storeTolkit/hubSlice";

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

const ExploreScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCategoryAll, setSelectedCategoryAll] = useState(null);
  const [exploreData, setExploreData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const { categoryExplore } = useSelector((state) => state?.hub);

  useEffect(() => {
    getCardData();
  }, [categoryExplore])


  const getCardData = async () => {
    const endPoint = 'hub/category/posts/' + categoryExplore?._id;
    const response = await dataGet_(endPoint, {});
    if (response.success) {
      setExploreData(response?.data)
    }
    if (response?.categories.length >= 1) {
      let obj = {
        "_id": "6836a929fbe1db78b3e8b422",
        "name": "All",
        "type": "filter",
        "category": "68344dc66ebacffeb7b4121d",
        "createdAt": "2025-05-28T06:11:53.388Z",
        "__v": 0
      }
      let mArray = response?.categories;
      mArray.unshift(obj)
      setFilterData(mArray)

    }
  }

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
            title={categoryExplore?.category}
            marginBottom={20}
            fontFamily={FONTS.Samsungsharpsans_Bold}
            textAlign="center"
          />
          <View>
            <FlatList
              data={filterData}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.categoryButton,
                    selectedCategory === item.name && styles.selectedCategoryButton,
                  ]}
                  onPress={() => {
                    setSelectedCategory(item.name)
                    setSelectedCategoryAll(item)
                  }}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      selectedCategory === item.name && styles.selectedCategoryText,
                    ]}
                  >
                    {item?.name}
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
              onPressPray={() =>
                navigation.navigate(SCREENS.NavigationRoutes, {
                  screen: SCREENS.Music,
                })
              }

              data={exploreData}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExploreScreen;
