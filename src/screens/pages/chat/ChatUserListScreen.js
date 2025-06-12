import { View, ScrollView, Text, TouchableOpacity, Image, FlatList, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import TextComponent from "../../../components/TextComponent";
import { COLORS } from "../../../constants/colors";
import { FONTS } from "../../../constants/fonts";
import CustomHeader from "../../../components/CustomHeader";
import SearchTextInput from "../../../components/SearchTextInput";
import { IMAGES, SVG_IMAGES } from "../../../constants/images";
import { SCREENS } from "../../../constants/Screen";
import { dataGet_ } from "../../../utils/myAxios";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setChatToId } from "../../../storeTolkit/ChatData";
const ChatUserListScreen = (props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);
  const [dataTemp, setDataTemp] = useState([]);
  const [infoModal2, setInfoModal2] = useState(false);
   const dispatch = useDispatch();

  useEffect(() => {
   getData();
  }, [])
  

  const getData = async () => {
    // await deleteValue('intro_screen')
    setIsRefreshing(true);
    let data = {}
    const endPoint = 'msg/conversations';
    const res = await dataGet_(endPoint, data)
    console.log("R",res);
    
    setLoader(false)
    setIsRefreshing(false);
    if (res?.success == true) {
      // console.log("R",res?.data?.conversations);
      setData(res?.conversations)
      setDataTemp(res?.conversations)
    } else {
      setInfoModal2(true)
    }
    // setData()

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
      <CustomHeader title={"Chats"} opacity={0} />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.wrapper}>
          <SearchTextInput
            placeholder="Search"
            style={styles.searchInput}
            placeholderTextColor={COLORS.primary}
            placeholderText={"Search messages"}
          />
            <FlatList
            data={data}
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={getData}
              />
            }
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ marginBottom: 10 }}
            renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>{
               dispatch(setChatToId(item?.otherUser?._id))
              navigation.navigate(SCREENS.NavigationRoutes, {
                screen: SCREENS.InboxScreen,
              })
            }
            }
            style={[
              styles.notificationContainer,
              styles.notificationContainer1,
            ]}
          >
            <Image source={IMAGES.User1_Img} style={styles.chatUserImage} />
            <View style={styles.chatUserContainer}>
              <View
                style={[
                  styles.notificationHeader,
                  {
                    marginBottom: 2,
                  },
                ]}
              >
                <Text style={styles.notificationText}>
                  {item?.otherUser?.username} <SVG_IMAGES.CIcon3_SVG width={17} height={17} />
                </Text>
                <TextComponent
                  title={moment(item?.lastMsg?.createdAt).fromNow('')}
                  fontSize={11}
                  fontFamily={FONTS.Samsungsharpsans_Medium}
                  color={COLORS.primary}
                  marginBottom={4}
                />
              </View>
              {item?.unseen?
              <View style={styles.notificationHeader}>
                <TextComponent
                  title={item?.lastMsg?.message}
                  fontSize={12}
                  fontFamily={FONTS.Samsungsharpsans_Medium}
                  color={COLORS.primary}
                  style={{
                    flex: 1,
                  }}
                />
                <View style={styles.notificationbage}>
                  <TextComponent
                    title={item?.unseen}
                    fontSize={10}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                    color={COLORS.white}
                  />
                </View>
              </View>:null} 
            </View>
          </TouchableOpacity>
           )}
            key={item => item.id.toString()}
          />
        
        </View>
      </ScrollView>
    </View>
  );
};

export default ChatUserListScreen;
