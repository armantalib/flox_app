import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GradientBackground from "../../components/GradientBackground";
import { tabStyle } from "../../constants/style";
import TabHeader from "../../components/TabHeader";
import { IMAGES } from "../../constants/images";
import TextComponent from "../../components/TextComponent";
import { FONTS } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";
import { verticalScale } from "react-native-size-matters";
import AnimatedDotSlider from "../../components/AnimatedDotSlider";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SeeAllComponent from "../../components/SeeAllComponent";
import CardComponent from "../../components/CardComponent";
import CardFullWidthComponent from "../../components/CardFullWidthComponent";
import SocialCardComponent from "../../components/SocialCardComponent";
import { SCREENS } from "../../constants/Screen";
import { normalize } from "../../utils/Metrics";
import ResourcesCardComp from "../../components/ResourcesCardComp";
import { useDispatch, useSelector } from "react-redux";
import { dataGet_ } from "../../utils/myAxios";
import { setStepsData, setStepsDataTemp } from "../../storeTolkit/stepsSlice";
import { setCategoriesHub, setCategoryExplore } from "../../storeTolkit/hubSlice";
import { getGreeting, shareScreenShot } from "../../utils/Helper";
import { useFocusEffect } from '@react-navigation/native';
import { setChatCount, setNotiCount } from "../../storeTolkit/userSlice";
import AnimatedDotSliderUser from "../../components/AnimatedDotSliderUser";
import { getItem, storeData } from "../../utils/async_storage";

const data = [
  {
    id: "1",
    title: "Meditation for gratitude",
    duration: "16 mins",
    description:
      "1-on-1 live coaching from experienced floxies who have fully recovered",
    image: IMAGES.IMG1,
    date: "12/03/2024",
  },
  {
    id: "2",
    title: "Grounding yourself into earth",
    duration: "16 mins",
    description:
      "1-on-1 live coaching from experienced floxies who have fully recovered",
    image: IMAGES.IMG2,
  },
];

const TabHomeScreen = (props) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const user = useSelector((state) => state?.user?.user);

  const { categoriesHub } = useSelector((state) => state?.hub);
  const { stepsData, stepsDataTemp } = useSelector((state) => state?.steps);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user?.fq_antibiotic) {
      checkAntibiotic();
    }
    getCardData()
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      if (stepsDataTemp) {
        dispatch(setStepsData(stepsDataTemp))
      }
      return () => {
      };
    }, [stepsData])
  );

  const checkAntibiotic = async () => {
    const stepsData1 = await getItem('stepsData');
    if (stepsData1) dispatch(setStepsData(stepsData1))
    const endPoint = 'antibiotic/check';
    const response = await dataGet_(endPoint, {});
    if (response.success) {
      dispatch(setStepsData(response?.data))
      dispatch(setStepsDataTemp(response?.data))
      storeData('stepsData', response?.data)
    }
  }

  const getCardData = async () => {
    const categoriesHub = await getItem('categoriesHub');
    if (categoriesHub) dispatch(setCategoriesHub(categoriesHub))
    const endPoint = 'hub/category/post';
    const response = await dataGet_(endPoint, {});
    if (response.success) {
      dispatch(setCategoriesHub(response?.data))
      storeData('categoriesHub', response?.data)
    }
  }







  return (
    <View style={[tabStyle.safeArea]}>
      <GradientBackground />
      <TabHeader
        image={user?.image}
        title={getGreeting()}
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
            fontSize={normalize(25)}
            title={"Progress Journal"}
            marginBottom={15}
            fontFamily={FONTS.Samsungsharpsans_Bold}
            textAlign={"center"}
          />
          <View style={[tabStyle.tabContainer, { marginBottom: normalize(60) }]}>
            <AnimatedDotSlider
              {...props}
            />
          </View>
          {categoriesHub ?
            <>
              <SeeAllComponent
                title={categoriesHub[0]?.category}
                onPress={() => {
                  dispatch(setCategoryExplore(categoriesHub[0]))
                  navigation.navigate(SCREENS.NavigationRoutes, {
                    screen: SCREENS.Explore,
                  })
                }
                }
              />
              <View style={{ flex: 1, overflow: "visible" }}>
                <CardComponent data={categoriesHub[0]?.posts} />
              </View>
            </> : null}

          <View style={{ height: verticalScale(25) }} />
          <TextComponent
            color={COLORS.primary}
            fontSize={25}
            title={"Private Coaching"}
            marginBottom={15}
            fontFamily={FONTS.Samsungsharpsans_Bold}
            textAlign={"center"}
          />
          <CardFullWidthComponent
            title={"1:1 Coaching for extra support"}
            desc={
              "1-on-1 live coaching from experienced floxies who have fully recovered "
            }
            btnText={"Learn more"}
            userImage
            onPress={() => console.log()}
          />
          <View style={{ height: verticalScale(25) }} />
          <SeeAllComponent
            title="Hear from floxies"
            onPress={() => {
              // navigation.navigate(SCREENS.NavigationRoutes, {
              //   screen: 'TabCommunity',
              // })
            }}
          />
          <SocialCardComponent
            {...props}
          />
          <View style={{ height: verticalScale(15) }} />
          <SeeAllComponent
            title="Resources"
            onPress={() =>
              navigation.navigate(SCREENS.NavigationRoutes, {
                screen: SCREENS.ReourceDetails,
              })
            }
          />
          <ResourcesCardComp
            {...props}
          />

          <View style={{ height: verticalScale(25) }} />
          <TextComponent
            color={COLORS.primary}
            fontSize={25}
            title={"Invite others"}
            marginBottom={15}
            fontFamily={FONTS.Samsungsharpsans_Bold}
            textAlign={"center"}
          />
          <CardFullWidthComponent
            title={
              "Invite other floxies to build the community, data and science"
            }
            desc={
              "The more floxies we have active here the more we can raise awareness, perform studies, support eachother and fight back against big pharma"
            }
            btnText={"Invite others"}
            onPress={() => shareScreenShot()}
          />
          <View style={{ height: verticalScale(5) }} />
        </View>
      </ScrollView>
    </View>
  );
};

export default TabHomeScreen;
