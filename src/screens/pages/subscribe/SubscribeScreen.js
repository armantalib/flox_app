import { View, ScrollView } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import TextComponent from "../../../components/TextComponent";
import { COLORS } from "../../../constants/colors";
import { FONTS } from "../../../constants/fonts";
import CustomHeader from "../../../components/CustomHeader";
import BtnPrimary from "../../../components/BtnPrimary";
import { SCREENS } from "../../../constants/Screen";

const SubscribeScreen = () => {
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
      <CustomHeader
        opacity={0}
        title={"Subscribe"}
        onPress={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.wrapper}>
          <TextComponent
            color={COLORS.primary}
            fontSize={19}
            title="Unlock Recovery Hub to aid your healing journey and support the creator."
            fontFamily={FONTS.Samsungsharpsans_Bold}
            marginBottom={15}
          />

          <TextComponent
            color={COLORS.primary}
            fontSize={13}
            title="I am a fellow floxie like you. At just 25 years old, my life was destroyed by a single pill of ciprofloxacin in 2020. I lost everything—my health, job, relationships, and family—just like many of you reading this."
            fontFamily={FONTS.Samsungsharpsans_Medium}
            marginBottom={12}
            lineHeight={16}
          />
          <TextComponent
            color={COLORS.primary}
            fontSize={13}
            title="After years of healing, I’ve reached 95% recovery—a goal I once thought impossible. While resting, I swore to do everything in my power to fight back against the corruption and injustice we have all faced."
            fontFamily={FONTS.Samsungsharpsans_Medium}
            marginBottom={12}
            lineHeight={16}
          />
          <TextComponent
            color={COLORS.primary}
            fontSize={13}
            title="The app itself and all the data is free to use—to raise awareness, gain recognition, find support, and, if desired, be used in lawsuits against Big Pharma."
            fontFamily={FONTS.Samsungsharpsans_Medium}
            marginBottom={12}
            lineHeight={16}
          />
          <TextComponent
            color={COLORS.primary}
            fontSize={13}
            title="Creating and maintaining this app has cost me the last of my life savings. Rather than asking for donations, I want to give back by sharing everything that helped me recover."
            fontFamily={FONTS.Samsungsharpsans_Medium}
            marginBottom={12}
            lineHeight={16}
          />
          <TextComponent
            color={COLORS.primary}
            fontSize={13}
            title="If you’d like to support this project and help fight Big Pharma, please consider subscribing to unlock the Recovery Hub. All funds go toward maintaining, updating, and expanding this app, including weekly additions to the Recovery Hub to further support your healing."
            fontFamily={FONTS.Samsungsharpsans_Medium}
            marginBottom={12}
            lineHeight={16}
          />

          <TextComponent
            color={COLORS.primary}
            fontSize={13}
            title="Thank you!"
            fontFamily={FONTS.Samsungsharpsans_Medium}
            marginBottom={20}
            lineHeight={16}
          />
        </View>
      </ScrollView>
      <View
        style={{ paddingHorizontal: 20, paddingBottom: 20, paddingTop: 10 }}
      >
        <BtnPrimary
          title="Continue"
          onPress={() =>
            navigation.navigate(SCREENS.NavigationRoutes, {
              screen: SCREENS.ChooseTier,
            })
          }
        />
      </View>
    </View>
  );
};

export default SubscribeScreen;
