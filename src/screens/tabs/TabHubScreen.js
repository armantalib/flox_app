import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GradientBackground from "../../components/GradientBackground";
import { tabStyle } from "../../constants/style";
import TabHeader from "../../components/TabHeader";
import { IMAGES } from "../../constants/images";
import TextComponent from "../../components/TextComponent";
import { FONTS } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";
import { verticalScale } from "react-native-size-matters";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SeeAllComponent from "../../components/SeeAllComponent";
import CardComponent from "../../components/CardComponent";
import { SCREENS } from "../../constants/Screen";
import { useDispatch, useSelector } from "react-redux";
import { dataGet_ } from "../../utils/myAxios";
import { setCategoriesHub, setCategoryExplore } from "../../storeTolkit/hubSlice";

const data = [
  {
    id: "1",
    title: "Meditation for gratitude",
    duration: "16 mins",
    description:
      "1-on-1 live coaching from experienced floxies who have fully recovered",
    image: IMAGES.IMG1,
    date: "12/03/2024",
    isVideo: false,
  },
  {
    id: "2",
    title: "Grounding yourself into earth",
    duration: "16 mins",
    description:
      "1-on-1 live coaching from experienced floxies who have fully recovered",
    image: IMAGES.IMG2,
    isVideo: true,
  },
];

const data1 = [
  {
    id: "1",
    title: "Meditation for gratitude",
    duration: "5 min read",
    description:
      "1-on-1 live coaching from experienced floxies who have fully recovered",
    image: IMAGES.S_Img1,
    date: "12/03/2024",
  },
  {
    id: "2",
    title: "Grounding yourself into earth",
    duration: "16 mins",
    description:
      "1-on-1 live coaching from experienced floxies who have fully recovered",
    image: IMAGES.S_Img2,
  },
];

const data2 = [
  {
    id: "1",
    title: "Meditation for gratitude",
    duration: "5 min read",
    description:
      "1-on-1 live coaching from experienced floxies who have fully recovered",
    image: IMAGES.R_Img1,
    date: "12/03/2024",
  },
  {
    id: "2",
    title: "Grounding yourself into earth",
    duration: "16 mins",
    description:
      "1-on-1 live coaching from experienced floxies who have fully recovered",
    image: IMAGES.R_Img2,
  },
];

const data3 = [
  {
    id: "1",
    title: "Meditation for gratitude",
    duration: "5 min read",
    description:
      "1-on-1 live coaching from experienced floxies who have fully recovered",
    image: IMAGES.N_Img1,
    date: "12/03/2024",
  },
  {
    id: "2",
    title: "Grounding yourself into earth",
    duration: "16 mins",
    description:
      "1-on-1 live coaching from experienced floxies who have fully recovered",
    image: IMAGES.N_Img2,
  },
];

const TabHubScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const user = useSelector((state) => state?.user?.user);
  const { categoriesHub } = useSelector((state) => state?.hub);
  const dispatch = useDispatch();

  useEffect(() => {
    getCardData()
  }, [])

  const getCardData = async () => {
    const endPoint = 'hub/category/post';
    const response = await dataGet_(endPoint, {});
    if (response.success) {
      dispatch(setCategoriesHub(response?.data))
    }
  }
  return (
    <View style={[tabStyle.safeArea]}>
      <GradientBackground />
      <TabHeader
        image={user?.image}
        title={"Good morning"}
        name={user?.username}
        chatcount={14}
        noticount={6}
      />
      <ScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          top: insets.top + insets.top + 20,
          paddingBottom:
            insets.bottom +
            insets.bottom +
            insets.bottom +
            insets.bottom +
            insets.bottom +
            insets.bottom +
            insets.bottom,
        }}
      >
        <View style={[tabStyle.wrapper]}>
          <View style={{ paddingTop: verticalScale(27) }} />
          <TextComponent
              color={COLORS.primary}
              fontSize={31}
              title={"Recovery Hub"}
              marginBottom={25}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />
          {categoriesHub.map((item,index)=>(
          <>
            <SeeAllComponent
              title={item.category}
              onPress={() =>{
                   dispatch(setCategoryExplore(item))
                navigation.navigate(SCREENS.NavigationRoutes, {
                  screen: SCREENS.Explore,
                })
              }
              }
            />
            <CardComponent showLiked data={item?.posts} />
          </>
          ))}
          {/* 
          <View style={{ height: verticalScale(25) }} />
          <SeeAllComponent
            title="Science"
            onPress={() =>
              navigation.navigate(SCREENS.NavigationRoutes, {
                screen: SCREENS.Explore,
              })
            }
          /> */}
          {/* <CardComponent showLiked data={data1} />
          <View style={{ height: verticalScale(25) }} />
          <SeeAllComponent
            title="Recovery Stories"
            onPress={() =>
              navigation.navigate(SCREENS.NavigationRoutes, {
                screen: SCREENS.Explore,
              })
            }
          />
          <CardComponent showLiked data={data2} />
          <View style={{ height: verticalScale(25) }} />
          <SeeAllComponent
            title="Nutrition"
            onPress={() =>
              navigation.navigate(SCREENS.NavigationRoutes, {
                screen: SCREENS.Explore,
              })
            }
          />
          <CardComponent showLiked data={data3} /> */}
          <View style={{ height: verticalScale(5) }} />
        </View>
      </ScrollView>
    </View>
  );
};

export default TabHubScreen;
