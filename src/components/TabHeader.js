import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
} from "react-native";
import TextComponent from "./TextComponent";
import { COLORS } from "../constants/colors";
import { FONTS } from "../constants/fonts";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SVG_IMAGES } from "../constants/images";
import { scale } from "react-native-size-matters";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../constants/Screen";
import { BlurView } from "@react-native-community/blur";
import CustomAvatar from "./BottomSheets/CustomAvatar";
import { normalize } from "../utils/Metrics";
import { setChatCount, setNotiCount, setUserDetail } from "../storeTolkit/userSlice";
import { dataGet_ } from "../utils/myAxios";
import { useDispatch, useSelector } from "react-redux";

const { width } = Dimensions.get("window");

const { height: screenHeight } = Dimensions.get("window");
const navHeight = screenHeight * 0.085;



const TabHeader = ({ style, image, title, name, chatcount, noticount }) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
   const {chatCount,notiCount,user} = useSelector((state) => state?.user);
   const dispatch = useDispatch();

  useEffect(() => {
  getCounts();
  }, [])
  

    const getCounts = async () => {
      const endPoint = 'users/totalUnseens';
      const response = await dataGet_(endPoint, {});
      if(response?.success){
        dispatch(setChatCount(response?.unseenMessage))
        dispatch(setNotiCount(response?.notiCount))
      }
    }
  return (
    <View
      style={[
        styles.container,
        {
          marginTop: insets.top,
        },
      ]}
    >
      {/* Blur Background */}
      <BlurView
        style={styles.blurBackground}
        blurType="dark" // Type of blur (dark, light, etc.)
        blurAmount={10} // Intensity of the blur
      />
      {/* Profile Section */}
      <TouchableOpacity
        style={styles.profileSection}
        onPress={() =>{
          dispatch(setUserDetail(user))
          navigation.navigate(SCREENS.NavigationRoutes, {
            screen: SCREENS.ProfileDetails, // <- replace with your target screen
          })
        }
        }
      >
        <CustomAvatar
          image={image}
          user={user}
          width={navHeight - 10}
          height={navHeight - 10}
          fontSize={normalize(26)}
          borderRadius={normalize(50)}
          name={name}
        />
        {/* <Image
          source={image}
          style={styles.profileImage}
        /> */}
        <View style={styles.textContainer}>
          <TextComponent
            color={COLORS.white}
            fontSize={12.5}
            title={title}
            marginBottom={1}
            fontFamily={FONTS.Samsungsharpsans}
          />
          <TextComponent
            color={COLORS.white}
            fontSize={18}
            title={name}
            marginBottom={-2}
            fontFamily={FONTS.Samsungsharpsans_Medium}
          />
        </View>
      </TouchableOpacity>


      {/* Notification Icon with Badge */}
      <TouchableOpacity
        style={[styles.iconWrapper, { marginRight: 15 }]}
        onPress={() =>
          navigation.navigate(SCREENS.NavigationRoutes, {
            screen: SCREENS.Notification,
          })
        }
      >
        <SVG_IMAGES.Notification_Bell_New_SVG width={scale(26)} height={scale(26)} marginRight={5} />
        {notiCount?
        <LinearGradient
          colors={["#3995FF", "#3995FF"]} // White to Black
          start={{ x: 0, y: 1 }} // Bottom
          end={{ x: 1, y: 0 }} // Top
          style={styles.badge} // Makes the gradient cover the entire image
        >
          <Text style={styles.badgeText}>{notiCount}</Text>
        </LinearGradient>:null}
      </TouchableOpacity>

      {/* Notification & Messages Section */}
      <View style={styles.iconsContainer}>
        {/* Chat Icon with Badge */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(SCREENS.NavigationRoutes, {
              screen: SCREENS.ChatUserList,
            })
          }
          style={styles.iconWrapper}
        >
          <SVG_IMAGES.Chat_New_SVG width={scale(26)} height={scale(26)} />
          {chatCount?
          <LinearGradient
            colors={["#3995FF", "#3995FF"]} // White to Black
            start={{ x: 0, y: 1 }} // Bottom
            end={{ x: 1, y: 0 }} // Top
            style={styles.badge} // Makes the gradient cover the entire image
          >
            <Text style={styles.badgeText}>{chatCount}</Text>
          </LinearGradient>:null}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TabHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 7.5,
    borderRadius: 100,
    width: width * 0.93,
    alignSelf: "center",
    elevation: 2,
    position: "absolute",
    zIndex: 2,
    overflow: "hidden", // Ensure the blur effect doesn't overflow
  },
  blurBackground: {
    ...StyleSheet.absoluteFillObject, // Cover the entire container
    borderRadius: 0, // Match the container's borderRadius
    backgroundColor: "#2c2c2cb5",
  },
  profileImage: {
    width: navHeight - 10,
    height: navHeight - 10,
    borderRadius: 100, // Circular profile picture
    marginLeft: 0,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // So it takes up the middle area between icons
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    right: 15,
  },
  iconWrapper: {
    position: "relative",
    marginLeft: 10,
    top: 1
  },
  badge: {
    position: "absolute",
    top: -6,
    left: -10,
    backgroundColor: "#6A5ACD", // Purple badge
    borderRadius: 100,
    paddingHorizontal: 7,
    height: 17,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: COLORS.white,
    fontSize: scale(10),
    fontFamily: FONTS.Samsungsharpsans_Bold,
  },
});
