import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import { IMAGES, SVG_IMAGES } from "../../../constants/images";
import TextComponent from "../../../components/TextComponent";
import { COLORS } from "../../../constants/colors";
import { FONTS } from "../../../constants/fonts";
import CustomHeader from "../../../components/CustomHeader";
import BtnPrimary from "../../../components/BtnPrimary";
import { SCREENS } from "../../../constants/Screen";
import { useSelector } from "react-redux";
import CustomAvatar from "../../../components/BottomSheets/CustomAvatar";
import { normalize } from "../../../utils/Metrics";
import { dataPost } from "../../../utils/myAxios";
import { Loader } from "../../../components/General";
const LanguageScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [blockedUsers, setBlockedUsers] = useState(false);
  const [loader, setLoader] = useState(false);
  const { user, userDetail } = useSelector((state) => state?.user);

  const toggleBlockedUser = (user) => {
    setBlockedUsers(!blockedUsers);
  };

  const blockUser = async () => {
    setLoader(true)
    let data = {}
    const endPoint = 'community/block/user/'+userDetail?._id;
    const response = await dataPost(endPoint, data);
    setLoader(false)
    toggleBlockedUser();
  }
  return (
    <View
      style={[
        styles.safeArea,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <CustomHeader title={"Blocked Users"} opacity={0} />
      {/* <Loader loader={loader}/> */}
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={[styles.wrapper]}>
          <TextComponent
            fontFamily={FONTS.Samsungsharpsans_Bold}
            title={
              blockedUsers
                ? "This user has been successfully blocked."
                : "Are you sure you would like to block this user?"
            }
            fontSize={31}
            marginBottom={15}
            color={COLORS.primary}
          />
          <TextComponent
            fontFamily={FONTS.Samsungsharpsans_Medium}
            title={
              blockedUsers
                ? "You can unblock this user anytime in Security Settings."
                : "You will be able to unblock this user later in Security Settings if you would like to."
            }
            fontSize={14}
            color={COLORS.primary}
            marginBottom={20}
          />
          {blockedUsers ? null : (
            <View style={styles.profileBox}>
              <CustomAvatar
                image={userDetail.image}
                user={userDetail}
                width={normalize(50)}
                height={normalize(50)}
                fontSize={normalize(26)}
                borderRadius={normalize(50)}
                name={userDetail?.username}
              />
              <TextComponent
                fontFamily={FONTS.Samsungsharpsans_Bold}
                title={userDetail?.username}
                fontSize={17}
                color={COLORS.primary}
              />
            </View>
          )}
        </View>
      </ScrollView>
      <View style={[styles.footBtns]}>
        {blockedUsers ? (
          <BtnPrimary
            onPress={() =>{
              navigation.goBack()
              // navigation.navigate(SCREENS.NavigationRoutes, {
              //   screen: SCREENS.ProfileDetails,
              // })
            }
            }
            marginBottom={15}
            title={"Return"}
            style={{
              marginTop: "auto",
            }}
          />
        ) : (
          <BtnPrimary
            onPress={()=>blockUser()}
            loader={loader}
            marginBottom={15}
            title={"Block"}
            style={{
              marginTop: "auto",
            }}
          />
        )}
      </View>
    </View>
  );
};

export default LanguageScreen;
