import React from 'react';
import { Dimensions, StyleSheet, View, TouchableOpacity, Text, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../constants/colors';
import { SVG_IMAGES } from '../constants/images';
import TabHomeScreen from '../screens/tabs/TabHomeScreen';
import TabHubScreen from '../screens/tabs/TabHubScreen';
import TabCommunityScreen from '../screens/tabs/TabCommunityScreen';
import TabExplorerScreen from '../screens/tabs/TabExplorerScreen';
import TabProfileScreen from '../screens/tabs/TabProfileScreen';
import { moderateScale, scale } from 'react-native-size-matters';
import { BlurView } from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const { height: screenHeight } = Dimensions.get('window');
const svgSize = scale(22);
const navHeight = screenHeight * 0.085;

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const unreadMessages = 3; // Example: Adjust the count based on your app logic

  // Haptic feedback options
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const handleTabPress = (route, isFocused) => {
    // Trigger haptic feedback
    ReactNativeHapticFeedback.trigger('impactLight', options); // Light haptic feedback

    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  return (
    <View style={styles.navBarContainer}>
      <BlurView style={styles.blurBackground} blurType="dark" blurAmount={10} />
      <View style={styles.iconsWrapper}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const IconComponent = isFocused
            ? options.tabBarActiveIcon
            : options.tabBarIcon;

          return (
            <TouchableOpacity
              key={route.key}
              style={styles.tabContainer}
              onPress={() => handleTabPress(route, isFocused)}
            >
              {IconComponent && <IconComponent width={svgSize} height={svgSize} />}
              {route.name === 'TabCommunity' && unreadMessages > 0 && (
                <LinearGradient
                  colors={['#FF8A9B', '#ff365e']} // Gradient colors
                  locations={[0.2, 1]} // Transition points
                  start={{ x: 0, y: 0 }} // Start at the top
                  end={{ x: 1, y: 1 }}   // End at the bottom
                  style={styles.messageCountContainer}
                >
                  <Text style={styles.messageCountText}>{unreadMessages}</Text>
                </LinearGradient>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case 'TabHome':
              return focused ? (
                <SVG_IMAGES.HomeActive_SVG width={svgSize} height={svgSize} />
              ) : (
                <SVG_IMAGES.HomeInActive_SVG width={svgSize} height={svgSize} />
              );
            case 'TabHub':
              return focused ? (
                <SVG_IMAGES.Wellness_New_SVG width={scale(25)} height={scale(25)} />
              ) : (
                <SVG_IMAGES.Wellness_New_SVG width={scale(25)} height={scale(25)} />
              );
            case 'TabCommunity':
              return focused ? (
                <SVG_IMAGES.Community_New_SVG width={scale(23)} height={scale(23)} />
              ) : (
                <SVG_IMAGES.Community_New_SVG width={scale(23)} height={scale(23)} />
              );
            case 'TabExplorer':
              return focused ? (
                <SVG_IMAGES.Explore_New_SVG width={svgSize} height={svgSize} />
              ) : (
                <SVG_IMAGES.Explore_New_SVG width={svgSize} height={svgSize} />
              );
            case 'TabProfile':
              return focused ? (
                <SVG_IMAGES.Profile_New_SVG width={scale(21.5)} height={scale(21.5)} />
              ) : (
                <SVG_IMAGES.Profile_New_SVG width={scale(21.5)} height={scale(21.5)} />
              );
            default:
              return null;
          }
        },
        tabBarActiveIcon: ({ focused }) => {
          switch (route.name) {
            case 'TabHome':
              return <SVG_IMAGES.HomeActive_SVG width={svgSize} height={svgSize} />;
            case 'TabHub':
              return <SVG_IMAGES.Wellness_Fill_New_SVG  width={scale(25)} height={scale(25)} />;
            case 'TabCommunity':
              return <SVG_IMAGES.Community_Fill_New_SVG width={scale(23)} height={scale(23)} />;
            case 'TabExplorer':
              return <SVG_IMAGES.ExplorerActive_SVG width={svgSize} height={svgSize} />;
            case 'TabProfile':
              return <SVG_IMAGES.Profile_Fill_New_SVG width={svgSize} height={svgSize} />;
            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen name="TabHome" component={TabHomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="TabHub" component={TabHubScreen} options={{ headerShown: false }} />
      <Tab.Screen name="TabCommunity" component={TabCommunityScreen} options={{ headerShown: false }} />
      <Tab.Screen name="TabExplorer" component={TabExplorerScreen} options={{ headerShown: false }} />
      <Tab.Screen name="TabProfile" component={TabProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  navBarContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' && screenHeight <= 668 ? 0 : 20,
    left: moderateScale(15),
    right: moderateScale(15),
    height: navHeight,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderRadius: 50,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center', // Center the icons wrapper
    alignItems: 'center',
    elevation: 5,
    zIndex: 99999999,
  },
  blurBackground: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 0,
    backgroundColor: "#2c2c2cb5",
  },
  iconsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the icons
    alignItems: 'center',
    width: '90%', // Reduce the width to bring icons closer
  },
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: moderateScale(4), // Add horizontal margin to control spacing
  },
  messageCountContainer: {
    position: 'absolute',
    right: 6,
    top: -10,
    width: 0,
    height: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  messageCountText: {
    fontSize: scale(10),
    fontFamily: 'Samsungsharpsans_Bold', // Ensure this font is loaded
    color: COLORS.white,
  },
});

export { BottomTabNavigator };