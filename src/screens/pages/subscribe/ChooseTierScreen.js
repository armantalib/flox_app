import { View, Text, TouchableOpacity } from "react-native";
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
import { SVG_IMAGES } from "../../../constants/images";

const ChooseTierScreen = () => {
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
        title="Subscribe"
        rightTitle="Restore"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.wrapper}>
        <TextComponent
          color={COLORS.primary}
          fontSize={19}
          title="Choose your support tier"
          fontFamily={FONTS.Samsungsharpsans_Bold}
          marginBottom={15}
        />

        <TouchableOpacity
          style={[
            styles.tierContainer,
            {
              backgroundColor: COLORS.black,
            },
          ]}
        >
          <View>
            <Text
              style={[
                styles.tierTitle,
                {
                  color: COLORS.white,
                },
              ]}
            >
              Member <SVG_IMAGES.CIcon_SVG width={25} height={25} marginBottom={2} />
            </Text>
            <TextComponent
              color={COLORS.white}
              fontSize={12}
              title="Unlock all features"
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />
          </View>
          <View>
            <TextComponent
              color={COLORS.white}
              fontSize={22}
              title="$9.99"
              fontFamily={FONTS.Samsungsharpsans_Bold}
              marginBottom={3}
            />
            <TextComponent
              color={COLORS.white}
              fontSize={11}
              title="per month"
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tierContainer,
            {
              backgroundColor: "#EAE9E8",
            },
          ]}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.tierTitle}>
              Supporter <SVG_IMAGES.CIcon2_SVG width={24} height={24} marginBottom={2} />
            </Text>
            <TextComponent
              color={COLORS.primary}
              fontSize={12}
              title="Unlock all features, generously support the creator"
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />
          </View>
          <View>
            <TextComponent
              color={COLORS.primary}
              fontSize={22}
              title="$19.99"
              fontFamily={FONTS.Samsungsharpsans_Bold}
              marginBottom={3}
            />
            <TextComponent
              color={COLORS.primary}
              fontSize={11}
              title="per month"
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tierContainer,
            {
              backgroundColor: "#EAE9E8",
            },
          ]}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.tierTitle}>
              Leader <SVG_IMAGES.CIcon3_SVG width={25} height={25} marginBottom={1} />
            </Text>
            <TextComponent
              color={COLORS.primary}
              fontSize={12}
              title="Unlock all features, generously support the creator, and share your ideas for new features or updates"
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />
          </View>
          <View>
            <TextComponent
              color={COLORS.primary}
              fontSize={22}
              title="$49.99"
              fontFamily={FONTS.Samsungsharpsans_Bold}
              marginBottom={3}
            />
            <TextComponent
              color={COLORS.primary}
              fontSize={11}
              title="per month"
              fontFamily={FONTS.Samsungsharpsans_Medium}
            />
          </View>
        </TouchableOpacity>

        <BtnPrimary
          title="Continue"
          style={{
            marginTop: "auto",
            marginBottom: 20, // Add some bottom margin for better spacing
          }}
          onPress={() =>
            navigation.navigate(SCREENS.NavigationRoutes, {
              screen: SCREENS.ExploreDetails,
            })
          }
        />
      </View>
    </View>
  );
};

export default ChooseTierScreen;