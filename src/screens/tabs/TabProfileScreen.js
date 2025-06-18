import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GradientBackground from "../../components/GradientBackground";
import { tabStyle } from "../../constants/style";
import TabHeader from "../../components/TabHeader";
import { IMAGES, SVG_IMAGES } from "../../constants/images";
import TextComponent from "../../components/TextComponent";
import { FONTS } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SCREENS } from "../../constants/Screen";
import { useDispatch, useSelector } from "react-redux";
import { getGreeting } from "../../utils/Helper";
import { setUserDetail } from "../../storeTolkit/userSlice";

const menuItems = [
  {
    id: 1,
    icon: <SVG_IMAGES.ProIcon1_SVG />,
    title: "My profile",
    link: 'ProfileDetails',
  },
  {
    id: 2,
    icon: <SVG_IMAGES.ProIcon2_SVG />,
    title: "Account Settings",
    link: SCREENS.AccountSettings,
  },
  {
    id: 3,
    icon: <SVG_IMAGES.DownloadData_SVG />,
    title: "Download Data",
    link: SCREENS.Security,
  },
  {
    id: 4,
    icon: <SVG_IMAGES.ProIcon3_SVG />,
    title: "Security",
    link: SCREENS.Security,
  },
  {
    id: 5,
    icon: <SVG_IMAGES.ProIcon4_SVG />,
    title: "Language",
    link: SCREENS.Language,
  },
  {
    id: 6,
    icon: <SVG_IMAGES.ProIcon5_SVG />,
    title: "Invite Friends",
    link: SCREENS.InviteFriends,
  },
  {
    id: 7,
    icon: <SVG_IMAGES.ProIcon6_SVG />,
    title: "Leave a review",
    link: SCREENS.LeaveReview,
  },
  {
    id: 8,
    icon: <SVG_IMAGES.ProIcon7_SVG />,
    title: "FAQs",
    link: SCREENS.FAQs,
  },
  {
    id: 9,
    icon: <SVG_IMAGES.ProIcon8_SVG />,
    title: "Restore Purchases",
    link: SCREENS.RestorePurchases,
  },
  {
    id: 10,
    icon: <SVG_IMAGES.ProIcon10_SVG />,
    title: "Contact Us",
    link: SCREENS.ContactUs,
  },
  {
    id: 11,
    icon: <SVG_IMAGES.ProIcon9_SVG />,
    title: "Privacy Policy",
    link: SCREENS.PrivacyPolicy,
  },
  {
    id: 12,
    icon: <SVG_IMAGES.ProIcon9_SVG />,
    title: "Terms & Conditions",
    link: SCREENS.TermsConditions,
  },
];
const TabProfileScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();

  return (
    <View style={[tabStyle.safeArea, { flex: 1 }]}>
      <GradientBackground />

      {/* Fixed Header Section with original top spacing */}
      <View style={{ paddingTop: insets.top + insets.top + 57 }}>
        <TabHeader
          image={user?.image}
          title={getGreeting()}
          name={user?.username}
          chatcount={14}
          noticount={6}
        />
      </View>


      {/* Wrapper View with original styling and spacing */}
      <View style={[tabStyle.wrapper, {
        flex: 1,
        paddingBottom: insets.bottom * 0
      }]}>
        <TextComponent
          color={COLORS.primary}
          fontSize={31}
          title={"Profile & Settings"}
          marginBottom={25}
          fontFamily={FONTS.Samsungsharpsans_Bold}
          textAlign={"center"}
        />

        {/* Scrollable Card Content */}
        <View style={[styles.card, { flex: 1 }]}>
          <ScrollView
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {menuItems.map((item, index) => {
              const isLastItem = index === menuItems.length - 1;

              return (
                <TouchableOpacity
                  onPress={() => {
                    if (item.link) {
                      if (item.link == 'ProfileDetails') {
                        dispatch(setUserDetail(user))
                      }
                      navigation.navigate(SCREENS.NavigationRoutes, {
                        screen: item.link,
                      });
                    }
                  }}
                  key={item.id}
                  activeOpacity={0.5}
                  style={[
                    styles.profileBtn,
                    isLastItem && styles.lastChild,
                  ]}
                >
                  <View style={styles.iconWidth}>{item.icon}</View>
                  <TextComponent
                    fontFamily={FONTS.Samsungsharpsans_Medium}
                    title={item.title}
                    fontSize={14}
                    color={COLORS.primary}
                  />
                  <View style={{ marginLeft: "auto" }}>
                    <SVG_IMAGES.ProArrowIcon_SVG />
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: COLORS.white,
    shadowColor: "#fff0",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
    paddingHorizontal: 15,
    flex: 1,
  },
  scrollContent: {
    paddingBottom: verticalScale(100),
    paddingTop: verticalScale(10),
  },
  profileBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(13),
    borderBottomWidth: 1.4,
    borderBottomColor: "#EAEAEA",
    paddingBottom: verticalScale(9),
    marginBottom: verticalScale(9),
  },
  lastChild: {
    borderBottomWidth: 0,
    paddingBottom: 0,
    marginBottom: 0,
  },
  iconWidth: {
    width: 34,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabProfileScreen;