import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import TextComponent from './TextComponent';
import {COLORS} from '../constants/colors';
import {FONTS} from '../constants/fonts';
import BtnPrimary from './BtnPrimary';
import {IMAGES} from '../constants/images';
import {verticalScale} from 'react-native-size-matters';

const imageUrls = [
  IMAGES.User1_Img,
  IMAGES.User2_Img,
  IMAGES.User3_Img,
  IMAGES.User4_Img,
  IMAGES.User5_Img,
  IMAGES.User6_Img,
];

const CardFullWidthComponent = ({title, desc, btnText, onPress, userImage}) => {
  return (
    <View style={styles.card}>
      {userImage && (
        <View style={styles.imgFlex}>
          {imageUrls.map((url, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image source={url} style={styles.image} />
            </View>
          ))}
        </View>
      )}
      <TextComponent
        color={COLORS.primary}
        fontSize={19}
        title={title}
        marginBottom={10}
        fontFamily={FONTS.Samsungsharpsans_Bold}
      />
      <TextComponent
        color={COLORS.primary}
        fontSize={13}
        title={desc}
        marginBottom={13}
        fontFamily={FONTS.Samsungsharpsans_Medium}
      />
      <BtnPrimary onPress={onPress} title={btnText} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: COLORS.white,
    shadowColor: '#fff0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    padding: 17,
  },
  //
  imgFlex: {
    flexDirection: 'row',
    marginBottom: verticalScale(15),
  },
  imageContainer: {
    borderRadius: 100,
    overflow: 'hidden',
    marginLeft: -17,
    left: 17,
  },
  image: {
    width: 52,
    height: 52,
    borderRadius: 100,
  },
});

export default CardFullWidthComponent;
