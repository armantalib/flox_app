import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { COLORS } from "../constants/colors";
import { FONTS } from "../constants/fonts";
import { SVG_IMAGES } from "../constants/images";
import OutlineButton from "./OutlineButton";

const MeditationCard = ({ item, isLastChild, hideFollow }) => {
  return (
    <View style={[styles.itemBox, isLastChild && styles.lastItem]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={item.onPress} activeOpacity={0.8}>
          <Image source={item.profileImage} style={styles.profileImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={item.onPress} activeOpacity={0.8}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </TouchableOpacity>
        <View style={[styles.dropbutton, styles.dropbutton1]}>
          <Text style={styles.name1}>{item.general}</Text>
        </View>
        <TouchableOpacity style={styles.dotsSTyle}>
          <SVG_IMAGES.DotsIcon_SVG />
        </TouchableOpacity>
      </View>
      <Text style={styles.content}>{item.content}</Text>
      <View style={styles.footer}>
        <Text style={styles.footerText}>🥰 {item.likes} Likes</Text>
        <TouchableOpacity>
          <Text style={[styles.footerText, styles.footerText1]}>
            {item.comments} comments
          </Text>
        </TouchableOpacity>
      </View>

      {!hideFollow && (
        <View style={styles.btnFlex}>
          <OutlineButton
            style={{ height: 38, paddingHorizontal: moderateScale(13) }}
            heartIcon
            title={"Follow"}
          />
          <OutlineButton
            style={{ height: 38, paddingHorizontal: moderateScale(13) }}
            userIcon
            title={"Comment"}
          />
        </View>
      )}
    </View>
  );
};

const UserEditDetailsComponent = ({ data, onPress, hideFollow }) => {
  return (
    <>
      {data.map((item, index) => (
        <MeditationCard
          key={item.id}
          item={{ ...item, onPress }}
          isLastChild={index === data.length - 1}
          hideFollow={hideFollow}
        />
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 20,
    flexGrow: 1,
  },
  itemBox: {
    marginBottom: verticalScale(12.5),
    borderBottomWidth: 1.5,
    borderBottomColor: "#EAEAEA",
    paddingBottom: verticalScale(12.5),
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
    fontSize: scale(12),
    marginBottom: 10,
    lineHeight: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: verticalScale(0),
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
    backgroundColor: COLORS.lemon,
    paddingVertical: 10,
    paddingHorizontal: 15,
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

export default UserEditDetailsComponent;
