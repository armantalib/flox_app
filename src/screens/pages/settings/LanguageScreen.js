import { View, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import { SVG_IMAGES } from "../../../constants/images";
import TextComponent from "../../../components/TextComponent";
import { COLORS } from "../../../constants/colors";
import { FONTS } from "../../../constants/fonts";
import CustomHeader from "../../../components/CustomHeader";
const LanguageScreen = () => {
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
      <CustomHeader title={"Language"} opacity={0} />
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
                title={"Select language:"}
                fontFamily={FONTS.Samsungsharpsans_Bold}
                marginBottom={20}
              />
              <TouchableOpacity style={[styles.listFlex, styles.listFlexPro]}>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={14}
                  title={"English"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TouchableOpacity style={{ marginLeft: "auto" }}>
                  <SVG_IMAGES.CheckIcon_SVG />
                </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.listFlex, styles.listFlexPro]}>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={14}
                  title={"German"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TouchableOpacity style={{ marginLeft: "auto" }}>
                  <SVG_IMAGES.UnCheckIcon_SVG />
                </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.listFlex, styles.listFlexPro]}>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={14}
                  title={"French"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TouchableOpacity style={{ marginLeft: "auto" }}>
                  <SVG_IMAGES.UnCheckIcon_SVG />
                </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.listFlex,
                  styles.listFlexPro,
                  styles.listFlexNone,
                ]}
              >
                <TextComponent
                  color={COLORS.primary}
                  fontSize={14}
                  title={"Spanish"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TouchableOpacity style={{ marginLeft: "auto" }}>
                  <SVG_IMAGES.UnCheckIcon_SVG />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LanguageScreen;
