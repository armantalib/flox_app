import React from "react";
import { Dimensions, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GradientBackground from "../../components/GradientBackground";
import { tabStyle } from "../../constants/style";
import TabHeader from "../../components/TabHeader";
import { IMAGES } from "../../constants/images";
import TextComponent from "../../components/TextComponent";
import { FONTS } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";
import { verticalScale } from "react-native-size-matters";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SeeAllComponent from "../../components/SeeAllComponent";
import AnimatedExploreDotSlider from "../../components/AnimatedExploreDotSlider";
import ResourcesComponent from "../../components/ResourcesComponent";
import Slick from "react-native-slick";
import { SCREENS } from "../../constants/Screen";
import ResourcesCardComp from "../../components/ResourcesCardComp";

const TabExplorerScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View style={[tabStyle.safeArea]}>
      <GradientBackground />
      <TabHeader
        image={IMAGES.UserProfile_IMG}
        title={"Good morning"}
        name={"Ben0790"}
        chatcount={14}
        noticount={6}
      />
      <ScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          top: insets.top + insets.top + 20,
          paddingBottom:
            insets.bottom +
            insets.bottom +
            insets.bottom +
            insets.bottom +
            insets.bottom +
            insets.bottom +
            insets.bottom,
        }}
      >
        <View style={[tabStyle.wrapper]}>
          <View style={{ paddingTop: verticalScale(27) }} />
          <TextComponent
            color={COLORS.primary}
            fontSize={31}
            title={"Statistics"}
            marginBottom={15}
            fontFamily={FONTS.Samsungsharpsans_Bold}
            textAlign={"center"}
          />
          <View style={[tabStyle.tabContainer2]}>
            <AnimatedExploreDotSlider />
          </View>

          <View style={{ height: verticalScale(1) }} />
          <SeeAllComponent
            title="Resources"
            onPress={() =>
              navigation.navigate(SCREENS.NavigationRoutes, {
                screen: SCREENS.ReourceDetails,
              })
            }
          />
          <ResourcesCardComp />
          <View style={{ height: verticalScale(0) }} />
          <TextComponent
            color={COLORS.primary}
            fontSize={31}
            title={"Petitions"}
            marginBottom={15}
            fontFamily={FONTS.Samsungsharpsans_Bold}
            textAlign={"center"}
          />
          <ResourcesComponent
            btnText={"Sign petition"}
            userImage={IMAGES.change_organization}
            countProgress
            title={"Make FQs informed consent mandated Change.org"}
            count1={"578"}
            count2={"2000"}
          />

  
        </View>
      </ScrollView>
    </View>
  );
};

export default TabExplorerScreen;
