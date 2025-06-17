import React, { useCallback, useEffect, useRef, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GradientBackground from "../../components/GradientBackground";
import { tabStyle } from "../../constants/style";
import TabHeader from "../../components/TabHeader";
import { IMAGES, SVG_IMAGES } from "../../constants/images";
import TextComponent from "../../components/TextComponent";
import { FONTS } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";
import { verticalScale } from "react-native-size-matters";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CommunityComponent from "../../components/CommunityComponent";
import { SCREENS } from "../../constants/Screen";
import { useDispatch, useSelector } from "react-redux";
import { getGreeting, searchFunctionCommunity, searchFunctions } from "../../utils/Helper";
import { PickerBottomSheet } from "../../components/BottomSheets/PickerBottomSheet";
import { custom_data } from "../../constants";
import PickerItem from "../../components/BottomSheets/PickerItem";
import { dataPost } from "../../utils/myAxios";
import { useFocusEffect } from '@react-navigation/native';
import { setPostDetail } from "../../storeTolkit/communitySlice";
import { Loader } from "../../components/General";
import { getDateRange } from "../../utils/DateTimeFormate";

const posts = [
  {
    id: "1",
    name: "Karis Ryan",
    time: "20 hr ago",
    content:
      "The more floxies we have active here the more we can raise awareness, perform studies, support eachother and fight back against big pharma...",
    likes: 6,
    comments: 16,
    profileImage: IMAGES.User1_Img,
    general: "General",
    backgroundColor: COLORS.grey,
  },
  {
    id: "2",
    name: "Danie Muse",
    time: "20 hr ago",
    content:
      "The more floxies we have active here the more we can raise awareness, perform studies, support eachother and fight back against big pharma...",
    likes: 6,
    comments: 16,
    profileImage: IMAGES.User2_Img,
    general: "Recovery",
    backgroundColor: COLORS.green,
  },
  {
    id: "3",
    name: "Danie Muse",
    time: "20 hr ago",
    content:
      "The more floxies we have active here the more we can raise awareness, perform studies, support eachother and fight back against big pharma...",
    likes: 6,
    comments: 16,
    profileImage: IMAGES.User2_Img,
    general: "General",
    backgroundColor: COLORS.lemon,
  },
];

const TabCommunityScreen = (props) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const user = useSelector((state) => state?.user?.user);
  const refWarn = useRef();
  const refSort = useRef();
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [communityData, setCommunityData] = useState([]);
  const [communityDataTemp, setCommunityDataTemp] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loader, setLoader] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    getCommunity(true);
  }, [sort, category,fromDate,toDate]);

  useEffect(() => {
    if (page > 1) {
      getCommunity();
    }
  }, [page]);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      // setLoadingMore(false)
      getCommunity(page == 1 ? true : false);
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [page])
  );



  const getCommunity = useCallback(async (reset = false) => {
    if (loadingMore && !reset) return;
    if (reset) {
      setPage(1);
      setHasMore(true);
      setCommunityData([]);
      setCommunityDataTemp([]);
    } else {
      setLoadingMore(true);
    }
    const currentPage = reset ? 1 : page;
    const data = {
      startDate: fromDate,
      endDate: toDate,
      sort: sort,
      category: category,
      page: currentPage,
      limit: 10,
    };
    setLoader(true)
    const endPoint = 'community/get/' + currentPage;
    const response = await dataPost(endPoint, data);
    setLoader(false)
    if (response?.success) {
      const newData = response?.data || [];
      if (reset) {
        setCommunityData(newData);
        setCommunityDataTemp(newData);
      } else {
        setCommunityData(prev => [...prev, ...newData]);
        setCommunityDataTemp(prev => [...prev, ...newData]);
      }

      if (newData.length < 10) setHasMore(false);
    }

    setLoadingMore(false);
  }, [category, sort, page, user]);




  return (
    <View style={[tabStyle.safeArea]}>
      <GradientBackground />
      <Loader
        loader={loader}
      />
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
            title={"Community"}
            marginBottom={25}
            fontFamily={FONTS.Samsungsharpsans_Bold}
            textAlign={"center"}
          />
          <CommunityComponent
            data={communityData}
            onPressCategory={() => refWarn.current.open()}
            category={category}
            onPressSort={() => refSort.current.open()}
            onChangeTextSearch={(val) => {
              const s_data = searchFunctionCommunity(val, communityData, communityDataTemp)
              setCommunityData(s_data)

            }}
            sort={sort}
            {...props}
          />
          <View style={{ height: verticalScale(5) }} />
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(SCREENS.NavigationRoutes, {
            screen: SCREENS.CreatePost,
          })
        }
        style={tabStyle.floatBtn}
      >
        <SVG_IMAGES.FloatIcon_SVG />
      </TouchableOpacity>
      <PickerBottomSheet
        {...props}
        refRBSheet={refWarn}
        heightLen={0.6}
        headerText='Please Select'
        closeSheet={() => refWarn.current.close()}
      >
        {custom_data.categoriesList.map((item, index) => (
          <PickerItem
            text={item.name}
            onPress={() => {
              setCategory(item.name)
              refWarn.current.close()
            }}
          />
        ))}
      </PickerBottomSheet>

      <PickerBottomSheet
        {...props}
        refRBSheet={refSort}
        heightLen={0.6}
        headerText='Please Select'
        closeSheet={() => refSort.current.close()}
      >
        {custom_data.sortList.map((item, index) => (
          <PickerItem
            text={item.name}
            onPress={() => {
              setSort(item.name)
              const range = getDateRange(item.id)
              setFromDate(range.from)
              setToDate(range.to)
              refSort.current.close()
            }}
          />
        ))}
      </PickerBottomSheet>
    </View>
  );
};

export default TabCommunityScreen;
