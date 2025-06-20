import { View, ScrollView, Image, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BackBtn from "../../../components/BackBtn";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import { IMAGES, SVG_IMAGES } from "../../../constants/images";
import { verticalScale } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
import RenderHtml from 'react-native-render-html';
import moment from "moment";
import { normalize } from "../../../utils/Metrics";
import stylesG from "../../../assets/css/stylesG";
import Icons from "../../../utils/Icons";
import { SCREENS } from "../../../constants/Screen";
import { setMusicDetail } from "../../../storeTolkit/hubSlice";
const data = [
  {
    id: "1",
    title: "Grounding yourself\ninto earth",

    image: IMAGES.S_Img1, // Replace with actual image path
    date: "Feb 10, 2025",
    duration: "5 min read",
  },
];

const ExploreDetailsScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { hubPostDetail } = useSelector((state) => state?.hub);
  const { width } = useWindowDimensions();
  const source = {
    html: hubPostDetail?.desc
  };

  return (
    <View style={styles.safeArea}>
      <BackBtn
        customStyle={{
          paddingTop: insets.top,
          left: 0,
        }}
        navigation={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={[]}>

          <View style={styles.card}>
            <TouchableOpacity style={styles.dotsSTyle}>
              <SVG_IMAGES.DotsIcon_SVG />
            </TouchableOpacity>
            <View style={styles.content}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: hubPostDetail?.image }} style={styles.image} />
                {moment().format('DD-MM-YYYY') == moment(hubPostDetail?.createdAt).format('DD-MM-YYYY') ?
                  <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>New</Text>
                  </View>
                  : null}
                <View style={styles.posNew}>
                  <Text style={styles.duration}>{hubPostDetail.min_read}</Text>
                  <Text style={styles.title} numberOfLines={2}>{hubPostDetail.title}</Text>
                </View>
                 {hubPostDetail.audio? 
                <TouchableOpacity
                  onPress={() => {
                    dispatch(setMusicDetail(hubPostDetail))
                    navigation.navigate(SCREENS.NavigationRoutes, {
                      screen: SCREENS.Music,
                    })
                  }}
                  style={[styles.badgeContainer, { bottom: normalize(100), borderRadius: normalize(50), backgroundColor: 'transparent' }, stylesG.contentCenter]}>
                  <Icons
                    name={'play'}
                    family={'AntDesign'}
                    size={35}
                    color={'#FFFFFF'}
                  />
                </TouchableOpacity>:null}

                <View style={styles.overlay} />
              </View>
              <View style={styles.authorContainer}>
                <View style={styles.authorImageContainer}>
                  <Image
                    source={IMAGES.User1_Img}
                    style={styles.authorImage}
                  />
                </View>
                <View style={styles.authorInfoContainer}>
                  <Text style={styles.authorName}>Admin</Text>
                  <Text style={styles.authorRole}>{moment(hubPostDetail?.createdAt).format('DD MMM YYYY')}</Text>
                </View>
                <TouchableOpacity style={styles.authorButton}>
                  <SVG_IMAGES.HeartGrey_SVG width={26} height={26} marginRight={3} />
                </TouchableOpacity>
              </View>
              <View style={styles.descriptionContainer}>
                <RenderHtml
                  contentWidth={width}
                  source={source}
                />
              </View>
              <View
                style={[
                  styles.authorContainer,
                  {
                    paddingVertical: verticalScale(20),
                  },
                ]}
              >
                <Text style={styles.buttonText}>
                  Thanks for reading, have a great day!
                </Text>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>
    </View>
  );
};

export default ExploreDetailsScreen;
