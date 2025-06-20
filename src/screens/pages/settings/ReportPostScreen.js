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
import { dataPost } from "../../../utils/myAxios";
import { showToast } from "../../../components/General";
import { useSelector } from "react-redux";
const ReportUserScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [blockedUsers, setBlockedUsers] = useState(false);
  const [loader, setLoader] = useState(false);
  const [content, setContent] = useState('');
  const { user, userDetail } = useSelector((state) => state?.user);
  const { postDetail} = useSelector((state) => state?.community);

  const reportPost = async () => {
    if (!content) {
      showToast("Please enter reason");
    }
    setLoader(true)
    let data = {
      title:'Report Post',
      desc: content,
      image: '',
      type: 'post',
      report_user:null,
      post: postDetail?._id
    }
    const endPoint = 'general/report/post';
    const response = await dataPost(endPoint, data);
    setLoader(false)
    toggleBlockedUser();
  }


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
      <CustomHeader title={"Report post"} opacity={0} />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={[styles.wrapper]}>
          <TextComponent
            fontFamily={FONTS.Samsungsharpsans_Bold}
            title={
              blockedUsers
                ? "This post has been successfully reported."
                : "Please describe why you are reporting this post?"
            }
            fontSize={30}
            marginBottom={15}
            color={COLORS.primary}
          />
          <TextComponent
            fontFamily={FONTS.Samsungsharpsans_Medium}
            title={
              blockedUsers
                ? "This post has been reported to our team, we take reporting very seriously and will remove posts and ban users if necessary."
                : "After you report this post, our team will review it and take any necessary action."
            }
            fontSize={14}
            color={COLORS.primary}
            marginBottom={20}
          />
          {blockedUsers ? null : (
            <>
              <CustomTextInput
                isMultiline={true}
                numberOfLines={5}
                onChangeText={(val) => setContent(val)}
                value={content}
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
              navigation.goBack()
            }
            marginBottom={15}
            title={"Return"}
            style={{
              marginTop: "auto",
            }}
          />
        ) : (
          <BtnPrimary
            onPress={(() => { reportPost() })}
            marginBottom={15}
            title={"Report"}
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
