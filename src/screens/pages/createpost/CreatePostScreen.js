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
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import { IMAGES, SVG_IMAGES } from "../../../constants/images";
import TextComponent from "../../../components/TextComponent";
import { COLORS } from "../../../constants/colors";
import { FONTS } from "../../../constants/fonts";
import { useKeyboard } from "../../../providers/KeyboardOpenProvider";
import CustomHeader from "../../../components/CustomHeader";
import { showToast } from "../../../components/General";
import CustomAvatar from "../../../components/BottomSheets/CustomAvatar";
import { normalize } from "../../../utils/Metrics";
import { useSelector } from "react-redux";
import { PickerBottomSheet } from "../../../components/BottomSheets/PickerBottomSheet";
import PickerItem from "../../../components/BottomSheets/PickerItem";
import { custom_data } from "../../../constants";
import { dataPost } from "../../../utils/myAxios";

const CreatePostScreen = (props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { isKeyboardVisible } = useKeyboard();
  const textInputRef = useRef(null);
  const [content, setContent] = useState('')
  const [loader, setLoader] = useState(false)
  const [category, setCategory] = useState('')
  const user = useSelector((state) => state?.user?.user);
  const refWarn = useRef();

  useEffect(() => {
    const showKeyboard = () => {
      if (textInputRef.current) {
        textInputRef.current.focus();
      }
    };
    showKeyboard();
  }, []);

  const checkValidation = () => {
    if (!content) {
      showToast("Please enter content")
      return
    }
    if (content.length > 400) {
      showToast("Your content length must be less than 400 character")
      return
    }
    submitData();
  }

  const submitData = async () => {
    let data = {
      category :category,
      content : content,
    }
    const endPoint = 'community/post/create';
    const response = await dataPost(endPoint, data);
    if(response?.success){
      navigation.goBack()
    }
  }

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
      <CustomHeader rightTitle="Share" onPress={() => navigation.goBack()} onPressTitle={() => checkValidation()} />
      
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

                  <CustomAvatar
                    image={user?.image}
                    width={normalize(70)}
                    height={normalize(70)}
                    fontSize={normalize(26)}
                    borderRadius={normalize(50)}
                    name={user?.username}
                  />
                </View>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={15.5}
                  title={user?.username}
                  fontFamily={FONTS.Samsungsharpsans_Bold}
                />
                <TouchableOpacity
                  onPress={() => refWarn.current.open()}
                  style={styles.dropbutton}>
                  <TextComponent
                    color={COLORS.white}
                    fontSize={11}
                    title={category ? category : "Categories"}
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
                onChangeText={(val) => setContent(val)}
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
                title={content.length + "/400"}
                fontFamily={FONTS.Samsungsharpsans_M}
                textAlign={"right"}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <PickerBottomSheet
        {...props}
        refRBSheet={refWarn}
        heightLen={0.6}
        headerText='Please Select'
        closeSheet={() => refWarn.current.close()}
      >
        {custom_data.categoriesList.map((item, index) => (
          <PickerItem
            text={item.name}
            onPress={() => {
              setCategory(item.name)
              refWarn.current.close()
            }}
          />
        ))}
      </PickerBottomSheet>
    </KeyboardAvoidingView>
  );
};

export default CreatePostScreen;
