import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import TextComponent from "../../../components/TextComponent";
import { COLORS } from "../../../constants/colors";
import { FONTS } from "../../../constants/fonts";
import CustomHeader from "../../../components/CustomHeader";
import SearchTextInput from "../../../components/SearchTextInput";
import { IMAGES, SVG_IMAGES } from "../../../constants/images";
import { SCREENS } from "../../../constants/Screen";
const ChatUserListScreen = () => {
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
      <CustomHeader title={"Chats"} opacity={0} />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.wrapper}>
          <SearchTextInput
            placeholder="Search"
            style={styles.searchInput}
            placeholderTextColor={COLORS.primary}
            placeholderText={"Search messages"}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(SCREENS.NavigationRoutes, {
                screen: SCREENS.Chat,
              })
            }
            style={[
              styles.notificationContainer,
              styles.notificationContainer1,
            ]}
          >
            <Image source={IMAGES.User1_Img} style={styles.chatUserImage} />
            <View style={styles.chatUserContainer}>
              <View
                style={[
                  styles.notificationHeader,
                  {
                    marginBottom: 2,
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
                  marginBottom={4}
                />
              </View>
              <View style={styles.notificationHeader}>
                <TextComponent
                  title={"Hey, how are you feeling?"}
                  fontSize={12}
                  fontFamily={FONTS.Samsungsharpsans_Medium}
                  color={COLORS.primary}
                  style={{
                    flex: 1,
                  }}
                />
                <View style={styles.notificationbage}>
                  <TextComponent
                    title={"2"}
                    fontSize={10}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                    color={COLORS.white}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(SCREENS.NavigationRoutes, {
                screen: SCREENS.Chat,
              })
            }
            style={[
              styles.notificationContainer,
              styles.notificationContainer1,
            ]}
          >
            <Image source={IMAGES.User1_Img} style={styles.chatUserImage} />
            <View style={styles.chatUserContainer}>
              <View
                style={[
                  styles.notificationHeader,
                  {
                    marginBottom: 2,
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
                  marginBottom={4}
                />
              </View>
              <View style={styles.notificationHeader}>
                <TextComponent
                  title={"Hey, how are you feeling?"}
                  fontSize={12}
                  fontFamily={FONTS.Samsungsharpsans_Medium}
                  color={COLORS.primary}
                  style={{
                    flex: 1,
                  }}
                />
                <View style={styles.notificationbage}>
                  <TextComponent
                    title={"2"}
                    fontSize={10}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                    color={COLORS.white}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(SCREENS.NavigationRoutes, {
                screen: SCREENS.Chat,
              })
            }
            style={[
              styles.notificationContainer,
              styles.notificationContainer1,
            ]}
          >
            <Image source={IMAGES.User1_Img} style={styles.chatUserImage} />
            <View style={styles.chatUserContainer}>
              <View
                style={[
                  styles.notificationHeader,
                  {
                    marginBottom: 2,
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
                  marginBottom={4}
                />
              </View>
              <View style={styles.notificationHeader}>
                <TextComponent
                  title={"Hey, how are you feeling?"}
                  fontSize={12}
                  fontFamily={FONTS.Samsungsharpsans_Medium}
                  color={COLORS.primary}
                  style={{
                    flex: 1,
                  }}
                />
                <View style={styles.notificationbage}>
                  <TextComponent
                    title={"2"}
                    fontSize={10}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                    color={COLORS.white}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(SCREENS.NavigationRoutes, {
                screen: SCREENS.Chat,
              })
            }
            style={[
              styles.notificationContainer,
              styles.notificationContainer1,
            ]}
          >
            <Image source={IMAGES.User1_Img} style={styles.chatUserImage} />
            <View style={styles.chatUserContainer}>
              <View
                style={[
                  styles.notificationHeader,
                  {
                    marginBottom: 2,
                  },
                ]}
              >
                <Text style={styles.notificationText}>
                  Jane3459 <SVG_IMAGES.CIcon3_SVG width={17} height={17} marginTop={24} />
                </Text>
                <TextComponent
                  title={"12:53pm"}
                  fontSize={11}
                  fontFamily={FONTS.Samsungsharpsans_Medium}
                  color={COLORS.primary}
                  marginBottom={4}
                  
                />
              </View>
              <View style={styles.notificationHeader}>
                <TextComponent
                  title={"Hey, how are you feeling?"}
                  fontSize={12}
                  fontFamily={FONTS.Samsungsharpsans_Medium}
                  color={COLORS.primary}
                  style={{
                    flex: 1,
                  }}
                />
                <View style={styles.notificationbage}>
                  <TextComponent
                    title={"2"}
                    fontSize={10}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                    color={COLORS.white}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChatUserListScreen;
