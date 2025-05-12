import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import { IMAGES, SVG_IMAGES } from "../../../constants/images";
import TextComponent from "../../../components/TextComponent";
import { COLORS } from "../../../constants/colors";
import { FONTS } from "../../../constants/fonts";
import { useKeyboard } from "../../../providers/KeyboardOpenProvider";
import CustomHeader from "../../../components/CustomHeader";

const CreatePostScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { isKeyboardVisible } = useKeyboard();
  const textInputRef = useRef(null);

  useEffect(() => {
    const showKeyboard = () => {
      if (textInputRef.current) {
        textInputRef.current.focus();
      }
    };
    showKeyboard();
  }, []);

  return (
    <KeyboardAvoidingView
      style={[
        styles.safeArea,
        {
          paddingTop: insets.top,
        },
      ]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <CustomHeader rightTitle="Share" onPress={() => navigation.goBack()} />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        scrollEnabled={isKeyboardVisible}
      >
        <View style={[styles.wrapper]}>
          <View style={styles.card}>
            <View style={[styles.listFlex]}>
              <View style={styles.usePro}>
                <View style={styles.userPro}>
                  <Image
                    source={IMAGES.User1_Img}
                    style={styles.profileImage}
                  />
                </View>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={15.5}
                  title={"Amy82795"}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TouchableOpacity style={styles.dropbutton}>
                  <TextComponent
                    color={COLORS.white}
                    fontSize={11}
                    title={"Categories"}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />

                  <SVG_IMAGES.DownArrow_SVG />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
              }}
            >
              <TextInput
                ref={textInputRef}
                placeholder={"Create a post..."}
                style={[
                  styles.input,
                  { height: Dimensions.get("screen").height * 0.29 },
                ]} // Set a minimum height
                placeholderTextColor={COLORS.placeholderColor}
                multiline={true}
                numberOfLines={15}
                textAlignVertical="top" // Ensures text starts from the top
                autoFocus={true}
              />
            </View>
            <View style={styles.totalCharcter}>
              <TextComponent
                color={COLORS.primary}
                fontSize={15}
                title={"0/400"}
                fontFamily={FONTS.Samsungsharpsans_M}
                textAlign={"right"}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreatePostScreen;
