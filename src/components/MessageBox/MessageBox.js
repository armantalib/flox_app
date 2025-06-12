/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useSelector } from 'react-redux';
// import ImageFast from '../ImageFast';
import moment from 'moment';
import { normalize } from '../../utils/Metrics';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const MessageBox = ({ id, msg, item, otherUserImage,onPressImage }) => {
  const user = useSelector(state => state.user.user);

  return (
    <View style={styles.container}>
      {id !== user._id ? (
        <View style={{ marginBottom: 10 }}>
          <View style={styles.leftContainer}>
            <Image source={otherUserImage} style={styles.avatar} />
            {item.type == 'image' ? (
              <TouchableOpacity 
              onPress={onPressImage}
              style={[styles.leftmsg, { padding: 0 }]}>
                <Image
                  source={{uri:item?.file_url}}
                  style={{ width: normalize(130), height: normalize(100) }}
                />
              </TouchableOpacity>
            ) : (
              <Text style={styles.leftmsg}>{msg}</Text>
            )}
          </View>
          <Text style={[styles.timeText, { marginLeft: '17%' }]}>
            {moment(item.createdAt).fromNow('')}
          </Text>
        </View>
      ) : (
        <View>
          <View style={styles.rightContainer}>
            {item.type == 'image' ? (
              <TouchableOpacity 
              onPress={onPressImage}
              style={[styles.rightmsg, { padding: 0 }]}>
                {item?.loading && item?.loading == true ? (
                  <View
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(97, 97, 97, 0.59)',
                      borderRadius: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      zIndex: 10000,
                      paddingRight: 120,
                    }}>
                    <ActivityIndicator color={COLORS.white} />
                  </View>
                ) : null}
               <Image
                  source={{uri:item?.file_url}}
                  style={{ width: normalize(130), height: normalize(100) }}
                />
              </TouchableOpacity>
            ) : (
              <Text style={styles.rightmsg}>{msg}</Text>
            )}
            <Text style={styles.timeText}>
              {moment(item.createdAt).fromNow('')}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  leftContainer: {
    marginBottom: 7,
    maxWidth: '80%',
    marginLeft: '4%',
    flexDirection: 'row',
  },
  avatar: {
    width: 40,
    borderRadius: 32,
    height: 40,
    borderColor: COLORS.blackColor,
    marginRight: 10,
    alignSelf:'flex-end'
  },
  leftmsg: {
    backgroundColor: 'rgba(244, 186, 83, 0.3)',
    padding: 16,
    color: COLORS.blackColor,
    fontSize: 14,
    overflow: 'hidden',
    fontFamily: FONTS.Samsungsharpsans_Medium,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
  },
  rightContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 10,
    maxWidth: '80%',
    marginLeft: '20%',
    marginBottom: 10,
  },

  timeText: {
    color: '#AAA6B9',
    fontFamily: FONTS.Samsungsharpsans_Medium,
    fontSize: 12,
    // marginLeft: '17%',
  },
  rightmsg: {
    backgroundColor: 'rgba(73, 73, 232, 0.2)',
    color: COLORS.blackColor,
    padding: normalize(15),
    overflow: 'hidden',
    fontSize: 14,
    fontFamily: FONTS.Samsungsharpsans_Medium,
    marginTop: 5,
    borderRadius: 8,
    borderBottomRightRadius: 0,
  },
  storyImage: {
    height: 100,
    width: 200,
  },
});

export default MessageBox;
