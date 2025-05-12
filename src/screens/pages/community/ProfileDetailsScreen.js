import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import { IMAGES, SVG_IMAGES } from "../../../constants/images";
import TextComponent from "../../../components/TextComponent";
import { FONTS } from "../../../constants/fonts";
import { COLORS } from "../../../constants/colors";
import OutlineButton from "../../../components/OutlineButton";
import UserDetailsComponent from "../../../components/UserDetailsComponent";
import ProfileAnimatedDotSlider from "../../../components/ProfileAnimatedDotSlider";
import { SCREENS } from "../../../constants/Screen";
import BtnPrimary from "../../../components/BtnPrimary";

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
  },
];

const ProfileDetailsScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  // Handle Tab Switch
  const switchTab = (index) => {
    setActiveTab(index);
  };

  // Dismiss dropdown on outside press
  const handleOutsidePress = () => {
    if (showDropdown) {
      setShowDropdown(false);
    }
    Keyboard.dismiss(); // Optional, in case keyboard is open
  };

  return (
    <TouchableWithoutFeedback activeOpacity={1} onPress={handleOutsidePress}>
      <View
        style={[
          styles.safeArea,
          {
            paddingTop: insets.top,
          },
        ]}
      >
        <View
          style={[
            styles.flexRow,
            {
              paddingHorizontal: 20,
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[styles.backBtn]}
          >
            <SVG_IMAGES.Arrow_SVG />
          </TouchableOpacity>
          <View style={styles.titleCenter}>
            <TextComponent
              color={COLORS.primary}
              fontSize={16}
              title={"Jane3459"}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
              marginBottom={10}
            />
          </View>
          <TouchableOpacity
            onPress={() => setShowDropdown(!showDropdown)}
            style={styles.dotsSTyle}
          >
            <SVG_IMAGES.DotsIcon_SVG />
          </TouchableOpacity>
        </View>
        {showDropdown && (
          <View
            style={[
              styles.dropdownContainer,
              {
                top: insets.top + 40,
              },
            ]}
          >
            <View style={styles.dropdown}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(SCREENS.NavigationRoutes, {
                    screen: SCREENS.BlockedUser,
                  })
                }
              >
                <TextComponent
                  color={COLORS.black}
                  fontSize={15}
                  title={"Block user"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                  textAlign={"center"}
                />
              </TouchableOpacity>
              <View style={styles.dropdownDivider}></View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(SCREENS.NavigationRoutes, {
                    screen: SCREENS.ReportUser,
                  })
                }
              >
                <TextComponent
                  color={COLORS.black}
                  fontSize={15}
                  title={"Report post"}
                  textAlign={"center"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}

        <View
          style={[
            {
              borderBottomWidth: 2,
              borderBottomColor: "#EAEAEA",
            },
          ]}
        >
          <View style={{ padding: 20 }}>
            <View style={styles.statsBox}>
              {/* Profile Image */}
              <Image
                source={IMAGES.User2_Img} // Replace with actual profile URL
                style={styles.profileImage}
              />

              {/* Stats Section */}
              <View style={styles.statsContainer}>
                <View style={styles.stat}>
                  <TextComponent
                    color={COLORS.primary}
                    fontSize={15}
                    title={"315"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                    textAlign={"center"}
                  />
                  <TextComponent
                    color={COLORS.primary}
                    fontSize={11}
                    title={"Posts"}
                    fontFamily={FONTS.Samsungsharpsans_Medium}
                    textAlign={"center"}
                  />
                </View>
                <View style={styles.stat}>
                  <TextComponent
                    color={COLORS.primary}
                    fontSize={15}
                    title={"140"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                    textAlign={"center"}
                  />
                  <TextComponent
                    color={COLORS.primary}
                    fontSize={11}
                    title={"Followers"}
                    fontFamily={FONTS.Samsungsharpsans_Medium}
                    textAlign={"center"}
                  />
                </View>
                <View style={styles.stat}>
                  <TextComponent
                    color={COLORS.primary}
                    fontSize={15}
                    title={"44"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                    textAlign={"center"}
                  />
                  <TextComponent
                    color={COLORS.primary}
                    fontSize={11}
                    title={"Following"}
                    fontFamily={FONTS.Samsungsharpsans_Medium}
                    textAlign={"center"}
                  />
                </View>
              </View>
            </View>
            {/* Bio Section */}
            <TextComponent
              color={COLORS.primary}
              fontSize={12}
              title={
                "My name is Jane from the UK, I was floxed 2 years ago and have been recovering since."
              }
              fontFamily={FONTS.Samsungsharpsans}
              lineHeight={16}
              marginBottom={10}
            />
            <View style={styles.btnFlex}>
              <View style={{ width: "50%" }}>
                <BtnPrimary
                  userIcon
                  style={{
                    height: 38,
                    backgroundColor: COLORS.blue,
                    paddingVertical: 0,
                  }}
                  btnText={{
                    color: COLORS.white,
                    fontSize: 15,
                  }}
                  title={"Follow"}
                />
              </View>
              <View style={{ width: "50%" }}>
                <OutlineButton
                  style={{
                    height: 38,
                  }}
                  userIcon
                  title={"Message"}
                  navigation={() =>
                    navigation.navigate(SCREENS.NavigationRoutes, {
                      screen: SCREENS.Chat,
                    })
                  }
                />
              </View>
            </View>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          style={{ zIndex: 0 }}
        >
          <View style={[styles.wrapper]}>
            <View style={styles.card}>
              {/* Tabs */}
              <View style={styles.tabsContainer}>
                <TouchableOpacity
                  style={[
                    styles.tab,
                    {
                      borderBottomColor:
                        activeTab === 0 ? COLORS.primary : "#EAEAEA",
                    },
                  ]}
                  onPress={() => switchTab(0)}
                >
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === 0 && styles.activeTabText,
                    ]}
                  >
                    Posts
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.tab,
                    {
                      borderBottomColor:
                        activeTab === 1 ? COLORS.primary : "#EAEAEA",
                    },
                  ]}
                  onPress={() => switchTab(1)}
                >
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === 1 && styles.activeTabText,
                    ]}
                  >
                    Stats
                  </Text>
                </TouchableOpacity>
              </View>
              {activeTab === 0 && <UserDetailsComponent data={posts} />}
              {activeTab === 1 && (
                <>
                  <ProfileAnimatedDotSlider />
                  {/* <View style={styles.noChat}>
                  <TextComponent
                    title={"No posts"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                    color={COLORS.black}
                    fontSize={38}
                    opacity={0.5}
                  />
                </View> */}
                </>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProfileDetailsScreen;
