import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {FONTS} from '../constants/fonts';
import {COLORS} from '../constants/colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {SVG_IMAGES} from '../constants/images';
import TextComponent from './TextComponent';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../constants/Screen';

const ProfileHeader = ({image, style, titleTab, preview}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        paddingTop: 25,
      }}>
      <View style={[Styles.topHeaderConatiner, style]}>
        <View style={[Styles.topHeader]}>
          <View style={[Styles.userBox, Styles.userBox1]}>
            <Image
              source={image}
              resizeMode="contain"
              style={[Styles.userImg]}
            />
          </View>
          <TextComponent
            fontFamily={FONTS.Samsungsharpsans_Medium}
            title={titleTab}
            fontSize={19}
          />
          {preview ? null : (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(SCREENS.NavigationRoutes, {
                  screen: SCREENS.EditProfileDetails,
                })
              }>
              <SVG_IMAGES.PreviewIcon_SVG />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[
              Styles.backStylePos,
              {
                marginLeft: 'auto',
              },
            ]}>
            <SVG_IMAGES.BackCircle_SVG />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;

const Styles = StyleSheet.create({
  topHeaderConatiner: {
    paddingTop: 0,
    padding: moderateScale(15),
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(255,255,255,0.15)',

    paddingBottom: verticalScale(5),
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(12),
  },
  title: {
    fontSize: scale(13),
    color: COLORS.white,
    fontFamily: FONTS.Samsungsharpsans,
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
    marginRight: -4,
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
