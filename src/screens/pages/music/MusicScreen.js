import { ImageBackground, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import { IMAGES, SVG_IMAGES } from "../../../constants/images";
const MusicScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={IMAGES.Music_IMG}
      style={[
        styles.safeArea,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <SVG_IMAGES.MusicBack_SVG />
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton}>
          <SVG_IMAGES.MusicLike_SVG />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default MusicScreen;
