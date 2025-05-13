import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import stylesG from '../../assets/css/stylesG';
import Icons from '../../utils/Icons';
import { normalize } from '../../utils/Metrics';
import { COLORS } from '../../constants/colors';

type ButtonProps = {
  text?: string;
  isSelected?: boolean;
  image?: any;
  onPress?: () => void;

};

const PickerItem: React.FC<ButtonProps> = ({
  text,
  image,
  isSelected,
  onPress
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[{ width: '100%', height: normalize(56), justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: 'rgba(73, 73, 232, 0.3)' }]}>
    <View style={[stylesG.spaceBetween]}>
      <View style={[stylesG.flexRow]}>
        {isSelected ?
          <Icons
            name={'check'}
            family={'Feather'}
            size={18}
            color={'#2C7A2A'}
          /> : <View style={{ width: 18 }} />}
        {image ? image : null}
        <Text style={[stylesG.fontSemiBold, { marginLeft: 1, fontSize: normalize(15),textTransform:'capitalize' }]}>{text}</Text>
      </View>

      <Icons
        name={'chevron-right'}
        family={'Feather'}
        size={24}
        color={COLORS.primary}
      />
    </View>
  </TouchableOpacity>
);

export default PickerItem