import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "./Styles";
import TextComponent from "../../../components/TextComponent";
import { FONTS } from "../../../constants/fonts";
import { COLORS } from "../../../constants/colors";
import CustomHeader from "../../../components/CustomHeader";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SVG_IMAGES } from "../../../constants/images";
import { commonStyle } from "../../../constants/style";
import EmojiSelector, { Categories } from "react-native-emoji-selector";
import { normalize } from "../../../utils/Metrics";
import { ImageOpenGallery, uploadImageToServer } from "../../../utils/ImageLoad";
import { dataPut } from "../../../utils/myAxios";
import { Loader, showToast } from "../../../components/General";
import { setUser, setUserDetail } from "../../../storeTolkit/userSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { storeData } from "../../../utils/async_storage";

const ProfilePictureScreen = () => {
  const insets = useSafeAreaInsets();
  const [showEmoji, setShowEmoji] = useState(false)
    const navigation = useNavigation();
  const [emojiSelector, setEmojiSelector] = useState('all')
  const [color, setColor] = useState('');
  const [emojiSelected, setEmojiSelected] = useState('');
  const [imageUser, setImageUser] = useState('');
  const [loader, setLoader] = useState(false);
     const dispatch = useDispatch();

  const chooseImage = async () => {
    const imageIs = await ImageOpenGallery();
    const imageServer = await uploadImageToServer(imageIs)
    setImageUser(imageServer)
  }

    const submitData = async () => {
      if(!emojiSelected && !imageUser){
        showToast("Please select at least color and emoji to show on your profile picture")
        return
      }
      if(!color && !imageUser){
        showToast("Please select at least color and emoji to show on your profile picture")
        return
      }
      let data = {
        image: imageUser,
        emoji_color:{
          emoji:emojiSelected,
          color:color
        }
      }
      setLoader(true)
      const endPoint = 'users/update-user';
      const response = await dataPut(endPoint, data);
      setLoader(false)
      if (response?.success) {
        dispatch(setUserDetail(response?.user))
        dispatch(setUser(response?.user))
        storeData('user_data',response?.user)
        navigation.goBack()
      }
    }


  return (
    <View
      style={[
        styles.safeArea,
        {
          paddingTop: insets.top,
          flex: 1, // Added to ensure full screen coverage
        },
      ]}
    >
      <CustomHeader title={"Profile picture"} rightTitle={"Save"} onPressTitle={()=>submitData()} />
      <Loader loader={loader} />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.wrapper, { flex: 1, marginTop: 15 }]}>
        <View style={[commonStyle.uploadFaceProfile, { backgroundColor: color ? color : 'transparent' }]}>
          {imageUser ?
            <Image
              source={{ uri: imageUser }}
              style={{ width: normalize(130), height: normalize(130), borderRadius: normalize(100) }}
            />
            :
            emojiSelected ?
              <Text style={{ fontSize: normalize(55) }}>{emojiSelected}</Text>
              :
              <SVG_IMAGES.AddCircle_SVG />
          }
        </View>

        <TextComponent
          color={COLORS.primary}
          fontSize={12}
          title={"Upload a photo or select an emoji"}
          marginBottom={18}
          fontFamily={FONTS.Samsungsharpsans_Medium}
          textAlign={'center'}
        />
        <View style={commonStyle.iconFlex}>
          <View></View>
          <View></View>
          <View></View>
          <TouchableOpacity
            onPress={() => chooseImage()}
            style={commonStyle.iconStyle}>
            <SVG_IMAGES.Picon1_SVG />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setEmojiSelector('emotion')
              setShowEmoji(!showEmoji)
            }}
            style={commonStyle.iconStyle}>
            <SVG_IMAGES.Picon2_SVG />
          </TouchableOpacity>
          <TouchableOpacity style={commonStyle.iconStyle}>
            <SVG_IMAGES.Picon3_SVG />
          </TouchableOpacity>
          <View></View>
          <View></View>
          <View></View>

          {/* <TouchableOpacity style={commonStyle.iconStyle}>
            <SVG_IMAGES.Picon4_SVG />
          </TouchableOpacity>
          <TouchableOpacity style={commonStyle.iconStyle}>
            <SVG_IMAGES.Picon5_SVG />
          </TouchableOpacity>
          <TouchableOpacity style={commonStyle.iconStyle}>
            <SVG_IMAGES.Picon6_SVG />
          </TouchableOpacity> */}
        </View>
        {showEmoji ?
          <View style={{ width: '100%', height: normalize(300),marginBottom:normalize(70) }}>
            <EmojiSelector
              category={emojiSelector === 'emotion' ? Categories.emotion : Categories.all}
              onEmojiSelected={emoji => {
                setEmojiSelected(emoji)
                setShowEmoji(false)
              }}
            />
          </View> : null}
        <TextComponent
          color={COLORS.primary}
          fontSize={12}
          title={"Select a colour"}
          textAlign={'center'}
          marginBottom={18}
          fontFamily={FONTS.Samsungsharpsans_Medium}
        />

        <View style={commonStyle.iconFlex}>
          <TouchableOpacity
            onPress={() => setColor('#F02424')}
            style={commonStyle.iconStyle}>
            <View
              style={[
                commonStyle.iconColor,
                commonStyle.iconActiveColor,
                { backgroundColor: "#F02424" },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setColor('#F08524')}
            style={commonStyle.iconStyle}>
            <View
              style={[
                commonStyle.iconColor,
                { backgroundColor: "#F08524" },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setColor('#F7D72F')}
            style={commonStyle.iconStyle}>
            <View
              style={[
                commonStyle.iconColor,
                { backgroundColor: "#F7D72F" },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setColor('#89DD87')}
            style={commonStyle.iconStyle}>
            <View
              style={[
                commonStyle.iconColor,
                { backgroundColor: "#89DD87" },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setColor('#4488FB')}
            style={commonStyle.iconStyle}>
            <View
              style={[
                commonStyle.iconColor,
                { backgroundColor: "#4488FB" },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setColor('#E37DE8')}
            style={commonStyle.iconStyle}>
            <View
              style={[
                commonStyle.iconColor,
                { backgroundColor: "#E37DE8" },
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{height:normalize(200)}}></View>
      </ScrollView>
    </View>
  );
};

export default ProfilePictureScreen;