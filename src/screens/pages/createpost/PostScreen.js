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
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { dataPost } from "../../../utils/myAxios";

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

const PostScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { postDetail } = useSelector((state) => state?.community);


  const onPressLikeFun = async () => {
    let data = {

    }
    const endPoint = 'community/posts/' + postDetail?._id + '/like';
    const response = await dataPost(endPoint, data);
    const endPoint2 = 'community/posts/' + postDetail?._id + '/single';
    const response2 = await dataPost(endPoint2, data);
    if(response2.success){
      
      
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
        dotShow
        opacity={0}
        title={"Post"}
        onPress={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.wrapper}>
          <SinglePostShow
            item={postDetail}
            onPressLike={() => onPressLikeFun()}
          />
          <CommunityOneComponent
            data={posts}
            onPress={() =>
              navigation.navigate(SCREENS.NavigationRoutes, {
                screen: SCREENS.ProfileDetails,
              })
            }
          />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <BtnPrimary
          title={"Reply"}
          backgroundColor={COLORS.blue}
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

export default PostScreen;

