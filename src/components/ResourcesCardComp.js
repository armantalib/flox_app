import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";
import { IMAGES } from "../constants/images";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { FONTS } from "../constants/fonts";
import { COLORS } from "../constants/colors";
import { SCREENS } from "../constants/Screen";
import { useNavigation } from "@react-navigation/native";
import { normalize } from "../utils/Metrics";
import TextComponent from "./TextComponent";
import stylesG from "../assets/css/stylesG";
import { dataPost } from "../utils/myAxios";
import moment from "moment";
const posts = [
  {
    id: "1",
    name: "Karis Ryan",
    time: "20 hr ago",
    content:
      "It's been a few rough days, flaring up from activity and needing some extra rest, going to go back to...",
    likes: 6,
    comments: 16,
    profileImage: IMAGES.User1_Img,
  },
  {
    id: "2",
    name: "Danie Muse",
    time: "20 hr ago",
    content:
      "It's been a few rough days, flaring up from activity and needing some extra rest, going to go back to...",
    likes: 6,
    comments: 16,
    profileImage: IMAGES.User2_Img,
  },
];

export const ResourceCard = ({ item, width,onPress }) => {

  return (
    <View style={[styles.card, { width: width ? width : normalize(230), }]}>
      <Image
        source={item?.image?{uri:item?.image}: IMAGES.resource_image}
        style={{ width: normalize(150), height: normalize(30), resizeMode: 'stretch'}}
      />
      <TextComponent
        color={COLORS.primary}
        fontSize={normalize(10)}
        title={item.title}
        fontFamily={FONTS.Samsungsharpsans_Bold}
        textAlign={"left"}
        numberOfLines={3}
        marginTop={normalize(5)}
        width={'90%'}
      />
      <TextComponent
        color={COLORS.primary}
        fontSize={normalize(9)}
        title={moment(item.createdAt).format('MMM YYYY')}
        fontFamily={FONTS.Samsungsharpsans_Bold}
        textAlign={"left"}
        marginTop={normalize(7)}
        width={'90%'}
      />
      <Text style={[{ fontSize: normalize(9), fontFamily: FONTS.Samsungsharpsans_Medium, color: COLORS.black, marginTop: normalize(7) }]} numberOfLines={3}><Text style={{ fontFamily: FONTS.Samsungsharpsans_Bold }}>Summary: </Text> {item?.summary}</Text>

      <TouchableOpacity 
      onPress={()=>onPress(item)}
      style={[{ width: '100%', height: normalize(45), backgroundColor: '#3995FF', borderRadius: normalize(50), marginTop: normalize(15) }, stylesG.contentCenter]}>
        <TextComponent
          color={COLORS.white}
          fontSize={normalize(9)}
          title={"Read article"}
          fontFamily={FONTS.Samsungsharpsans_Bold}
          textAlign={"center"}
          width={'90%'}
        />
      </TouchableOpacity>
    </View>
  );
};

const ResourcesCardComp = (props) => {
  const navigation = useNavigation();
  const [resourcesData, setResourcesData] = useState([]);


  useEffect(() => {
    getResources(true);
  }, []);
  const getResources = useCallback(async (reset = false) => {
    const data = {
      startDate: '',
      endDate: '',
      sort: '',
      category: '',
      page: 1,
      limit: 10,
    };

    const endPoint = 'general/resources/get/1';
    const response = await dataPost(endPoint, data);

    if (response?.success) {
      const newData = response?.data || [];
      setResourcesData(newData);
    }
  }, []);
    const openURL = async (url) => {
    // Check if the link is supported
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Open the URL in the device's browser
      await Linking.openURL(url);
    } else {
      console.log(`Don't know how to open this URL: ${url}`);
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={resourcesData}
        renderItem={({ item }) => <ResourceCard item={item} 
        onPress={(val)=>openURL(val?.link)}
        {...props}
        />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={{ width: moderateScale(15) }} />
        )}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
      />
    </View>
  );
};
export default ResourcesCardComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: -20,
  },
  card: {
    width: normalize(230),
    borderRadius: 20,
    backgroundColor: COLORS.white,
    shadowColor: "#fff0",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    padding: 15,
    marginTop: 5,
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 100,
    marginRight: 10,
  },
  name: {
    fontSize: scale(14),
    fontFamily: FONTS.Samsungsharpsans_Bold,
    color: COLORS.primary,
    marginBottom: verticalScale(1),
  },
  time: {
    fontSize: scale(10.5),
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: COLORS.primary,
  },
  content: {
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: COLORS.primary,
    fontSize: scale(11.5),
    marginBottom: 10,
    lineHeight: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: COLORS.primary,
    fontSize: scale(11),
  },
  footerText1: {
    top: 2,
  },
});

