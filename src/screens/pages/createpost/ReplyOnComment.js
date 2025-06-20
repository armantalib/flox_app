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
import { useDispatch, useSelector } from "react-redux";
import { PickerBottomSheet } from "../../../components/BottomSheets/PickerBottomSheet";
import PickerItem from "../../../components/BottomSheets/PickerItem";
import { custom_data } from "../../../constants";
import { dataPost } from "../../../utils/myAxios";
import { setCommentReply, setPostDetail } from "../../../storeTolkit/communitySlice";

const ReplyOnComment = (props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { isKeyboardVisible } = useKeyboard();
  const textInputRef = useRef(null);
  const [content, setContent] = useState('')
  const [loader, setLoader] = useState(false)
  const [category, setCategory] = useState('')
  const user = useSelector((state) => state?.user?.user);
  const refWarn = useRef();
  const { postDetail, isReply, commentReply } = useSelector((state) => state?.community);
  const dispatch = useDispatch();

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
    if (isReply) {
      replyCommentSubmit()
    } else {
      submitData();
    }
  }

  const replyCommentSubmit = async () => {
    let data = {
      content: content,
    }
    const endPoint = 'community/comments/' + commentReply?._id + '/reply';
    const response = await dataPost(endPoint, data);
    const endPoint2 = 'community/comment/' + commentReply?._id + '/single/' + postDetail?._id;
    const response2 = await dataPost(endPoint2, data);
    if (response2.success) {
      dispatch(setCommentReply(response2?.comment))
      dispatch(setPostDetail(response2?.post))
      navigation.goBack()
    }
  }

  const submitData = async () => {
    let data = {
      content: content,
    }
    const endPoint = 'community/posts/' + postDetail?._id + '/comment';
    const response = await dataPost(endPoint, data);
    const endPoint2 = 'community/posts/' + postDetail?._id + '/single';
    const response2 = await dataPost(endPoint2, data);
    if (response2.success) {
      dispatch(setPostDetail(response2?.post))
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
      <CustomHeader rightTitle="Reply" onPress={() => navigation.goBack()} onPressTitle={() => checkValidation()} />

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
                    user={user}
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
                <View style={{ width: '50%' }}></View>

              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
              }}
            >
              <TextInput
                ref={textInputRef}
                placeholder={"Please write..."}
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

export default ReplyOnComment;
