import {
  View,
  KeyboardAvoidingView,
  Image,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import GradientBackground from '../../components/GradientBackground';
import {commonStyle} from '../../constants/style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TextComponent from '../../components/TextComponent';
import {FONTS} from '../../constants/fonts';
import {COLORS} from '../../constants/colors';
import {IMAGES, SVG_IMAGES} from '../../constants/images';
import BtnPrimary from '../../components/BtnPrimary';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../constants/Screen';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const ChooseLanguageScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  // Haptic feedback options
  const hapticOptions = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const handleStartRecoveryPress = () => {
    // Trigger haptic feedback
    ReactNativeHapticFeedback.trigger('impactMedium', hapticOptions);

    // Navigate to the CreateYourAccount screen
    navigation.navigate(SCREENS.AuthRoutes, {
      screen: SCREENS.CreateYourAccount,
    });
  };

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
        <TouchableOpacity style={styles.languageStyle}>
          <SVG_IMAGES.Us_SVG width={20} height={20} style={{ marginTop: 1 }} />
          <TextComponent
            color={COLORS.primary}
            textAlign="center"
            fontSize={15}
            title="EN"
            fontFamily={FONTS.Samsungsharpsans_Bold}
          />
        </TouchableOpacity>

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
          fontSize={16}
          title="Let’s dive into your account!"
          marginBottom={10}
          fontFamily={FONTS.Samsungsharpsans_Medium}
        />
        <BtnPrimary
          onPress={handleStartRecoveryPress}
          marginBottom={10}
          title="Start my recovery"
        />
        <TextComponent
          color={COLORS.primary}
          textAlign="center"
          fontSize={17}
          title={
            <Text style={[commonStyle.h3, commonStyle.textCenter]}>
              {' '}
              <Text
                onPress={() =>
                  navigation.navigate(SCREENS.AuthRoutes, {
                    screen: SCREENS.Login,
                  })
                }
                style={[commonStyle.h3]}>
                I have an account?{' '}
                <Text style={[commonStyle.bold]}>Login</Text>
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