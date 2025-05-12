import { View, ScrollView, TouchableOpacity, Image } from "react-native";
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
import CustomTextInput from "../../../components/CustomTextInput";
const ReportUserScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [blockedUsers, setBlockedUsers] = useState(false);
  const toggleBlockedUser = (user) => {
    setBlockedUsers(!blockedUsers);
  };
  return (
    <View
      style={[
        styles.safeArea,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <CustomHeader title={"Report user"} opacity={0} />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={[styles.wrapper]}>
          <TextComponent
            fontFamily={FONTS.Samsungsharpsans_Bold}
            title={
              blockedUsers
                ? "This user has been successfully reported."
                : "Please describe why you are reporting this user?"
            }
            fontSize={30}
            marginBottom={15}
            color={COLORS.primary}
          />
          <TextComponent
            fontFamily={FONTS.Samsungsharpsans_Medium}
            title={
              blockedUsers
                ? "This user has been blocked and reported to our team, we take reporting very seriously and will ban users if necessary."
                : "After you report this user they will be automatically blocked and our team will review your report."
            }
            fontSize={14}
            color={COLORS.primary}
            marginBottom={20}
          />
          {blockedUsers ? null : (
            <>
              <View style={styles.profileBox}>
                <Image
                  source={IMAGES.User1_Img}
                  resizeMode="cover"
                  style={[
                    styles.userStyle,
                    {
                      width: 60,
                      height: 60,
                    },
                  ]}
                />
                <TextComponent
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                  title={"Jane3459"}
                  fontSize={15}
                  color={COLORS.primary}
                />
                <TouchableOpacity style={[styles.bgContainer]}>
                  <SVG_IMAGES.Attachicon_SVG />
                  <TextComponent
                    fontFamily={FONTS.Samsungsharpsans}
                    title={`Attach\nevidence`}
                    lineHeight={20}
                    fontSize={14}
                    color={COLORS.primary}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ marginBottom: 15 }} />
              <CustomTextInput
                isMultiline={true}
                numberOfLines={5}
                input={{
                  height: 140,
                  marginBottom: 0,
                  backgroundColor: "#EAE9E8",
                }}
                inputBox={{
                  backgroundColor: "#EAE9E8",
                  height: 160,
                }}
                placeholderText={"Reason for report..."}
              />
            </>
          )}
        </View>
      </ScrollView>
      <View style={[styles.footBtns]}>
        {blockedUsers ? (
          <BtnPrimary
            onPress={() =>
              navigation.navigate(SCREENS.NavigationRoutes, {
                screen: SCREENS.ProfileDetails,
              })
            }
            marginBottom={15}
            title={"Return"}
            style={{
              marginTop: "auto",
            }}
          />
        ) : (
          <BtnPrimary
            onPress={toggleBlockedUser}
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

export default ReportUserScreen;
