import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {IMAGES, SVG_IMAGES} from '../constants/images';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {BlurView} from '@react-native-community/blur';
import TextComponent from './TextComponent';
import {FONTS} from '../constants/fonts';
import {SCREENS} from '../constants/Screen';
import {useNavigation} from '@react-navigation/native';

const ChatItem = ({image, title, subtitle, time, unread, online}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(SCREENS.NavigationRoutes, {
          screen: SCREENS.Chat,
        })
      }
      style={styles.container}>
      {/* Profile Image */}
      <View style={styles.avatarContainer}>
        <Image
          source={image} // Replace with your image URL
          style={styles.avatar}
        />
        <BlurView blurType="light" style={styles.blurBox} blurAmount={20} />
      </View>
      <View style={styles.containerFlex}>
        {/* Text Container */}
        <View style={styles.textContainer}>
          <View style={styles.nameStatusContainer}>
            <TextComponent
              fontFamily={FONTS.Samsungsharpsans_Medium}
              title={title}
              fontSize={15}
            />
            {online && <View style={styles.statusDot}></View>}
          </View>
          <TextComponent
            fontFamily={FONTS.Samsungsharpsans}
            title={subtitle}
            fontSize={12}
          />
        </View>
        {/* Time and Unread Indicator */}
        <View style={styles.rightContainer}>
          <View
            style={{
              top: -5,
            }}>
            <TextComponent
              fontFamily={FONTS.Samsungsharpsans}
              title={time}
              fontSize={11}
            />
          </View>
          {unread && (
            <View style={styles.unreadIndicator}>
              <SVG_IMAGES.OnlinedotIcon_SVG />
              <TextComponent
                fontFamily={FONTS.Samsungsharpsans}
                title={'Unread'}
                fontSize={11}
              />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: verticalScale(12),
  },
  avatarContainer: {
    width: 84,
    height: 84,
    borderRadius: 100,
    zIndex: 2,
    backgroundColor: 'rgba(255,255,255,0.19)',
    padding: 6,
  },
  blurBox: {
    position: 'absolute',
    width: 84,
    height: 84,
    borderRadius: 100,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    zIndex: -1,
    opacity: 0.7,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  textContainer: {
    flex: 1,
  },
  nameStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(2),
  },
  statusDot: {
    width: 8,
    height: 8,
    backgroundColor: '#00FF00',
    borderRadius: 5,
    marginLeft: 6,
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  unreadIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(3),
    position: 'absolute',
    bottom: -5,
  },
  containerFlex: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.07)',
    padding: moderateScale(14),
    borderRadius: 8,
    marginLeft: moderateScale(-30),
    paddingLeft: moderateScale(43),
  },
});

export default ChatItem;
