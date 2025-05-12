import React from 'react';
import {Dimensions, Platform, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Iconify} from 'react-native-iconify';
import {scale} from 'react-native-size-matters';
import {COLORS} from '../constants/colors';
import TabHomeScreen from '../screens/tabs/TabHomeScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="TabHome"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            backgroundColor: COLORS.white,
            height:
              Platform.OS === 'ios'
                ? Dimensions.get('window').height * 0.1
                : Dimensions.get('window').height * 0.1,
            borderTopWidth: 0,
            paddingBottom: Platform.OS === 'ios' ? 15 : 0,
            elevation: 0,
          },
        ],
      }}>
      <Tab.Screen
        name="TabHome"
        options={() => ({
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <View style={Styles.tabContainer}>
              <Iconify
                icon="bx:home"
                size={25}
                color={focused ? COLORS.primary : COLORS.tabInactive}
              />
            </View>
          ),
        })}
        component={TabHomeScreen}
      />
    </Tab.Navigator>
  );
};

export {BottomTabNavigator};

const Styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
