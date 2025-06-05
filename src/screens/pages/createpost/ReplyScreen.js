import { View, ScrollView, KeyboardAvoidingView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import CustomHeader from "../../../components/CustomHeader";
import { IMAGES } from "../../../constants/images";
import { COLORS } from "../../../constants/colors";
import CommunityOneComponent, { SinglePostShow } from "../../../components/CommunityOneComponent";
import BtnPrimary from "../../../components/BtnPrimary";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { dataPost } from "../../../utils/myAxios";
import { setCommentReply, setIsReply, setPostDetail } from "../../../storeTolkit/communitySlice";
import { SCREENS } from "../../../constants/Screen";
import ReplyOneComponent, { SingleReplyShow } from "../../../components/ReplyOneComponent";

const posts = [

  {
    id: "2",
    name: "Danie Muse",
    time: "20 hr ago",
    content:
      "The more floxies we have active here the more we can raise awareness, perform studies, support eachother and fight back against big pharma...",
    likes: 6,
    comments: 16,
    profileImage: IMAGES.User2_Img,
    general: false,
    backgroundColor: COLORS.green,
    likes: false,
    reply: true,
    reply: "🥰 3 Likes",
    replyShow: true,
    likesDislike: true,
  },
  {
    id: "3",
    name: "Danie Muse",
    time: "20 hr ago",
    content:
      "The more floxies we have active here the more we can raise awareness, perform studies, support eachother and fight back against big pharma...",
    likes: 6,
    comments: 16,
    profileImage: IMAGES.User2_Img,
    general: false,
    backgroundColor: COLORS.lemon,
    likes: false,
    reply: true,
    reply: "🥰 3 Likes",
    replyShow: true,
    likesDislike: true,
  },
];

const ReplyScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { postDetail, commentReply } = useSelector((state) => state?.community);
  const dispatch = useDispatch();

  


  const onPressLikeFun = async () => {
    let data = {}
    const endPoint = 'community/posts/' + postDetail?._id + '/like';
    const response = await dataPost(endPoint, data);
    const endPoint2 = 'community/posts/' + postDetail?._id + '/single';
    const response2 = await dataPost(endPoint2, data);
    if (response2.success) {
      dispatch(setPostDetail(response2?.post))
    }
  }

  const onPressLikeReplyFun = async (item) => {
    
    let data = {}
    const endPoint = 'community/comments/' + item?._id + '/like';
    const response = await dataPost(endPoint, data);
    const endPoint2 = 'community/comment/' + commentReply?._id + '/single/'+postDetail?._id;
    const response2 = await dataPost(endPoint2, data);
    if (response2.success) {
      dispatch(setCommentReply(response2?.comment))
      dispatch(setPostDetail(response2?.post))
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
      <CustomHeader

        opacity={0}
        title={"Reply"}
        onPress={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.wrapper}>
          <SingleReplyShow
            item={commentReply}
            onPressLike={() => onPressLikeFun()}
          />
          <ReplyOneComponent
            data={commentReply?.replies}
            onPress={() =>
              navigation.navigate(SCREENS.NavigationRoutes, {
                screen: SCREENS.ProfileDetails,
              })
            }
            onPressLikeReply={(val) => { onPressLikeReplyFun(val) }}
            onPressReply={(item) => {
              dispatch(setCommentReply(item))
              navigation.navigate(SCREENS.NavigationRoutes, {
                screen: SCREENS.ReplyScreen,
              })
            }}
          />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <BtnPrimary
          title={"Reply"}
          backgroundColor={COLORS.blue}
          onPress={() => {
            dispatch(setIsReply(true))
            navigation.navigate(SCREENS.NavigationRoutes, {
              screen: SCREENS.ReplyOnComment,
            })
          }}
          style={{
            backgroundColor: COLORS.blue,
            width: "27.5%",
            height: verticalScale(37.5),
            padding: 0,
          }}
          btnText={{
            fontSize: scale(12.5),
          }}
        />

      </View>
    </KeyboardAvoidingView>
  );
};

export default ReplyScreen;

