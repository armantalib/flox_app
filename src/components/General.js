import React, { useEffect } from 'react';
import { Text, TouchableOpacity, Image, View, TextInput, StatusBar, ActivityIndicator, Platform, TouchableWithoutFeedback } from 'react-native';
import Toast from 'react-native-simple-toast';
import Modal from 'react-native-modal';
import stylesG from '../assets/css/stylesG';
import { COLORS } from '../constants/colors';
import { IMAGES } from '../constants/images';
import { normalize } from '../utils/Metrics';

export const showToast = (message) => {
    Toast.show(message, Toast.LONG);
  }

  export const Loader = (props) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        deviceWidth={1}
        visible={props.loader}>
        <TouchableWithoutFeedback
          onPress={props.loaderClose}
          accessible={false}
          style={{ width: '100%', height: '100%', }}
        >
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.1)', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: 150, height: 90, backgroundColor: COLORS.white, justifyContent: 'center', alignItems: 'center', borderRadius: 12 }}>
              <ActivityIndicator size='large' color={COLORS.primary} />
              <Text style={[stylesG.fontBold]}>Processing...</Text>
            </View>
            {/* <View style={{ width: 300, height: 300 }}>
              <LottieView source={require('../json/LoaderJsonM.json')} autoPlay loop />
            </View> */}


          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* } */}
    </View>
  );
}

export const NotFound = (props) => {
  return (
    <View style={{ width: '100%', height:props.height?props.height:normalize(300), justifyContent: 'center', alignItems: 'center' }}>

        <Image
          source={IMAGES.no_data_found}
          style={{ width: normalize(250), height: normalize(250), resizeMode: 'contain' }}
        />
    </View>
  );
}