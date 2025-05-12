import { View, ScrollView, Text } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import TextComponent from "../../../components/TextComponent";
import { COLORS } from "../../../constants/colors";
import { FONTS } from "../../../constants/fonts";
import CustomHeader from "../../../components/CustomHeader";
import SearchTextInput from "../../../components/SearchTextInput";
import { SVG_IMAGES } from "../../../constants/images";
const NotificationScreen = () => {
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
      <CustomHeader title={"Notifications"} opacity={0} />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.wrapper}>
          <SearchTextInput
            placeholder="Search"
            style={styles.searchInput}
            placeholderTextColor={COLORS.primary}
            placeholderText={"Search notifications"}
          />
          <View style={styles.notificationContainer}>
            <View
              style={[
                styles.notificationHeader,
                {
                  marginBottom: 6,
                },
              ]}
            >
              <Text style={styles.notificationText}>
                Jane3459 <SVG_IMAGES.CIcon3_SVG width={17} height={17} />
              </Text>
              <TextComponent
                title={"12:53pm"}
                fontSize={11}
                fontFamily={FONTS.Samsungsharpsans_Medium}
                color={COLORS.primary}
              />
            </View>
            <View style={styles.notificationHeader}>
              <TextComponent
                title={"Commented on your post"}
                fontSize={12}
                fontFamily={FONTS.Samsungsharpsans_Medium}
                color={COLORS.primary}
              />
              <View style={styles.notificationbage}>
                <TextComponent
                  title={"New"}
                  fontSize={10}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                  color={COLORS.white}
                />
              </View>
            </View>
          </View>
          <View style={styles.notificationContainer}>
            <View
              style={[
                styles.notificationHeader,
                {
                  marginBottom: 6,
                },
              ]}
            >
              <Text style={styles.notificationText}>Jane3459</Text>
              <TextComponent
                title={"12:53pm"}
                fontSize={11}
                fontFamily={FONTS.Samsungsharpsans_Medium}
                color={COLORS.primary}
              />
            </View>
            <View style={styles.notificationHeader}>
              <TextComponent
                title={"Commented on your post"}
                fontSize={12}
                fontFamily={FONTS.Samsungsharpsans_Medium}
                color={COLORS.primary}
              />
              <View style={styles.notificationbage}>
                <TextComponent
                  title={"New"}
                  fontSize={10}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                  color={COLORS.white}
                />
              </View>
            </View>
          </View>
          <View style={styles.notificationContainer}>
            <View
              style={[
                styles.notificationHeader,
                {
                  marginBottom: 6,
                },
              ]}
            >
              <Text style={styles.notificationText}>Jane3459</Text>
              <TextComponent
                title={"12:53pm"}
                fontSize={11}
                fontFamily={FONTS.Samsungsharpsans_Medium}
                color={COLORS.primary}
              />
            </View>
            <View style={styles.notificationHeader}>
              <TextComponent
                title={"Commented on your post"}
                fontSize={12}
                fontFamily={FONTS.Samsungsharpsans_Medium}
                color={COLORS.primary}
              />
              <View style={styles.notificationbage}>
                <TextComponent
                  title={"New"}
                  fontSize={10}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                  color={COLORS.white}
                />
              </View>
            </View>
          </View>
          <View style={styles.notificationContainer}>
            <View
              style={[
                styles.notificationHeader,
                {
                  marginBottom: 6,
                },
              ]}
            >
              <Text style={styles.notificationText}>Jane3459</Text>
              <TextComponent
                title={"12:53pm"}
                fontSize={11}
                fontFamily={FONTS.Samsungsharpsans_Medium}
                color={COLORS.primary}
              />
            </View>
            <View style={styles.notificationHeader}>
              <TextComponent
                title={"Commented on your post"}
                fontSize={12}
                fontFamily={FONTS.Samsungsharpsans_Medium}
                color={COLORS.primary}
              />
            </View>
          </View>
          <View style={styles.notificationContainer}>
            <View
              style={[
                styles.notificationHeader,
                {
                  marginBottom: 6,
                },
              ]}
            >
              <Text style={styles.notificationText}>Jane3459</Text>
              <TextComponent
                title={"12:53pm"}
                fontSize={11}
                fontFamily={FONTS.Samsungsharpsans_Medium}
                color={COLORS.primary}
              />
            </View>
            <View style={styles.notificationHeader}>
              <TextComponent
                title={"Commented on your post"}
                fontSize={12}
                fontFamily={FONTS.Samsungsharpsans_Medium}
                color={COLORS.primary}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NotificationScreen;
