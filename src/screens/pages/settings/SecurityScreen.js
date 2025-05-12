import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import { IMAGES, SVG_IMAGES } from "../../../constants/images";
import TextComponent from "../../../components/TextComponent";
import { COLORS } from "../../../constants/colors";
import { FONTS } from "../../../constants/fonts";
import CustomHeader from "../../../components/CustomHeader";
const SecurityScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.safeArea,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <CustomHeader title={"Security"} opacity={0} />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={[styles.wrapper]}>
          <View style={styles.card}>
            <View style={styles.content}>
              <TextComponent
                color={COLORS.primary}
                fontSize={15}
                title={"Blocked profiles:"}
                fontFamily={FONTS.Samsungsharpsans_Bold}
                marginBottom={20}
              />
              <View style={[styles.listFlex, styles.listFlexPro]}>
                <View style={styles.userPro}>
                  <Image
                    source={IMAGES.User1_Img}
                    style={styles.profileImage}
                  />
                </View>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={14}
                  title={"Amy82795"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TouchableOpacity style={styles.unblockBtn}>
                  <TextComponent
                    color={COLORS.white}
                    fontSize={11}
                    title={"Unblock"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
              </View>
              <View style={[styles.listFlex, styles.listFlexPro]}>
                <View style={styles.userPro}>
                  <Image
                    source={IMAGES.User2_Img}
                    style={styles.profileImage}
                  />
                </View>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={14}
                  title={"Jane2423"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TouchableOpacity style={styles.unblockBtn}>
                  <TextComponent
                    color={COLORS.white}
                    fontSize={11}
                    title={"Unblock"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
              </View>
              <View style={[styles.listFlex, styles.listFlexPro]}>
                <View style={styles.userPro}>
                  <Image
                    source={IMAGES.User3_Img}
                    style={styles.profileImage}
                  />
                </View>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={14}
                  title={"Ariana2355"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TouchableOpacity style={styles.unblockBtn}>
                  <TextComponent
                    color={COLORS.white}
                    fontSize={11}
                    title={"Unblock"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={[
                  styles.listFlex,
                  styles.listFlexPro,
                  styles.listFlexNone,
                ]}
              >
                <View style={styles.userPro}>
                  <Image
                    source={IMAGES.User4_Img}
                    style={styles.profileImage}
                  />
                </View>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={14}
                  title={"Steph2334"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TouchableOpacity style={styles.unblockBtn}>
                  <TextComponent
                    color={COLORS.white}
                    fontSize={11}
                    title={"Unblock"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SecurityScreen;
