import {View, KeyboardAvoidingView, Image, Text} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import GradientBackground from '../../components/GradientBackground';
import {commonStyle} from '../../constants/style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TextComponent from '../../components/TextComponent';
import {FONTS} from '../../constants/fonts';
import {COLORS} from '../../constants/colors';
import {IMAGES} from '../../constants/images';
import BtnPrimary from '../../components/BtnPrimary';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../constants/Screen';
const ChooseLanguageScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={commonStyle.safeArea}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <GradientBackground />
      <View
        style={[
          commonStyle.wrapper,
          commonStyle.height,
          commonStyle.flexColumnWrapper,
          {
            paddingTop: insets.top,
          },
        ]}>
        <TextComponent
          color={COLORS.primary}
          textAlign="center"
          fontSize={35}
          title="Antiflox"
          marginBottom={15}
          fontFamily={FONTS.Samsungsharpsans_Bold}
        />
        <TextComponent
          color={COLORS.primary}
          textAlign="center"
          fontSize={17}
          title=" The worlds most comprehensive global FQAD platform & community"
          marginBottom={15}
          lineHeight={21}
          fontFamily={FONTS.Samsungsharpsans_Medium}
        />
        <Image source={IMAGES.Map_IMG} style={styles.mapStyle} />
        <TextComponent
          color={COLORS.primary}
          textAlign="center"
          fontSize={17}
          title="Let’s dive into your account!"
          marginBottom={10}
          fontFamily={FONTS.Samsungsharpsans_Medium}
        />
        <BtnPrimary marginBottom={10} title="Start my Recovery" />
        <TextComponent
          color={COLORS.primary}
          textAlign="center"
          fontSize={17}
          title={
            <Text style={[commonStyle.h3, commonStyle.textCenter]}>
              I have an account?{' '}
              <Text
                onPress={() =>
                  navigation.navigate(SCREENS.AuthRoutes, {
                    screen: SCREENS.Login,
                  })
                }
                style={[commonStyle.bold]}>
                Login
              </Text>
            </Text>
          }
          marginBottom={10}
          fontFamily={FONTS.Samsungsharpsans_Medium}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChooseLanguageScreen;
