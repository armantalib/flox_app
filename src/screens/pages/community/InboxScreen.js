import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import {
  View, Text, TouchableOpacity, FlatList, TextInput,
  KeyboardAvoidingView, Platform, StyleSheet, Image
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { dataGet_, socketUrl } from '../../../utils/myAxios';
import {
  receivedMessage,
  setMessagesData,
} from '../../../storeTolkit/ChatData';
import io from 'socket.io-client';
import { getItem } from '../../../utils/async_storage';
import LinearGradient from 'react-native-linear-gradient';
import { normalize } from '../../../utils/Metrics';
import moment from 'moment';
import CustomTextInputChat from '../../../components/CustomTextInputChat';
import { IMAGES, SVG_IMAGES } from '../../../constants/images';
import TextComponent from '../../../components/TextComponent';
import { FONTS } from '../../../constants/fonts';
import { COLORS } from '../../../constants/colors';
import stylesG from '../../../assets/css/stylesG';

const InboxScreen = (props) => {
  const flatListRef = useRef(null);
  const dispatch = useDispatch();
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');
  const { messagesData, chatToId } = useSelector(state => state.chat);
  const { community } = useSelector(state => state.community);
  const user = useSelector((state) => state.user.user);
  const [toUserData, setToUserData] = useState(null);

  useLayoutEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const endPoint = 'msg/messages/' + chatToId;
      const res = await dataGet_(endPoint, {});
      if (res.success) {
        dispatch(setMessagesData(res.messages));
        setToUserData(res?.user);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    const newSocket = io(socketUrl);
    newSocket.on('connect', async () => {
      const token = await getItem('token');
      newSocket.emit('authenticate', token);
    });

    newSocket.on('authenticated', userId => {
      setSocket(newSocket);
    });

    newSocket.on('send-message', message => {
      dispatch(receivedMessage({ message }));
    });

    return () => newSocket.disconnect();
  }, []);

  const sendMsg = () => {
    if (message.trim() !== '') {
      socket.emit('send-message', { recipientId: chatToId, messageText: message, name: user?.username });
      setMessage('');
    }
  };

  const renderItem = ({ item }) => {
    const isMyMessage = item?.sender === user?._id;
    const time = moment(item?.createdAt).format('hh:mm A');

    return (
      <View style={{ marginVertical: 10 }}>
        {isMyMessage ? (
          <View style={styles.rightChat}>
            <TouchableOpacity>
              <SVG_IMAGES.HeartNew1_SVG />
            </TouchableOpacity>
            <View style={[styles.rightChatBox]}>
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#3995FF", "#1F8AFF"]}>
                <View style={styles.switchBackground}>
                  <TextComponent
                    fontFamily={FONTS.Samsungsharpsans}
                    title={item?.message}
                    fontSize={13}
                    lineHeight={18}
                    marginBottom={6}
                  />
                  <TextComponent
                    fontFamily={FONTS.Samsungsharpsans}
                    title={time}
                    fontSize={11}
                    textAlign={"right"}
                  />
                </View>
              </LinearGradient>
            </View>
          </View>
        ) : (
          <View style={styles.leftChat}>
            <View style={[styles.leftChatBox]}>
              <TextComponent
                fontFamily={FONTS.Samsungsharpsans}
                title={item?.message}
                fontSize={13}
                lineHeight={18}
                color={COLORS.black}
                marginBottom={6}
              />
              <TextComponent
                fontFamily={FONTS.Samsungsharpsans}
                title={time}
                fontSize={11}
                textAlign={"right"}
                color={COLORS.black}
              />
            </View>
            <TouchableOpacity>
              <SVG_IMAGES.HeartNew_SVG />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      <View style={{
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, marginTop: normalize(50),
        borderBottomWidth: 2,
        borderBottomColor: "#EAEAEA",
        paddingBottom: normalize(12),
        marginBottom: normalize(0),
      }}>
        <View style={[stylesG.flexRow]}>
          <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ marginRight: 10 }}>
            <SVG_IMAGES.Arrow_SVG />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={toUserData?.image ? { uri: toUserData?.image } : IMAGES.User2_Img} style={{ width: 40, height: 40, borderRadius: 20 }} />
            <TextComponent
              color={COLORS.primary}
              fontSize={16}
              title={toUserData?.name || "John Doe"}
              fontFamily={FONTS.Samsungsharpsans_Bold}
              textAlign={"center"}
              marginLeft={10}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.dotsSTyle}>
          <SVG_IMAGES.DotsIcon_SVG />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
        <FlatList
          ref={flatListRef}
          data={messagesData}
          renderItem={renderItem}
          inverted
          keyExtractor={(item) => item._id}
          contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 15 }}
        />

        <View style={styles.chatFooter}>
          <CustomTextInputChat
            value={message}
            onChangeText={setMessage}
            rightIcon={() => (
              <TouchableOpacity activeOpacity={0.8} onPress={sendMsg}>
                <SVG_IMAGES.Send_SVG />
              </TouchableOpacity>
            )}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default InboxScreen;

const styles = StyleSheet.create({
  leftChat: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  leftChatBox: {
    backgroundColor: 'rgba(244, 186, 83, 0.3)',
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    padding: 12,
    marginRight: 8,
    maxWidth: '75%',
  },
  rightChat: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  rightChatBox: {
    borderRadius: 15,
    borderBottomRightRadius: 0,
    overflow: 'hidden',
    maxWidth: '75%',
    marginLeft: 8,
  },
  switchBackground: {
    padding: 12,
  },
  chatFooter: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: COLORS.white,
  },
});
