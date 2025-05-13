
import React from 'react';
import { Platform, PermissionsAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DeviceInfo from 'react-native-device-info';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { dataGet } from './myAxios';

// ///////////Remove Library IOS

export async function getDeviceInfo() {
  let uniqueId = DeviceInfo.getUniqueId();
  global.deviceUniqueId = uniqueId;
  global.deviceModal = DeviceInfo.getModel();
  global.deviceSystemName = await DeviceInfo.getDeviceName()
  console.log(global.deviceSystemName, global.deviceModal);
  

  let deviceId = DeviceInfo.getDeviceId();
  global.deviceSerialNum = await DeviceInfo.getSerialNumber();
  global.deviceUnique = await DeviceInfo.getUniqueId();

  console.log("DDDSER",global.deviceSerialNum );
  global.iccIdGet = await DeviceInfo.getSerialNumber();
  global.deviceId = deviceId;

  let model = DeviceInfo.getModel();
  global.deviceModel = model;
}

export function getStatusBarHeightFu() {
  let statusBar = getStatusBarHeight();
  global.getStatusBarHeight = statusBar;
  console.log("status bar height", global.getStatusBarHeight);
}

export async function sendInfoServer() {
  getDeviceInfo();
  if (Platform.OS === 'android') {
    global.platformDevice = 'android';
  } else {
    global.platformDevice = 'ios';
  }
  let fcmToken = await AsyncStorage.getItem('fcmToken')
  let iccId = 0;
  if (Platform.OS === 'android') {
    try {
 
    } catch (error) {
      console.log("Error",error);
    }
  
  }

    console.log("Run is dd");
  let body = new FormData();
  body.append('type', 'device_registration');
  body.append('user_id', global.user_id);
  body.append('device_name', global.deviceName);
  body.append('device_id', global.deviceUnique);
  body.append('fcm_token', fcmToken);
  body.append('model', global.deviceModel);
  body.append('platform', global.platformDevice);
  body.append('iccid', global.deviceSerialNum);
  body.append('user_role', global.role_idTobac);
  body.append('driver_id', global.login_driverId);
  dataGet({
    body
  })
    .then(res => {
    })
    .catch(err => { });
  }


export async function getIccIdSim() {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE
      );
      // const granted1 = await PermissionsAndroid.request(
      //   PermissionsAndroid.PERMISSIONS.READ_PHONE_NUMBERS
      // );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return RNSimData.getSimInfo();
      } else {
        return false
      }
    } catch (err) {
      console.warn(err);
    }
  } else {
    return false;
  }
}