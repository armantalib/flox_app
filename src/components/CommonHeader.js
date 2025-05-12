import React from 'react';
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FONTS} from '../constants/fonts';
import {COLORS} from '../constants/colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {SVG_IMAGES} from '../constants/images';
import LinearGradient from 'react-native-linear-gradient';
import TextComponent from './TextComponent';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../constants/Screen';

const CommonHeader = ({
  title,
  username,
  image,
  count,
  isUserDetails,
  isLogoExplore,
  style,
  titleTab,
}) => {
  const insets = useSafeAreaInsets();
  // Calculate status bar height
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: insets.top - 15,
        minHeight: 100,
        paddingBottom:
          Platform.OS === 'ios' ? verticalScale(22) : verticalScale(0),
      }}>
      <View style={[Styles.topHeaderConatiner, style]}>
        <View style={[Styles.topHeader]}>
          {isUserDetails && (
            <>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}
                onPress={() =>
                  navigation.navigate(SCREENS.NavigationRoutes, {
                    screen: SCREENS.EditProfileDetails,
                  })
                }>
                <View style={Styles.userBox}>
                  <Image source={image} style={Styles.userImg} />
                </View>
                <View style={Styles.titleContainer}>
                  <Text style={Styles.title}>{title}</Text>
                  <Text style={Styles.subtitle}>{username}</Text>
                </View>
              </TouchableOpacity>
            </>
          )}
          {isLogoExplore && (
            <>
              <View style={[Styles.userBox, Styles.userBox1]}>
                <Image
                  source={image}
                  resizeMode="contain"
                  style={[
                    Styles.userImg,
                    {
                      left: -4,
                    },
                  ]}
                />
              </View>

              <TextComponent
                fontFamily={FONTS.Samsungsharpsans_Medium}
                title={titleTab}
                fontSize={19}
              />
            </>
          )}
          <TouchableOpacity
            activeOpacity={0.6}
            style={[Styles.notification]}
            onPress={() => {
              navigation.navigate(SCREENS.NavigationRoutes, {
                screen: SCREENS.GiveAway,
              });
            }}>
            <SVG_IMAGES.Price_SVG height={44} width={44} />
            <LinearGradient
              colors={['#FF4D67', '#FF8A9B']} // White to Black
              start={{x: 0, y: 1}} // Bottom
              end={{x: 1, y: 0}} // Top
              style={Styles.absoluteFillObject} // Makes the gradient cover the entire image
            >
              <Text style={Styles.count}>{count}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CommonHeader;

const Styles = StyleSheet.create({
  topHeaderConatiner: {
    padding: moderateScale(15),
    paddingBottom:
      Platform.OS === 'android' ? verticalScale(5) : verticalScale(0),
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(6),
    marginBottom: Platform.OS === 'android' ? 0 : -verticalScale(10),
  },
  title: {
    fontSize: scale(13),
    color: COLORS.white,
    fontFamily: FONTS.Samsungsharpsans,
    marginBottom: -2,
  },
  subtitle: {
    fontSize: scale(23),
    color: COLORS.white,
    fontFamily: FONTS.Samsungsharpsans_Medium,
  },
  userBox: {
    width: 74,
    height: 74,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  userBox1: {
    borderWidth: 5,
    borderColor: 'transparent',
  },
  userImg: {
    width: '100%',
    height: '100%',
  },
  notification: {
    marginLeft: 'auto',
  },
  absoluteFillObject: {
    position: 'absolute',
    left: -8,
    top: 25,
    bottom: 0,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  count: {
    color: COLORS.white,
    fontSize: scale(10),
    fontFamily: FONTS.Samsungsharpsans_Bold,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(15),
  },
  titleContainer: {},
});
