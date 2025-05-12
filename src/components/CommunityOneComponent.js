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

const MeditationCard = ({ item, isLastChild }) => {
  return (
    <View style={[styles.itemBox]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={item.onPress} activeOpacity={0.8}>
          <Image source={item.profileImage} style={styles.profileImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={item.onPress} activeOpacity={0.8}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </TouchableOpacity>
        {item.general && (
          <View
            style={[
              styles.dropbutton,
              styles.dropbutton1,
              {
                backgroundColor: COLORS.grey, // Dark background
              },
            ]}
          >
            <Text style={styles.name1}>{item.general}</Text>
          </View>
        )}
        {item.likesDislike && (
          <TouchableOpacity
            style={[
              styles.footerIcon,
              {
                marginLeft: "auto",
                marginRight: 0,
              },
            ]}
          >
            <SVG_IMAGES.Liked_SVG />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.content}>{item.content}</Text>
      {item.likes && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerIcon}>
            <SVG_IMAGES.Liked_SVG />
          </TouchableOpacity>
          <Text style={styles.footerText}>🥰 {item.likes} Likes</Text>
          <Text style={[styles.footerText, styles.footerText1]}>
            {item.comments} comments
          </Text>
        </View>
      )}
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

const CommunityOneComponent = ({ data, onPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <MeditationCard
              isLastChild={index === data.length - 1}
              item={{ ...item, onPress }}
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
