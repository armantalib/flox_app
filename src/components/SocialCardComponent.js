import React from "react";
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
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(SCREENS.NavigationRoutes, {
            screen: SCREENS.ProfileDetails,
          })
        }
        style={styles.header}
      >
        <Image source={item.profileImage} style={styles.profileImage} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate(SCREENS.NavigationRoutes, {
            screen: SCREENS.Post,
          })
        }
      >
        <Text style={styles.content}>{item.content}</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>🥰 {item.likes} Likes</Text>
        <TouchableOpacity>
          <Text style={[styles.footerText, styles.footerText1]}>
            {item.comments} comments
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SocialCardComponent = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
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
