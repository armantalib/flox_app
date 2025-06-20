import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import stylesG from '../../assets/css/stylesG';
import { normalize } from '../../utils/Metrics';
import { getInitials } from '../../utils/Helper';
import { COLORS } from '../../constants/colors';
import { useSelector } from 'react-redux';

type ButtonProps = {
    width?: any;
    marginTop?: number,
    height?: any;
    borderRadius?: number;
    backgroundColor?: string;
    textColor?: string;
    name?: string;
    fontSize?: any;
    image?: any;
    user?: any;
    onPress?: () => void;
};

const CustomAvatar: React.FC<ButtonProps> = ({
    width,
    height,
    name,
    onPress,
    marginTop,
    borderRadius,
    backgroundColor,
    textColor,
    fontSize,
    image,
    user,
}) => {

    return (
        <>
            {image ?
                <View

                >
                    <Image
                        source={{ uri: image }}
                        style={{ width: width ? width : normalize(50), height: height ? height : normalize(50), borderRadius: borderRadius ? borderRadius : normalize(50) }}
                    />
                </View>
                :
                user?.emoji_color?.emoji ?
                    <View
                        style={{ width: width ? width : normalize(50), height: height ? height : normalize(50), borderRadius: borderRadius ? borderRadius : normalize(50), backgroundColor: backgroundColor ? backgroundColor : user?.emoji_color?.color, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Text style={[stylesG.fontBold, { fontSize: fontSize ? fontSize : normalize(18), color: textColor ? textColor : COLORS.white }]}>{user?.emoji_color?.emoji}</Text>
                    </View>
                    :
                    <View
                        style={{ width: width ? width : normalize(50), height: height ? height : normalize(50), borderRadius: borderRadius ? borderRadius : normalize(50), backgroundColor: backgroundColor ? backgroundColor : COLORS.blue, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Text style={[stylesG.fontBold, { fontSize: fontSize ? fontSize : normalize(18), color: textColor ? textColor : COLORS.white }]}>{getInitials(name)}</Text>
                    </View>
            }
        </>

    );
};


export default CustomAvatar