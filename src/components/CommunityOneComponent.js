import React from "react";
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
import TextComponent from "./TextComponent";
import CustomAvatar from "./BottomSheets/CustomAvatar";
import { normalize } from "../utils/Metrics";
import moment from "moment";
import stylesG from "../assets/css/stylesG";
import Icons from "../utils/Icons";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetail } from "../storeTolkit/userSlice";
import { SCREENS } from "../constants/Screen";
import { useNavigation } from "@react-navigation/native";

const MeditationCard = ({ item, isLastChild, onPressLikeReply, onPressReply, onPress }) => {
  const user = useSelector((state) => state?.user?.user);
  const liked = item.likes.map(item => item._id).includes(user._id)
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={[styles.itemBox]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {
          dispatch(setUserDetail(item?.user))
          navigation.navigate(SCREENS.NavigationRoutes, {
            screen: SCREENS.ProfileDetails,
          })
        }} activeOpacity={0.8}>
          <CustomAvatar
            image={item?.user?.image}
            width={normalize(50)}
            height={normalize(50)}
            fontSize={normalize(26)}
            borderRadius={normalize(50)}
            name={item?.user?.username}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
          <Text style={styles.name}>{item?.user?.username}</Text>
          <Text style={styles.time}>{moment(item.createdAt).fromNow()}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.footerIcon,
            {
              marginLeft: "auto",
              marginRight: 0,
            },
          ]}
        >
          {/* <SVG_IMAGES.Liked_SVG /> */}
          <TouchableOpacity
            onPress={() => onPressLikeReply(item)}
            style={[stylesG.contentCenter, { paddingHorizontal: normalize(12), paddingVertical: normalize(6), borderWidth: 1, borderColor: !liked ? COLORS.grey : '#FF4D67', borderRadius: normalize(50) }]}>
            <View style={[stylesG.flexRow]}>
              {liked ?
                <Icons
                  name={'heart'}
                  family={'Fontisto'}
                  size={15}
                  color={liked ? '#FF4D67' : COLORS.grey}
                /> :
                <Icons
                  name={'heart-alt'}
                  family={'Fontisto'}
                  size={15}
                  color={liked ? '#FF4D67' : COLORS.grey}
                />
              }
              <Text style={[stylesG.fontBold, { color: liked ? '#FF4D67' : COLORS.grey, marginLeft: normalize(5), fontSize: normalize(12) }]}>{liked ? 'Liked' : 'Like'}</Text>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>

      </View>
      <Text style={styles.content}>{item.content}</Text>

      <View style={styles.replyBox}>

        <TextComponent
          color={COLORS.primary}
          fontSize={11}
          title={'🥰 ' + item.likes.length + ' likes'}
          fontFamily={FONTS.Samsungsharpsans_Medium}
        />

        <TouchableOpacity
          onPress={() => onPressReply(item)}
          style={styles.footerIcon1}>
          <View style={{ marginRight: 0, marginBottom: 2 }}>
            <SVG_IMAGES.Reply_SVG width={15} height={15} />
          </View>

          <TextComponent
            color={COLORS.primary}
            fontSize={11}
            title={item.replies.length + ' Replies'}
            fontFamily={FONTS.Samsungsharpsans_Medium}
          />
        </TouchableOpacity>

      </View>

    </View>
  );
};


export const SinglePostShow = ({ item, onPressLike }) => {
  const user = useSelector((state) => state?.user?.user);
  const liked = item.likes.map(item => item._id).includes(user._id)
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={[styles.itemBox, { width: '90%', alignSelf: 'center' }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {
          dispatch(setUserDetail(item?.user))
          navigation.navigate(SCREENS.NavigationRoutes, {
            screen: SCREENS.ProfileDetails,
          })
        }} activeOpacity={0.8}>
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
        {item.category && (
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
        )}

      </View>
      <Text style={styles.content}>{item.content}</Text>

      <View style={styles.footer}>
        <View
          style={styles.footerIcon}>
          {/* <SVG_IMAGES.Liked_SVG /> */}
          <TouchableOpacity
            onPress={onPressLike}
            style={[stylesG.contentCenter, { paddingHorizontal: normalize(12), paddingVertical: normalize(6), borderWidth: 1, borderColor: !liked ? COLORS.grey : '#FF4D67', borderRadius: normalize(50) }]}>
            <View style={[stylesG.flexRow]}>
              {liked ?
                <Icons
                  name={'heart'}
                  family={'Fontisto'}
                  size={15}
                  color={liked ? '#FF4D67' : COLORS.grey}
                /> :
                <Icons
                  name={'heart-alt'}
                  family={'Fontisto'}
                  size={15}
                  color={liked ? '#FF4D67' : COLORS.grey}
                />
              }
              <Text style={[stylesG.fontBold, { color: liked ? '#FF4D67' : COLORS.grey, marginLeft: normalize(5), fontSize: normalize(12) }]}>{liked ? 'Liked' : 'Like'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.footerText}>🥰 {item.likes.length} Likes</Text>
        <Text style={[styles.footerText, styles.footerText1]}>
          {item.comments.length} comments
        </Text>
      </View>

      {item.reply && (
        <View style={styles.replyBox}>
          {item.replyShow && (
            <TextComponent
              color={COLORS.primary}
              fontSize={11}
              title={item.reply}
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />
          )}
          <TouchableOpacity style={styles.footerIcon1}>
            <View style={{ marginRight: 0, marginBottom: 2 }}>
              <SVG_IMAGES.Reply_SVG width={15} height={15} />
            </View>

            <TextComponent
              color={COLORS.primary}
              fontSize={11}
              title={'6 Replies'}
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />
          </TouchableOpacity>

        </View>
      )}
    </View>
  );
};

const CommunityOneComponent = ({ data, onPress, onPressLikeReply, onPressReply }) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <MeditationCard
              isLastChild={index === data.length - 1}
              item={{ ...item }}
              onPressLikeReply={onPressLikeReply}
              onPressReply={onPressReply}
              onPress={onPress}
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
  footerIcon1: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    gap: 7,
  },
  footerText1: {
    fontSize: scale(11),
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: COLORS.primary,
  },
  itemBox: {
    marginBottom: verticalScale(10),
    borderBottomWidth: 2,
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
    padding: 20,
    paddingTop: 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 13,
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 100,
  },
  name: {
    fontSize: scale(13),
    fontFamily: FONTS.Samsungsharpsans_Bold,
    color: COLORS.primary,
    marginBottom: verticalScale(1),
    marginTop: 4
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
    marginBottom: 2.5,
    lineHeight: 20,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  footerText: {
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: COLORS.primary,
    fontSize: scale(11),
    top: 2.5,
  },
  footerText1: {
    top: 4,
    fontSize: scale(11),
    marginLeft: 2,
  },
  // Dropdown
  communtyHeader: {
    marginBottom: verticalScale(10),
    borderBottomWidth: 2,
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
    backgroundColor: COLORS.grey,
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
  footerIcon: {
    marginRight: "auto",
    marginTop: 7.5
  },
  replyBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 5,
  },
});

export default CommunityOneComponent;
