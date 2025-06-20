import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { IMAGES } from "../constants/images";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { FONTS } from "../constants/fonts";
import { COLORS } from "../constants/colors";
import { SCREENS } from "../constants/Screen";
import { useNavigation } from "@react-navigation/native";
import { dataPost } from "../utils/myAxios";
import { normalize } from "../utils/Metrics";
import moment from "moment";
import CustomAvatar from "./BottomSheets/CustomAvatar";
import { useDispatch } from "react-redux";
import { setPostDetail } from "../storeTolkit/communitySlice";
import { setUserDetail } from "../storeTolkit/userSlice";
const posts = [
  {
    id: "1",
    name: "Karis Ryan",
    time: "20 hr ago",
    content:
      "It's been a few rough days, flaring up from activity and needing some extra rest, going to go back to...",
    likes: 6,
    comments: 16,
    profileImage: IMAGES.User1_Img,
  },
  {
    id: "2",
    name: "Danie Muse",
    time: "20 hr ago",
    content:
      "It's been a few rough days, flaring up from activity and needing some extra rest, going to go back to...",
    likes: 6,
    comments: 16,
    profileImage: IMAGES.User2_Img,
  },
];

const SocialCard = ({ item }) => {
  const navigation = useNavigation();
   const dispatch = useDispatch();
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() =>{
          dispatch(setUserDetail(item?.user))
          navigation.navigate(SCREENS.NavigationRoutes, {
            screen: SCREENS.ProfileDetails,
          })
        }
        }
        style={styles.header}
      >
        <CustomAvatar
          image={item?.user?.image}
          user={item?.user}
          width={normalize(50)}
          height={normalize(50)}
          fontSize={normalize(26)}
          borderRadius={normalize(50)}
          name={item?.user?.username}
        />
        <View style={{ marginLeft: normalize(10) }}>
          <Text style={styles.name}>{item?.user?.username}</Text>
          <Text style={styles.time}>{moment(item.createdAt).fromNow()}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>{
          dispatch(setPostDetail(item))
          navigation.navigate(SCREENS.NavigationRoutes, {
            screen: SCREENS.Post,
          })
        }
        }
      >
        <Text style={[styles.content, { marginBottom: normalize(10) }]} numberOfLines={4}>{item.content}</Text>
      </TouchableOpacity>
      <View style={[styles.footer, { width: '90%', alignSelf: 'center', position: 'absolute', bottom: normalize(4) }]}>
        <Text style={styles.footerText}>🥰 {item.likes.length} Likes</Text>
        <TouchableOpacity>
          <Text style={[styles.footerText, styles.footerText1]}>
            {item.comments.length} comments
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SocialCardComponent = (props) => {
  const [communityData, setCommunityData] = useState([]);

  useEffect(() => {
    getCommunity();
  }, [])



  const getCommunity = useCallback(async (reset = false) => {

    const data = {
      startDate: '',
      endDate: '',
      sort: '',
      category: '',
      page: 1,
      limit: 10,
    };

    const endPoint = 'community/get/1';
    const response = await dataPost(endPoint, data);

    if (response?.success) {
      const newData = response?.data || [];
      setCommunityData(newData);
    }

  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={communityData}
        renderItem={({ item }) => <SocialCard item={item} />}
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
  container: {
    flex: 1,
    marginHorizontal: -20,
  },
  card: {
    width: 260,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    shadowColor: "#fff0",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    padding: 15,
    marginTop: 5,
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 100,
    marginRight: 10,
  },
  name: {
    fontSize: scale(14),
    fontFamily: FONTS.Samsungsharpsans_Bold,
    color: COLORS.primary,
    marginBottom: verticalScale(1),
  },
  time: {
    fontSize: scale(10.5),
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: COLORS.primary,
  },
  content: {
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: COLORS.primary,
    fontSize: scale(11.5),
    marginBottom: 10,
    lineHeight: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: COLORS.primary,
    fontSize: scale(11),
  },
  footerText1: {
    top: 2,
  },
});

export default SocialCardComponent;
