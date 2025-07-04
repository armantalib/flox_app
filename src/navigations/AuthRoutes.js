// StackNavigator.js
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChooseLanguageScreen from '../screens/authscreen/ChooseLanguage';
import LoginScreen from '../screens/authscreen/LoginScreen';
import ResetPasswordScreen from '../screens/authscreen/ResetPasswordScreen';
import CreateYourAccountScreen from '../screens/authscreen/CreateYourAccountScreen';
import VerifyYourEmailScreen from '../screens/authscreen/VerifyYourEmailScreen';
import CreateYourPasswordScreen from '../screens/authscreen/CreateYourPasswordScreen';
import StepOneScreen from '../screens/authscreen/steps/StepOneScreen';
import StepTwoScreen from '../screens/authscreen/steps/StepTwoScreen';
import StepThreeScreen from '../screens/authscreen/steps/StepThreeScreen';
import StepFourScreen from '../screens/authscreen/steps/StepFourScreen';
import StepFiveScreen from '../screens/authscreen/steps/StepFiveScreen';
import StepSixScreen from '../screens/authscreen/steps/StepSixScreen';
import StepSevenScreen from '../screens/authscreen/steps/StepSevenScreen';
import StepEightScreen from '../screens/authscreen/steps/StepEightScreen';
import StepNineScreen from '../screens/authscreen/steps/StepNineScreen';
import StepTenScreen from '../screens/authscreen/steps/StepTenScreen';
import StepYesNoFlaxed from '../screens/authscreen/steps/StepYesNoFlaxed';
import StepCountScreen from '../screens/authscreen/steps/StepCountScreen';
import { getItem } from '../utils/async_storage';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setUser } from '../storeTolkit/userSlice';
import { SCREENS } from '../constants/Screen';
import GradientBackground from '../components/GradientBackground';
import { ActivityIndicator, View } from 'react-native';
import { Loader } from '../components/General';
const Stack = createStackNavigator();

const AuthRoutes = () => {





  return (
    <Stack.Navigator
      initialRouteName="ChooseLanguage"
      screenOptions={{
        headerMode: 'screen',
      }}>
      <Stack.Screen
        name="ChooseLanguage"
        component={ChooseLanguageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateYourAccount"
        component={CreateYourAccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VerifyYourEmail"
        component={VerifyYourEmailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateYourPassword"
        component={CreateYourPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepOne"
        component={StepOneScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepTwo"
        component={StepTwoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepThree"
        component={StepThreeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepFour"
        component={StepFourScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepFive"
        component={StepFiveScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepSix"
        component={StepSixScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepSeven"
        component={StepSevenScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepEight"
        component={StepEightScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepNine"
        component={StepNineScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepTen"
        component={StepTenScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepYesNoFlaxed"
        component={StepYesNoFlaxed}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepCountScreen"
        component={StepCountScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
