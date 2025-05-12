// StackNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ExploreScreen from "../screens/pages/explore/ExploreScreen";
import ExploreDetailsScreen from "../screens/pages/explore/ExploreDetailsScreen";
import AccountSettingsScreen from "../screens/pages/settings/AccountSettingsScreen";
import SecurityScreen from "../screens/pages/settings/SecurityScreen";
import LanguageScreen from "../screens/pages/settings/LanguageScreen";
import DeleteAccountScreen from "../screens/pages/settings/DeleteAccountScreen";
import CreatePostScreen from "../screens/pages/createpost/CreatePostScreen";
import ProfileDetailsScreen from "../screens/pages/community/ProfileDetailsScreen";
import ReourceDetailsScreen from "../screens/pages/explore/ReourceDetailsScreen";
import ChatScreen from "../screens/pages/community/ChatScreen";
import SubscribeScreen from "../screens/pages/subscribe/SubscribeScreen";
import ChooseTierScreen from "../screens/pages/subscribe/ChooseTierScreen";
import BlockedUserScreen from "../screens/pages/settings/BlockedUserScreen";
import ReportUserScreen from "../screens/pages/settings/ReportUserScreen";
import NotificationScreen from "../screens/pages/notifications/NotificationScreen";
import ChatUserListScreen from "../screens/pages/chat/ChatUserListScreen";
import ReportPostScreen from "../screens/pages/settings/ReportPostScreen";
import PostScreen from "../screens/pages/createpost/PostScreen";
import EditProfileDetailsScreen from "../screens/pages/community/EditProfileDetailsScreen";
import ProfilePictureScreen from "../screens/pages/community/ProfilePictureScreen";
import MusicScreen from "../screens/pages/music/MusicScreen";
const Stack = createStackNavigator();

const NavigationRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Explore"
      screenOptions={{
        headerMode: "screen",
      }}
    >
      <Stack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExploreDetails"
        component={ExploreDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccountSettings"
        component={AccountSettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Security"
        component={SecurityScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Language"
        component={LanguageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DeleteAccount"
        component={DeleteAccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileDetails"
        component={ProfileDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReourceDetails"
        component={ReourceDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Subscribe"
        component={SubscribeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChooseTier"
        component={ChooseTierScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BlockedUser"
        component={BlockedUserScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReportUser"
        component={ReportUserScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatUserList"
        component={ChatUserListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReportPost"
        component={ReportPostScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfileDetails"
        component={EditProfileDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfilePicture"
        component={ProfilePictureScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Music"
        component={MusicScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default NavigationRoutes;
