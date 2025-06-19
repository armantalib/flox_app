import { View, ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import TextComponent from "../../../components/TextComponent";
import { COLORS } from "../../../constants/colors";
import { FONTS } from "../../../constants/fonts";
import CustomHeader from "../../../components/CustomHeader";
import SearchTextInput from "../../../components/SearchTextInput";
import { SVG_IMAGES } from "../../../constants/images";
import { dataGet_, dataPut } from "../../../utils/myAxios";
import moment from "moment";
import { searchFunctionsNotification } from "../../../utils/Helper";
import { Loader, NotFound } from "../../../components/General";
const NotificationScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);
  const [dataTemp, setDataTemp] = useState([]);


  useEffect(() => {
    getData();
  }, [])


  const getData = async () => {
    setLoader(true)
    const endPoint = 'notification/all';
    const response = await dataGet_(endPoint, {});

    setLoader(false)
    if (response.success) {
      setData(response?.notifications)
      setDataTemp(response?.notifications)
    } else {
      setData([])
    }
    const response2 = await dataPut('notification/seen', {});
  }

  const onChangeSearchFun = (val) =>{ 
    if(!val){
      setData(dataTemp)
      return
    }
    const searchVa = searchFunctionsNotification(val,data)
    setData(searchVa);
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
      <CustomHeader title={"Notifications"} opacity={0} />
      <Loader loader={loader} />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.wrapper}>
          <SearchTextInput
            placeholder="Search"
            style={styles.searchInput}
            onChangeText={onChangeSearchFun}
            placeholderTextColor={COLORS.primary}
            placeholderText={"Search notifications"}
          />
          {data.map((item, index) => (
            <View style={styles.notificationContainer}>
              <View
                style={[
                  styles.notificationHeader,
                  {
                    marginBottom: 6,
                  },
                ]}
              >
                <Text style={styles.notificationText}>
                  {item?.user?.username} <SVG_IMAGES.CIcon3_SVG width={17} height={17} />
                </Text>
                <TextComponent
                  title={moment(item.createdAt).fromNow()}
                  fontSize={11}
                  fontFamily={FONTS.Samsungsharpsans_Medium}
                  color={COLORS.primary}
                />
              </View>
              <View style={[styles.notificationHeader,]}>
                <View style={{ width: '85%' }}>
                  <TextComponent
                    title={item?.description}
                    fontSize={12}
                    fontFamily={FONTS.Samsungsharpsans_Medium}
                    color={COLORS.primary}
                  />
                </View>
                {moment().format('DD-MM-YYYY') == moment(item.createdAt).format('DD-MM-YYYY')?
                <View style={styles.notificationbage}>
                  <TextComponent
                    title={"New"}
                    fontSize={10}
                    fontFamily={FONTS.Samsungsharpsans_Bold}
                    color={COLORS.white}
                  />
                </View>:null}
              </View>
            </View>
          ))}

          {data.length === 0 && !loader?<NotFound/>:null}

        </View>
      </ScrollView>
    </View>
  );
};

export default NotificationScreen;
