import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { COLORS } from "../constants/colors";
import { FONTS } from "../constants/fonts";
import { SVG_IMAGES } from "../constants/images";
import OutlineButton from "./OutlineButton";
import { dataPost } from "../utils/myAxios";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import CustomAvatar from "./BottomSheets/CustomAvatar";
import { normalize } from "../utils/Metrics";
import moment from "moment";
import { setPostDetail } from "../storeTolkit/communitySlice";
import { SCREENS } from "../constants/Screen";
import { NotFound } from "./General";

const MeditationCard = ({ item, isLastChild, hideFollow }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback style={[styles.itemBox, isLastChild && styles.lastItem]}>
      <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {
          dispatch(setUserDetail(item?.user))
          navigation.navigate(SCREENS.NavigationRoutes, {
            screen: SCREENS.ProfileDetails,
          })
        }} activeOpacity={0.8}>
          {/* <Image source={{uri}} style={styles.profileImage} /> */}
          <CustomAvatar
            image={item?.user?.image}
            user={item?.user}
            width={normalize(50)}
            height={normalize(50)}
            fontSize={normalize(26)}
            borderRadius={normalize(50)}
            name={item?.user?.username}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={item.onPress} activeOpacity={0.8}>
          <Text style={styles.name}>{item?.user?.username}</Text>
          <Text style={styles.time}>{moment(item.createdAt).fromNow()}</Text>
        </TouchableOpacity>
        <View
          style={[
            styles.dropbutton,
            styles.dropbutton1,
            {
              backgroundColor: item?.category === 'General' ? COLORS.grey :
                item?.category === 'Newcomer' ? COLORS.green :
                  COLORS.lemon, // Dark background
            },
          ]}
        >
          <Text style={styles.name1}>{item?.category}</Text>
        </View>
        <TouchableOpacity style={styles.dotsSTyle}>
          <SVG_IMAGES.DotsIcon_SVG />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          dispatch(setPostDetail(item))
          navigation.navigate(SCREENS.NavigationRoutes, {
            screen: SCREENS.Post,
          })
        }}
      >
        <Text style={styles.content} numberOfLines={3}>{item.content}</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>🥰 {item.likes.length} Likes</Text>
        <TouchableOpacity>
          <Text style={[styles.footerText, styles.footerText1]}>
            {item.comments.length} comments
          </Text>
        </TouchableOpacity>
      </View>
      </>
    </TouchableWithoutFeedback>
  );
};

const UserDetailsComponent = ({ onPress, hideFollow }) => {
  const [data, setData] = useState([])
  const [communityData, setCommunityData] = useState([]);
  const [communityDataTemp, setCommunityDataTemp] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loader, setLoader] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
   const { user, userDetail } = useSelector((state) => state?.user);

  useEffect(() => {
    getCommunity(true);
  }, []);

  useEffect(() => {
    if (page > 1) {
      getCommunity();
    }
  }, [page]);

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
      startDate: '',
      endDate: '',
      sort: '',
      category: '',
      page: currentPage,
      limit: 10,
      user_id : userDetail?._id

    };
    setLoader(true)
    const endPoint = 'community/get/user/' + currentPage;
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
  }, [page]);


  return (
    <>
    <View style={{marginTop:normalize(10)}}></View>
    {communityData.length==0?<NotFound height={normalize(400)} />:null}

    <FlatList
      data={communityData}
      renderItem={({ item, index }) => (
        <MeditationCard
          isLastChild={index === data.length - 1}
          item={{ ...item, onPress }}
          hideFollow={hideFollow}
        />
      )}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }} // Add this line
    />
    </>
  );
};

const styles = StyleSheet.create({
  itemBox: {
    marginBottom: verticalScale(15),
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
    paddingBottom: verticalScale(15),
  },
  lastItem: {
    paddingBottom: 0,
    marginBottom: 0,
    borderBottomWidth: 0,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 13,
  },
  profileImage: {
    width: 57,
    height: 57,
    borderRadius: 100,
  },
  name: {
    fontSize: scale(15),
    fontFamily: FONTS.Samsungsharpsans_Bold,
    color: COLORS.primary,
    marginBottom: verticalScale(1),
  },
  name1: {
    fontSize: scale(12),
    fontFamily: FONTS.Samsungsharpsans_Bold,
    color: COLORS.white,
    marginBottom: verticalScale(1),
  },
  time: {
    fontSize: scale(11),
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: COLORS.primary,
  },
  content: {
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: COLORS.primary,
    fontSize: scale(12),
    marginBottom: 10,
    lineHeight: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: verticalScale(13),
  },
  footerText: {
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: COLORS.primary,
    fontSize: scale(11),
  },
  footerText1: {
    top: 2,
  },
  dropbutton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222", // Dark background
    paddingVertical: 9,
    paddingHorizontal: 17,
    borderRadius: 100, // Rounded button
    justifyContent: "center",
  },
  dropbutton1: {
    marginLeft: "auto",
  },
  btnFlex: {
    flexDirection: "row",
    gap: 10,
  },
});

export default UserDetailsComponent;
