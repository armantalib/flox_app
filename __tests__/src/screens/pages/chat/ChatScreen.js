import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
  TouchableWithoutFeedback,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import styles from './Styles';
import {IMAGES, SVG_IMAGES} from '../../../constants/images';
import TextComponent from '../../../components/TextComponent';
import {FONTS} from '../../../constants/fonts';
import ChatTextInput from '../../../components/ChatTextInput';
import LinearGradient from 'react-native-linear-gradient';
import {SCREENS} from '../../../constants/Screen';
const DATA = [
  {
    id: '1',
    title: 'Offensive',
  },
];

const ChatScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [showDropdown, setShowDropdown] = useState(false);
  // Handle outside click
  const handleOutsideClick = () => {
    if (showDropdown) {
      setShowDropdown(false);
    }
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.chatWrapper}>
        {/* Left Chat */}
        <View style={[styles.leftChat]}>
          <View style={[styles.rightChatBox, styles.leftChatBox]}>
            <TextComponent
              fontFamily={FONTS.Samsungsharpsans}
              title={
                'Lots of coffee and occasional dance breaks in the kitchen! How about you? :)'
              }
              fontSize={13}
              lineHeight={18}
              marginBottom={6}
            />
            <View style={{marginTop: -7}}>
              <TextComponent
                fontFamily={FONTS.Samsungsharpsans}
                title={'04:46 PM'}
                fontSize={11}
                textAlign={'right'}
              />
            </View>
          </View>
          <SVG_IMAGES.HeartNew_SVG style={{opacity: 0.5}} />
        </View>
        {/* Right Chat */}
        <View style={styles.rightChat}>
          <View style={[styles.rightChatBox, styles.rightChatBox1]}>
            <LinearGradient colors={['#FF8A9B', '#FF4D67']}>
              <View style={styles.switchBackground}>
                <TextComponent
                  fontFamily={FONTS.Samsungsharpsans}
                  title={
                    'Ah, a fellow caffeine enthusiast! As for me I rely of my problem solving skills and copious amounts of chocolate! Hahaha'
                  }
                  fontSize={13}
                  lineHeight={18}
                  marginBottom={6}
                />
                <TextComponent
                  fontFamily={FONTS.Samsungsharpsans}
                  title={'20:04 PM'}
                  fontSize={11}
                  textAlign={'right'}
                />
              </View>
            </LinearGradient>
          </View>
        </View>
        {/* Left Chat */}
        <View style={[styles.leftChat]}>
          <View style={[styles.rightChatBox, styles.leftChatBox]}>
            <TextComponent
              fontFamily={FONTS.Samsungsharpsans}
              title={
                'Lots of coffee and occasional dance breaks in the kitchen! How about you? :)'
              }
              fontSize={13}
              lineHeight={18}
              marginBottom={6}
            />
            <TextComponent
              fontFamily={FONTS.Samsungsharpsans}
              title={'04:46 PM'}
              fontSize={11}
              textAlign={'right'}
            />
          </View>
          <SVG_IMAGES.HeartNew1_SVG />
        </View>
        {/* Right Chat */}
        <View style={styles.rightChat}>
          <SVG_IMAGES.HeartNew1_SVG />
          <View style={[styles.rightChatBox, styles.rightChatBox1]}>
            <LinearGradient colors={['#FF8A9B', '#FF4D67']}>
              <View style={styles.switchBackground}>
                <TextComponent
                  fontFamily={FONTS.Samsungsharpsans}
                  title={
                    'Ah, a fellow caffeine enthusiast! As for me I rely of my problem solving skills and copious amounts of chocolate! Hahaha'
                  }
                  fontSize={13}
                  lineHeight={18}
                  marginBottom={6}
                />
                <TextComponent
                  fontFamily={FONTS.Samsungsharpsans}
                  title={'20:04 PM'}
                  fontSize={11}
                  textAlign={'right'}
                />
              </View>
            </LinearGradient>
          </View>
        </View>
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsideClick}>
      <ImageBackground
        source={IMAGES.Splash_Img}
        style={styles.imageBackground}>
        <View style={{paddingTop: insets.top - 15}}>
          <View style={styles.headerFlex}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={[styles.backStylePos]}>
              <SVG_IMAGES.BackBtn_SVG />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(SCREENS.NavigationRoutes, {
                  screen: SCREENS.EditProfileDetails,
                });
              }}
              style={{flexDirection: 'row', alignItems: 'center', gap: 13}}>
              <View style={styles.avatarContainer}>
                <Image
                  source={IMAGES.Userimg1_Img} // Replace with your image URL
                  style={styles.avatar}
                />
              </View>
              <TextComponent
                fontFamily={FONTS.Samsungsharpsans_Medium}
                title={'Ruth'}
                fontSize={19}
              />
              <SVG_IMAGES.Check_SVG />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setShowDropdown(!showDropdown)}
              style={{marginLeft: 'auto'}}>
              <SVG_IMAGES.MenuIcon_SVG />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapper}>
          <TextComponent
            fontFamily={FONTS.Samsungsharpsans_Bold}
            title={'Sunday'}
            fontSize={14}
            textAlign={'center'}
            marginBottom={15}
          />
          <FlatList
            nestedScrollEnabled={false}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
        {/* No Message */}
        {/* <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.noscrollViewContent}>
          <View style={styles.centerBox}>
            <TextComponent
              fontFamily={FONTS.Samsungsharpsans_Bold}
              title={'No messages here yet...'}
              fontSize={23}
              textAlign={'center'}
            />
            <SVG_IMAGES.HandIcon_SVG />
            <TextComponent
              fontFamily={FONTS.Samsungsharpsans}
              title={`Start a conversation with a\nmessage, GIF or voice note!`}
              lineHeight={18}
              fontSize={14}
              textAlign={'center'}
            />
          </View>
        </ScrollView> */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View style={styles.footBtns}>
            <ChatTextInput
              placeholderText={'Send a message'}
              rightIcon={
                <View style={styles.rightStyle}>
                  <TouchableOpacity>
                    <SVG_IMAGES.GifIcon_SVG />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <SVG_IMAGES.MicrophoneIcon_SVG />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <SVG_IMAGES.SendChatIcon_SVG />
                  </TouchableOpacity>
                </View>
              }
            />
          </View>
        </KeyboardAvoidingView>

        {/* dropdown UI */}
        {showDropdown && (
          <ImageBackground source={IMAGES.DropdownBG} style={styles.dropdownBG}>
            <TouchableOpacity
              style={[styles.dropdownFlex, {zIndex: showDropdown ? 10 : 0}]}
              onPress={() => {
                setShowDropdown(false);
              }}>
              <SVG_IMAGES.Block_SVG />
              <Text style={styles.dropdownItemText}>Block</Text>
            </TouchableOpacity>
            <View style={styles.dropdownItemLine} />
            <TouchableOpacity
              style={[styles.dropdownFlex, {zIndex: showDropdown ? 10 : 0}]}
              onPress={() => {
                setShowDropdown(false);
              }}>
              <SVG_IMAGES.Report_SVG />
              <Text style={styles.dropdownItemText}>Report</Text>
            </TouchableOpacity>
          </ImageBackground>
        )}
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default ChatScreen;
