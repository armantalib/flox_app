import { View, ScrollView, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import { SVG_IMAGES } from "../../../constants/images";
import TextComponent from "../../../components/TextComponent";
import { COLORS } from "../../../constants/colors";
import { FONTS } from "../../../constants/fonts";
import SingleTextInput from "../../../components/SingleTextInput";
import GradientSwitch from "../../../components/GradientSwitch";
import BtnPrimary from "../../../components/BtnPrimary";
import { SCREENS } from "../../../constants/Screen";
import CustomHeader from "../../../components/CustomHeader";
import { useDispatch, useSelector } from "react-redux";
import { deleteValue } from "../../../utils/async_storage";
import { setStepsData } from "../../../storeTolkit/stepsSlice";
const AccountSettingsScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const user = useSelector((state) => state?.user?.user);
   const dispatch = useDispatch();

     const logoutAlert = () => {
        Alert.alert(
            'Log Out',
            'Are you sure to log out?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: 'Log out', onPress: () => logoutApp() }
            ]
        );
    }

    const logoutApp = async () => {
        deleteValue('token')
        deleteValue('user_data')
         dispatch(setStepsData(null))
      navigation.reset({
            index: 0,
            routes: [{ name: 'AuthRoutes' }],
        });
    }


  return (
    <View
      style={[
        styles.safeArea,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <CustomHeader title={"Account Settings"} opacity={0} />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={[styles.wrapper]}>
          <View style={styles.card}>
            <View style={styles.content}>
              <SingleTextInput
                labelText="Username:"
                placeholderText={"Select Username"}
                keyboardType={"email-address"}
                value={user?.username}
                disabled={true}
                rightIcon={() => <SVG_IMAGES.User_SVG />}
                inputBox={{
                  backgroundColor: "#f5f5f7",
                  borderColor: "#f5f5f7",
                }}
              />
              <SingleTextInput
                labelText="Email:"
                placeholderText={"Select Email"}
                keyboardType={"email-address"}
                disabled={true}
                value={user?.email}

                rightIcon={() => <SVG_IMAGES.Email_SVG />}
                inputBox={{
                  backgroundColor: "#f5f5f7",
                  borderColor: "#f5f5f7",
                }}
              />
              <TextComponent
                color={COLORS.primary}
                fontSize={15}
                title={"Notifications"}
                fontFamily={FONTS.Samsungsharpsans_Bold}
                marginBottom={15}
              />
              <View style={styles.listFlex}>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={14}
                  title={"Posts"}
                  fontFamily={FONTS.Samsungsharpsans_Medium}
                />
                <GradientSwitch />
              </View>
              <View style={styles.listFlex}>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={14}
                  title={"Statistics"}
                  fontFamily={FONTS.Samsungsharpsans_Medium}
                />
                <GradientSwitch />
              </View>
              <View style={styles.listFlex}>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={14}
                  title={"News"}
                  fontFamily={FONTS.Samsungsharpsans_Medium}
                />
                <GradientSwitch />
              </View>
              <View style={[styles.listFlex, styles.listFlexNone]}>
                <TextComponent
                  color={COLORS.primary}
                  fontSize={14}
                  title={"Messages"}
                  fontFamily={FONTS.Samsungsharpsans_Medium}
                />
                <GradientSwitch />
              </View>
              <BtnPrimary
                onPress={() =>
                logoutAlert()
                }
                marginBottom={15}
                title="Logout"
              />
              <BtnPrimary
                onPress={() =>
                  navigation.navigate(SCREENS.NavigationRoutes, {
                    screen: SCREENS.DeleteAccount,
                  })
                }
                style={{
                  backgroundColor: "#f5f5f7",
                }}
                btnText={{
                  color: COLORS.primary,
                }}
                title="Delete account"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AccountSettingsScreen;
