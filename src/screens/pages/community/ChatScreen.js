import { View, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import GradientBackground from "../../../components/GradientBackground";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import { IMAGES, SVG_IMAGES } from "../../../constants/images";
import TextComponent from "../../../components/TextComponent";
import { FONTS } from "../../../constants/fonts";
import { COLORS } from "../../../constants/colors";
import CustomTextInputChat from "../../../components/CustomTextInputChat";
import LinearGradient from "react-native-linear-gradient";

const DATA = [
  {
    id: "1",
    title: "Offensive",
  },
];

const ChatScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <View style={styles.chatWrapper}>
        {/* Left Chat */}
        <View style={[styles.leftChat]}>
          <View style={[styles.rightChatBox, styles.leftChatBox]}>
            <TextComponent
              fontFamily={FONTS.Samsungsharpsans}
              title={
                "Lots of coffee and occasional dance breaks in the kitchen! How about you? :)"
              }
              fontSize={13}
              lineHeight={18}
              color={COLORS.black}
              marginBottom={6}
            />
            <View style={{ marginTop: -7 }}>
              <TextComponent
                fontFamily={FONTS.Samsungsharpsans}
                title={"04:46 PM"}
                fontSize={11}
                textAlign={"right"}
                color={COLORS.black}
              />
            </View>
          </View>
          <TouchableOpacity>
            <SVG_IMAGES.HeartNew1_SVG />
          </TouchableOpacity>
        </View>
        {/* Right Chat */}
        <View style={styles.rightChat}>
          <View style={[styles.rightChatBox, styles.rightChatBox1]}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#3995FF", "#3995FF"]}
            >
              <View style={styles.switchBackground}>
                <TextComponent
                  fontFamily={FONTS.Samsungsharpsans}
                  title={
                    "Ah, a fellow caffeine enthusiast! As for me I rely of my problem solving skills and copious amounts of chocolate! Hahaha"
                  }
                  fontSize={13}
                  lineHeight={18}
                  marginBottom={6}
                />
                <TextComponent
                  fontFamily={FONTS.Samsungsharpsans}
                  title={"20:04 PM"}
                  fontSize={11}
                  textAlign={"right"}
                />
              </View>
            </LinearGradient>
          </View>
        </View>
        {/* Left Chat */}
        <View style={[styles.leftChat]}>
          <View style={[styles.rightChatBox, styles.leftChatBox]}>
            <TextComponent
              fontFamily={FONTS.Samsungsharpsans}
              title={
                "Lots of coffee and occasional dance breaks in the kitchen! How about you? :)"
              }
              fontSize={13}
              lineHeight={18}
              color={COLORS.black}
              marginBottom={6}
            />
            <View style={{ marginTop: -7 }}>
              <TextComponent
                fontFamily={FONTS.Samsungsharpsans}
                title={"04:46 PM"}
                fontSize={11}
                textAlign={"right"}
                color={COLORS.black}
              />
            </View>
          </View>
          <TouchableOpacity>
            <SVG_IMAGES.HeartNew_SVG />
          </TouchableOpacity>
        </View>
        {/* Right Chat */}
        <View style={styles.rightChat}>
          <TouchableOpacity>
            <SVG_IMAGES.HeartNew1_SVG />
          </TouchableOpacity>
          <View style={[styles.rightChatBox, styles.rightChatBox1]}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#3995FF", "#1F8AFF"]}
            >
              <View style={styles.switchBackground}>
                <TextComponent
                  fontFamily={FONTS.Samsungsharpsans}
                  title={
                    "Ah, a fellow caffeine enthusiast! As for me I rely of my problem solving skills and copious amounts of chocolate! Hahaha"
                  }
                  fontSize={13}
                  lineHeight={18}
                  marginBottom={6}
                />
                <TextComponent
                  fontFamily={FONTS.Samsungsharpsans}
                  title={"20:04 PM"}
                  fontSize={11}
                  textAlign={"right"}
                />
              </View>
            </LinearGradient>
          </View>
        </View>
      </View>
    );
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
      <View
        style={[
          styles.flexRow,
          {
            paddingHorizontal: 20,
            gap: 12,
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[styles.backBtn]}
        >
          <SVG_IMAGES.Arrow_SVG />
        </TouchableOpacity>
        <View style={styles.titleCenter1}>
          <View style={styles.imgBox}>
            <Image source={IMAGES.User2_Img} style={styles.img1} />
          </View>
          <TextComponent
            color={COLORS.primary}
            fontSize={16}
            title={"Jane3459"}
            fontFamily={FONTS.Samsungsharpsans_Bold}
            textAlign={"center"}
          />
          <SVG_IMAGES.CIcon3_SVG width={20} height={20} />
        </View>
        <TouchableOpacity style={styles.dotsSTyle}>
          <SVG_IMAGES.DotsIcon_SVG />
        </TouchableOpacity>
      </View>
      <View style={[styles.wrapper]}>
        <View style={styles.chatContainer}>
          <FlatList
            nestedScrollEnabled={false}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
          {/* No Chat */}
          {/* <View style={styles.noChat}>
                  <TextComponent
                    title={"No messages here yet..."}
                    fontFamily={FONTS.Samsungsharpsans_Medium}
                    color={COLORS.black}
                    fontSize={20}
                    textAlign={"center"}
                  />
                  <SVG_IMAGES.NoChat_SVG />
                  <TextComponent
                    title={
                      "Start a conversation with a\nmessage, GIF or voice note!"
                    }
                    fontFamily={FONTS.Samsungsharpsans}
                    color={COLORS.black}
                    fontSize={14}
                    textAlign={"center"}
                  />
                </View> */}
        </View>

        <View style={styles.chatFooter}>
          <CustomTextInputChat
            rightIcon={() => (
              <TouchableOpacity activeOpacity={0.8}>
                <SVG_IMAGES.Send_SVG />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;
