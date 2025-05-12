import {
  View,
  KeyboardAvoidingView,
  Image,
  Text,
  ScrollView,
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
import CustomTextInput from '../../components/CustomTextInput';
const LoginScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <KeyboardAvoidingView
      style={commonStyle.safeArea}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <GradientBackground />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollViewContent}>
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
            fontSize={35}
            title="Sign in!"
            marginBottom={10}
            fontFamily={FONTS.Samsungsharpsans_Bold}
          />
          <TextComponent
            color={COLORS.primary}
            fontSize={14}
            marginBottom={15}
            title="Welcome back! Please enter your details."
            fontFamily={FONTS.Samsungsharpsans_Medium}
          />
          <CustomTextInput
            placeholderText={'Email'}
            keyboardType={'email-address'}
            rightIcon={() => <SVG_IMAGES.Email_SVG />}
          />

          <BtnPrimary marginBottom={10} title="Next" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
