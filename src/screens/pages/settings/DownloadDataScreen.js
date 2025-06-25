import { View, ScrollView, TouchableOpacity, Image, Text } from "react-native";
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
import CustomAvatar from "../../../components/BottomSheets/CustomAvatar";
import { normalize } from "../../../utils/Metrics";
import { ImageOpenGallery, MultiImageOpenGallery, uploadImageToServer } from "../../../utils/ImageLoad";
import stylesG from "../../../assets/css/stylesG";
const DownloadDataScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [blockedUsers, setBlockedUsers] = useState(false);
  const [isPersonalData, setIsPersonalData] = useState(true);


  const toggleBlockedUser = (user) => {
    setBlockedUsers(!blockedUsers);
  };

  const chooseImage = async () => {
    const imageIs = await ImageOpenGallery();
    const imageServer = await uploadImageToServer(imageIs)
    setImageProf(imageServer)
  }
  return (
    <View
      style={[
        styles.safeArea,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <CustomHeader title={"Download Data"} opacity={0} />
      <ScrollView
        contentContainerStyle={{}}
        keyboardShouldPersistTaps="handled"
      >
        <View style={[{ width: '90%', alignSelf: 'center',marginTop:normalize(20) }]}>
          <Image
            source={IMAGES.downloadGraph}
            style={{ width: '100%', height: normalize(260), resizeMode: 'contain' }}
          />

          <View style={[stylesG.spaceAround, { width: '95%', alignSelf: 'center', height: normalize(60), backgroundColor: '#E8E8E8', borderRadius: normalize(50), marginTop: normalize(30) }]}>

            <TouchableOpacity
              onPress={() => setIsPersonalData(true)}
              style={[{ width: '50%', height: normalize(60), justifyContent: 'center', alignItems: 'center', backgroundColor: isPersonalData ? COLORS.black : '#E8E8E8', borderRadius: normalize(50) }]}>
              <Text style={[stylesG.fontMedium, { color: isPersonalData ? COLORS.white : COLORS.black, marginRight: normalize(10) }]}>Personal</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setIsPersonalData(false)}
              style={[{ width: '50%', height: normalize(60), justifyContent: 'center', alignItems: 'center', backgroundColor: !isPersonalData ? COLORS.black : '#E8E8E8', borderRadius: normalize(50) }]}>
              <Text style={[stylesG.fontMedium, { color: !isPersonalData ? COLORS.white : COLORS.black, marginRight: normalize(10) }]}>Global</Text>
            </TouchableOpacity>
          </View>

          {isPersonalData?
          <Text style={[stylesG.fontMedium,{textAlign:'center',marginTop:normalize(20),fontSize:normalize(15),lineHeight:normalize(24)}]}>Export your personal recovery data in the form of a downloadable PDF you can use to share with your doctor.</Text>
         : <Text style={[stylesG.fontMedium,{textAlign:'center',marginTop:normalize(20),fontSize:normalize(15),lineHeight:normalize(24)}]}>Click the button below to download our total  recorded statistics as a PDF to date.</Text>
          }
         </View>
      </ScrollView>
      <View style={[styles.footBtns]}>
        {blockedUsers ? (
          <BtnPrimary
            onPress={() =>
              navigation.navigate(SCREENS.NavigationRoutes, {
                screen: SCREENS.ProfileDetails,
              })
            }
            marginBottom={15}
            title={"Return"}
            style={{
              marginTop: "auto",
            }}
          />
        ) : (
          <BtnPrimary
            onPress={() => reportPost()}
            marginBottom={15}
            backgroundColor={COLORS.blue}
            title={"Download"}
            style={{
              marginTop: "auto",
            }}
          />
        )}
      </View>
    </View>
  );
};

export default DownloadDataScreen;
