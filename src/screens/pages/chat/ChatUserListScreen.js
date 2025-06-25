import { View, ScrollView, Text, TouchableOpacity, Image, FlatList, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
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
import CustomAvatar from "../../../components/BottomSheets/CustomAvatar";
import { normalize } from "../../../utils/Metrics";
import { searchFunctionsChat } from "../../../utils/Helper";
import { getItem, storeData } from "../../../utils/async_storage";
const ChatUserListScreen = (props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);
  const [dataTemp, setDataTemp] = useState([]);
  const [infoModal2, setInfoModal2] = useState(false);
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      // setLoadingMore(false)
      getData();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );

  const onRefreshFun = () =>{
    setIsRefreshing(true);
getData()
  }

  const getData = async () => {
    const chat_users = await getItem('chat_users');
    if(chat_users) setData(chat_users)
    // await deleteValue('intro_screen')
    let data = {}
    const endPoint = 'msg/conversations';
    const res = await dataGet_(endPoint, data)
    
    setLoader(false)
    setIsRefreshing(false);
    if (res?.success == true) {
      setData(res?.conversations)
      storeData('chat_users',res?.conversations)
      setDataTemp(res?.conversations)
    } else {
      setInfoModal2(true)
    }
  }

  const applySearch = (query) => {
    console.log("Quer", query);

    if (!query) {
      let data1 = [...dataTemp]
      setData(data1)
      return
    }
    const result = searchFunctionsChat(query, data)
    setData(result)
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
            onChangeText={(val) => applySearch(val)}
            placeholderText={"Search messages"}
          />
          <FlatList
            data={data}
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={onRefreshFun}
              />
            }
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ marginBottom: 10 }}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
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
                <CustomAvatar
                  image={item?.otherUser?.image}
                  user={item?.otherUser}
                  width={normalize(53)}
                  height={normalize(53)}
                  fontSize={normalize(26)}
                  borderRadius={normalize(50)}
                  name={item?.otherUser?.username}
                />

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
                    {item?.unseen ?
                      <View style={styles.notificationbage}>
                        <TextComponent
                          title={item?.unseen}
                          fontSize={10}
                          fontFamily={FONTS.Samsungsharpsans_Bold}
                          color={COLORS.white}
                        />
                      </View>
                      : null}
                  </View>
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
