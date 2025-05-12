import React from "react";
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

const TabCommunityScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View style={[tabStyle.safeArea]}>
      <GradientBackground />
      <TabHeader
        image={IMAGES.UserProfile_IMG}
        title={"Good morning"}
        name={"Ben0790"}
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
            title={"Community"}
            marginBottom={25}
            fontFamily={FONTS.Samsungsharpsans_Bold}
            textAlign={"center"}
          />
          <CommunityComponent
            data={posts}
            onPress={() =>
              navigation.navigate(SCREENS.NavigationRoutes, {
                screen: SCREENS.ProfileDetails,
              })
            }
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
    </View>
  );
};

export default TabCommunityScreen;
