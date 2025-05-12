import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Animated, Dimensions} from 'react-native';
import {FONTS} from '../constants/fonts';
import {scale} from 'react-native-size-matters';
import {COLORS} from '../constants/colors';

export default function ToggleSwitch() {
  const [selected, setSelected] = useState('Yearly');
  const translateX = new Animated.Value(selected === 'Yearly' ? 1 : 0);

  const toggleSwitch = option => {
    setSelected(option);
    Animated.timing(translateX, {
      toValue: option === 'Yearly' ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        width: 200,
        height: 50,
        backgroundColor: '#eaeaea',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#fff0',
        position: 'relative',
        overflow: 'hidden',
      }}>
      <Animated.View
        style={{
          position: 'absolute',
          width: '50%',
          height: '100%',
          backgroundColor: '#2c2c2c',
          borderRadius: 25,
          transform: [
            {
              translateX: translateX.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 100],
              }),
            },
          ],
        }}
      />
      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}
        onPress={() => toggleSwitch('Monthly')}>
        <Text
          style={{
            fontSize: scale(12),
            color:
              selected === 'Monthly' ? COLORS.white : '#808080',
            fontFamily: FONTS.Samsungsharpsans_Bold,
            textAlign: 'center',
          }}>
          Monthly
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        onPress={() => toggleSwitch('Yearly')}>
        <Text
          style={{
            fontSize: scale(12),
            color:
              selected === 'Yearly' ? COLORS.white : '#808080',
            fontFamily: FONTS.Samsungsharpsans_Bold,
            textAlign: 'center',
          }}>
          Yearly
        </Text>
      </TouchableOpacity>
    </View>
  );
}
