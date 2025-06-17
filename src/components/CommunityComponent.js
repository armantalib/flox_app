import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { COLORS } from "../constants/colors";
import { FONTS } from "../constants/fonts";
import { SVG_IMAGES } from "../constants/images";
import CustomAvatar from "./BottomSheets/CustomAvatar";
import { normalize } from "../utils/Metrics";
import moment from "moment";
import { setPostDetail } from "../storeTolkit/communitySlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../constants/Screen";
import SearchTextInput from "./SearchTextInput";
import { setUserDetail } from "../storeTolkit/userSlice";

const MeditationCard = ({ item, isLastChild }, ...props) => {

  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={[styles.itemBox, isLastChild && styles.lastItem]}>
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
    </View>
  );
};

const CommunityComponent = ({ data, onPressCategory, onPressSort, category, sort, onChangeTextSearch }, ...props) => {
  const [isSearch, setIsSearch] = useState(false)
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <View style={styles.communtyHeader}>
          <TouchableOpacity
            onPress={onPressSort}
            style={styles.dropbutton}>
            <Text style={[styles.text, { paddingVertical: 2 }]}>{sort ? sort : 'Sort by'}</Text>
            <SVG_IMAGES.DownArrow_SVG />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onPressCategory}
            style={styles.dropbutton}>
            <Text style={[styles.text, { paddingVertical: 2 }]}>
              {category ? category : 'Categories'}
            </Text>
            <SVG_IMAGES.DownArrow_SVG />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setIsSearch(!isSearch)}
            style={{ marginLeft: "auto" }}>
            <SVG_IMAGES.SearchIcon_SVG />
          </TouchableOpacity>
        </View>
        {isSearch ?
          <SearchTextInput
            placeholder="Search"
            style={styles.searchInput}
            placeholderTextColor={COLORS.primary}
            onChangeText={onChangeTextSearch}
            placeholderText={"Search Post"}
          /> : null}
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <MeditationCard
              isLastChild={index === data.length - 1}
              item={{ ...item }}
              {...props}
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemBox: {
    marginBottom: verticalScale(10),
    borderBottomWidth: 1.25,
    borderBottomColor: "#EAEAEA",
    paddingBottom: verticalScale(10),
  },
  lastItem: {
    paddingBottom: 0,
    marginBottom: 0,
    borderBottomWidth: 0,
  },
  card: {
    borderRadius: 20,
    backgroundColor: COLORS.white,
    shadowColor: "#fff0",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
    padding: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7.5,
    gap: 13,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  name: {
    fontSize: scale(13),
    fontFamily: FONTS.Samsungsharpsans_Bold,
    color: COLORS.primary,
    marginBottom: verticalScale(1),
    marginTop: 2,
  },
  name1: {
    fontSize: scale(10),
    fontFamily: FONTS.Samsungsharpsans_Bold,
    color: COLORS.white,
    marginBottom: verticalScale(0),
  },
  time: {
    fontSize: scale(11),
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: COLORS.primary,
  },
  content: {
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: COLORS.primary,
    fontSize: scale(11.5),
    marginBottom: 7.5,
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
  // Dropdown
  communtyHeader: {
    marginBottom: verticalScale(10),
    borderBottomWidth: 1.25,
    borderBottomColor: "#EAEAEA",
    paddingBottom: verticalScale(10),
    paddingTop: verticalScale(0),
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  dropbutton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 100, // Rounded button
    justifyContent: "center",
  },
  dropbutton1: {
    marginLeft: "auto",
  },
  text: {
    color: COLORS.white,
    fontSize: scale(10),
    fontFamily: FONTS.Samsungsharpsans_Bold,
    marginRight: 7, // Spacing between text and icon
  },
  icon: {
    marginTop: 2, // Align the icon better with the text
  },
});

export default CommunityComponent;
