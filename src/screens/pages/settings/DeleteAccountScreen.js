import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import { SVG_IMAGES } from "../../../constants/images";
import TextComponent from "../../../components/TextComponent";
import { COLORS } from "../../../constants/colors";
import { FONTS } from "../../../constants/fonts";
import BtnPrimary from "../../../components/BtnPrimary";
import { SCREENS } from "../../../constants/Screen";
import CustomHeader from "../../../components/CustomHeader";
const DeleteAccountScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
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

      <View
        style={[
          styles.wrapper,
          {
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          },
        ]}
      >
        <View style={{ marginTop: "auto" }} />
        <TextComponent
          color={COLORS.primary}
          fontSize={31}
          title={"Are you sure you would like to permanently your account?"}
          fontFamily={FONTS.Samsungsharpsans_Bold}
          marginBottom={15}
        />
        <TextComponent
          color={COLORS.primary}
          fontSize={15}
          title={
            "You will not be able to remove this action or recover your account and will be required to register a new account. None of your data will be saved. "
          }
          fontFamily={FONTS.Samsungsharpsans_Medium}
          marginBottom={15}
        />
        <BtnPrimary
          onPress={() =>
            navigation.navigate(SCREENS.TabRoutes, {
              screen: SCREENS.TabProfile,
            })
          }
          marginBottom={15}
          title="Go back"
          style={{
            marginTop: "auto",
          }}
        />
        <BtnPrimary
          style={{
            backgroundColor: "#f5f5f7",
          }}
          btnText={{
            color: COLORS.primary,
          }}
          title="Proceed"
        />
      </View>
    </View>
  );
};

export default DeleteAccountScreen;
