import {
  View,
  KeyboardAvoidingView,
  Platform,
  Animated,
  FlatList,
  Dimensions,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { styles } from '../Styles';
import GradientBackground from '../../../components/GradientBackground';
import { commonStyle } from '../../../constants/style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TextComponent from '../../../components/TextComponent';
import { FONTS } from '../../../constants/fonts';
import { COLORS } from '../../../constants/colors';
import BtnPrimary from '../../../components/BtnPrimary';
import BackBtn from '../../../components/BackBtn';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../../constants/Screen';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback'; // Importing haptic feedback
import { normalize } from '../../../utils/Metrics';
import { dataPost } from '../../../utils/myAxios';

const tribes = [
  {
    id: '1',
    name: "The Antiflox app is built to empower the community by providing a space to connect, share information, and access recovery tools. As part of this, we'll ask you a few questions about your experience with fluoroquinolones. Your responses contribute to a growing, real-time database of statistics that all users can access.\n\nFor those interested in research, we also provide the option to download the anonymized statistics to support studies on FQAD. Rest assured, no personal information is ever shared.",
  },
];

const StepNineScreen = (props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;
  const [loader, setLoader] = useState(false)
  const { pData } = props.route.params

  const submitData = async () => {
    setLoader(true)
    let data2 = {...pData}
    const endPoint = 'antibiotic/create';
    const response = await dataPost(endPoint, data2);
    setLoader(false)
    if (response?.success) {
      // navigation.navigate(SCREENS.AuthRoutes, {
      //   screen: SCREENS.StepTen,
      // });
      navigation.navigate(SCREENS.TabRoutes, {
        screen: SCREENS.TabHome,
      });
    }
  }



  const renderItem = ({ item }) => {
    return (
      <View style={[commonStyle.item]}>
        <TextComponent
          color={COLORS.primary}
          fontSize={14}
          lineHeight={20}
          title={item.name}
          fontFamily={FONTS.Samsungsharpsans_Medium}
        />
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={commonStyle.safeArea}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <GradientBackground />
      <BackBtn navigation={() => navigation.goBack()} />
      <View
        style={{
          flexGrow: 1,
          justifyContent: 'center',
          paddingTop: insets.top,
        }}>
        <View
          style={[
            commonStyle.wrapper,
            {
              flex: 1,
            },
          ]}>
          <View style={styles.fullCenter}>
            <View
              style={{
                paddingHorizontal: 5,
              }}>
              <TextComponent
                color={COLORS.primary}
                fontSize={32}
                title={"You’re in the\nright place!"} // Added line break here
                marginBottom={15}
                fontFamily={FONTS.Samsungsharpsans_Bold}
              />
            </View>
            <View
              style={[
                styles.container,
                {
                  height: Dimensions.get('screen').height * 0.48,
                  flexDirection: 'row',
                  padding: 20,
                  marginBottom: 0,
                },
              ]}>
              <FlatList
                data={tribes}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                  { useNativeDriver: false },
                )}
              />
              {/* Custom Scroll Indicator */}
              <View
                style={{
                  width: 4,
                  height: '100%',
                  backgroundColor: '#EAEAEA',
                  marginLeft: 10,
                  borderRadius: 2,
                }}>
                <Animated.View
                  style={{
                    width: 4,
                    height: normalize(340), // Scroll thumb height
                    backgroundColor: COLORS.primary,
                    borderRadius: 2,
                    transform: [
                      {
                        translateY: scrollY.interpolate({
                          inputRange: [0, 400], // Adjust based on content height
                          outputRange: [0, 300], // Adjust based on container height
                          extrapolate: 'clamp',
                        }),
                      },
                    ],
                  }}
                />
              </View>
            </View>
          </View>

          {/* Button with Haptic Feedback */}
          <BtnPrimary
            onPress={() => {
              // Trigger haptic feedback
              ReactNativeHapticFeedback.trigger('impactMedium');
              submitData()
           
            }}
            loader={loader}
            marginBottom={10}
            title="Next"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default StepNineScreen;
