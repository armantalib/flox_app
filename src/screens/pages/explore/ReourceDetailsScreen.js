import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  ScrollView,
  Dimensions,
  Linking,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
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
import { useFocusEffect } from '@react-navigation/native';
import { dataPost } from "../../../utils/myAxios";
import { Loader } from "../../../components/General";

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

const ReourceDetailsScreen = (props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [resourceData, setResourcesData] = useState([]);
  const [resourceDataTemp, setResourcesDataTemp] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loader, setLoader] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [category, setCategory] = useState('');

  useEffect(() => {
    getResources(true);
  }, [category]);

  useEffect(() => {
    if (page > 1) {
      getResources();
    }
  }, [page]);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      // setLoadingMore(false)
      getResources(page == 1 ? true : false);
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [page])
  );



  const getResources = useCallback(async (reset = false) => {
    if (loadingMore && !reset) return;
    if (reset) {
      setPage(1);
      setHasMore(true);
      setResourcesData([]);
      setResourcesDataTemp([]);
    } else {
      setLoadingMore(true);
    }
    const currentPage = reset ? 1 : page;
    const data = {
      startDate: '',
      endDate: '',
      sort: '',
      category: category,
      page: currentPage,
      limit: 10,
    };

    const endPoint = 'general/resources/get/' + currentPage;
    const response = await dataPost(endPoint, data);

    if (response?.success) {
      const newData = response?.data || [];
      if (reset) {
        setResourcesData(newData);
        setResourcesDataTemp(newData);
      } else {
        setResourcesData(prev => [...prev, ...newData]);
        setResourcesDataTemp(prev => [...prev, ...newData]);
      }

      if (newData.length < 10) setHasMore(false);
    }

    setLoader(false);
    setLoadingMore(false);
  }, [category, page]);

  const openURL = async (url) => {
    // Check if the link is supported
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Open the URL in the device's browser
      await Linking.openURL(url);
    } else {
      console.log(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <View style={styles.safeArea}>
      <GradientBackground />
      <Loader
        loader={loader}
      />
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
              data={categoriesData}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.categoryButton,
                    selectedCategory === item.name && styles.selectedCategoryButton,
                  ]}
                  onPress={() => {
                    if (item.name == 'All') {
                      setCategory('')
                    } else {
                      setCategory(item.name)
                    }
                    setSelectedCategory(item.name)
                  }}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      selectedCategory === item.name && styles.selectedCategoryText,
                    ]}
                  >
                    {item.name}
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
              {resourceData.map((item, index) => (
                <ResourceCard
                  width={'100%'}
                  item={item}
                  onPress={(val) => openURL(val?.link)}
                  {...props}
                />
              ))}
              {/* <ResourceCard
                width={'100%'}
              />
              <ResourceCard
                width={'100%'}
              /> */}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ReourceDetailsScreen;


const categoriesData =
  [
    {
      id: '0',
      name: 'All',
    },
    {
      id: '1',
      name: 'Studies',
    },
    {
      id: '2',
      name: 'FDA',
    },
    {
      id: '3',
      name: 'Drug Warnings',
    },
    {
      id: '3',
      name: 'Recovery',
    },
  ]
