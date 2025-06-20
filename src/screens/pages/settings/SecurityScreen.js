import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import { IMAGES, SVG_IMAGES } from "../../../constants/images";
import TextComponent from "../../../components/TextComponent";
import { COLORS } from "../../../constants/colors";
import { FONTS } from "../../../constants/fonts";
import CustomHeader from "../../../components/CustomHeader";
import { dataGet_, dataPost } from "../../../utils/myAxios";
import CustomAvatar from "../../../components/BottomSheets/CustomAvatar";
import { normalize } from "../../../utils/Metrics";
import { Loader, NotFound } from "../../../components/General";
const SecurityScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [loader, setLoader] = useState(true);


  useEffect(() => {
    getBlockedUsers()
  }, [])


  const getBlockedUsers = async () => {
    setLoader(true)
    let data = {}
    const endPoint = 'community/blocked/users';
    const response = await dataGet_(endPoint, data);
    if (response?.success) {
      setBlockedUsers(response?.blockedUsers)
    }
    setLoader(false)
  }


  const unblockUsers = async (userid) => {
    setLoader(true)
    let data = {}
    const endPoint = 'community/unblock/user/' + userid;
    const response = await dataPost(endPoint, data);
    setLoader(false)
    getBlockedUsers()
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
      <CustomHeader title={"Security"} opacity={0} />
      <Loader loader={loader}/>
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
                title={"Blocked profiles:"}
                fontFamily={FONTS.Samsungsharpsans_Bold}
                marginBottom={20}
              />
              {blockedUsers.map((item, index) => (
                <View style={[styles.listFlex, styles.listFlexPro]}>
                  <View style={styles.userPro}>
                    <CustomAvatar
                      image={item?.image}
                      user={item}
                      width={normalize(50)}
                      height={normalize(50)}
                      fontSize={normalize(26)}
                      borderRadius={normalize(50)}
                      name={item?.username}
                    />
                  </View>
                  <TextComponent
                    color={COLORS.primary}
                    fontSize={14}
                    title={item?.username}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                  />
                  <TouchableOpacity
                    onPress={() => unblockUsers(item?._id)}
                    style={styles.unblockBtn}>
                    <TextComponent
                      color={COLORS.white}
                      fontSize={11}
                      title={"Unblock"}
                      fontFamily={FONTS.Samsungsharpsans_Bold}
                    />
                  </TouchableOpacity>
                </View>
              ))}
              {blockedUsers.length==0 && !loader?
              <NotFound
              height={normalize(450)}
              />
              :null}

            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SecurityScreen;
