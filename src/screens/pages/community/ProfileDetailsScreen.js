import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Keyboard,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import CustomAvatar from "../../../components/BottomSheets/CustomAvatar";
import { normalize } from "../../../utils/Metrics";
import { dataGet_, dataPost } from "../../../utils/myAxios";
import { showToast } from "../../../components/General";
import { setUserDetail } from "../../../storeTolkit/userSlice";
import { setChatToId } from "../../../storeTolkit/ChatData";
import AnimatedDotSlider from "../../../components/AnimatedDotSlider";
import { tabStyle } from "../../../constants/style";
import { setStepsData, setStepsDataUser } from "../../../storeTolkit/stepsSlice";
import AnimatedDotSliderUser from "../../../components/AnimatedDotSliderUser";

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

const ProfileDetailsScreen = (props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isFollow, setIsFollow] = useState(false);
  const dispatch = useDispatch();
  const { user, userDetail } = useSelector((state) => state?.user);


  useEffect(() => {
    checkFollowUnFollow();
    getFqStateData();
  }, [])

  const checkFollowUnFollow = async () => {
    let data = {
      followerId: user?._id,
      followingId: userDetail?._id,
    }
    const endPoint = 'general/follow/check';
    const response = await dataPost(endPoint, data);

    if (response?.data) {
      setIsFollow(true)
    } else {
      setIsFollow(false)
    }
  }

  const getFqStateData = async () => {
    const endPoint = 'antibiotic/check/user/' + userDetail?._id;
    const response = await dataGet_(endPoint, {});
    if (response.success) {
      dispatch(setStepsData(response?.data))
    }
  }



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

  const followUnFollowUser = async () => {
    if (user?._id == userDetail?._id) {
      showToast("You can't follow yourself.")
      return
    }
    setIsFollow(!isFollow)
    let data = {
      followerId: user?._id,
      followingId: userDetail?._id,
    }
    const endPoint = 'general/follow/user';
    const response = await dataPost(endPoint, data);
    dispatch(setUserDetail(response?.user))


  }

  return (
    // <TouchableWithoutFeedback activeOpacity={1} onPress={handleOutsidePress}>
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
            title={userDetail?.username}
            fontFamily={FONTS.Samsungsharpsans_Bold}
            textAlign={"center"}
            marginBottom={10}
          />
        </View>
        {user?._id == userDetail?._id ?
          <TouchableOpacity 
          onPress={()=>{
               navigation.navigate(SCREENS.NavigationRoutes, {
                  screen: SCREENS.UpdateUserBio,
                })
          }}
          style={styles.editStyle}>
            <TextComponent
              color={COLORS.white}
              fontSize={12}
              title={"Edit Bio"}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
            />
            <SVG_IMAGES.Edit_SVG />
          </TouchableOpacity>
          :
          <TouchableOpacity
            onPress={() => setShowDropdown(!showDropdown)}
            style={styles.dotsSTyle}
          >
            <SVG_IMAGES.DotsIcon_SVG />
          </TouchableOpacity>}
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
              onPress={() => {
                setShowDropdown(false)
                navigation.navigate(SCREENS.NavigationRoutes, {
                  screen: SCREENS.BlockedUser,
                })
              }
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
              onPress={() =>{
                 setShowDropdown(false)
                navigation.navigate(SCREENS.NavigationRoutes, {
                  screen: SCREENS.ReportUser,
                })
              }
              }
            >
              <TextComponent
                color={COLORS.black}
                fontSize={15}
                title={"Report User"}
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

            <CustomAvatar
              image={userDetail?.image}
              width={normalize(50)}
              height={normalize(50)}
              fontSize={normalize(26)}
              borderRadius={normalize(50)}
              name={userDetail?.username}
            />

            {/* Stats Section */}
            <View style={styles.statsContainer}>
              <View style={styles.stat}>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={15}
                  title={userDetail?.postsCount}
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
                  title={userDetail?.followersCount}
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
                  title={userDetail?.followingCount}
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
            title={userDetail?.about_me?userDetail?.about_me:'User Bios Not Available'}
            fontFamily={FONTS.Samsungsharpsans}
            lineHeight={16}
            marginBottom={10}
          />
          {user?._id == userDetail?._id ?null:
          <View style={styles.btnFlex}>
            <View style={{ width: "50%" }}>
              <BtnPrimary
                onPress={() => followUnFollowUser()}
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
                title={isFollow ? "Following" : "Follow"}
              />
            </View>
            <View style={{ width: "50%" }}>
              <OutlineButton
                style={{
                  height: 38,
                }}
                userIcon
                title={"Message"}
                navigation={() => {
                  dispatch(setChatToId(userDetail?._id))
                  navigation.navigate(SCREENS.NavigationRoutes, {
                    screen: SCREENS.InboxScreen,
                  })
                }
                }
              />
            </View>
          </View>}
        </View>
      </View>
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
          {activeTab === 0 && <UserDetailsComponent data={posts} {...props} />}
          {activeTab === 1 && (
            <>

              <View style={[tabStyle.tabContainer, { marginBottom: normalize(60), height: Dimensions.get("screen").height * 0.47 }]}>
                <AnimatedDotSliderUser
                  {...props}
                />
              </View>
              <View style={{ height: normalize(300) }}></View>

            </>
          )}

        </View>
      </View>


      {/* </ScrollView> */}
    </View>
    // </TouchableWithoutFeedback>
  );
};

export default ProfileDetailsScreen;
