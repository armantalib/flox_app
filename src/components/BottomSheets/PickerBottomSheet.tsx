import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import stylesG from '../../assets/css/stylesG';
import { font_size, normalize, screenSize700 } from '../../utils/Metrics';
import RBSheet from 'react-native-raw-bottom-sheet';
import { BottomSheetCustom } from './BottomSheetCustom';
import Icons from '../../utils/Icons';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

type PropsPass = {
    refRBSheet?: any;
    closeSheet?: () => void;
    onPressText?: () => void;
    children?: any;
    headerText?: string;
    backgroundColor?: string;
    heightLen?: number;
    textClose?: string;
    isSearch?: boolean;
    onChangeText?: () => void;


};
const { width, height } = Dimensions.get('window');

export const PickerBottomSheet: React.FC<PropsPass> = ({ refRBSheet, closeSheet, children, headerText, heightLen, backgroundColor, textClose, onPressText,onChangeText,isSearch }) => {
    const [filterData, setFilterData] = useState<[]>([])
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    return (
        <>
            <BottomSheetCustom
                refSheet={refRBSheet}
                height={heightLen ? height * heightLen : screenSize700(700) ? height * 0.7 : height * 0.55}
                paddingTop={2}
                draggable={true}

            >
                <View style={{ width: '100%', height: '100%', backgroundColor: backgroundColor ? backgroundColor : 'rgba(73, 73, 232, 0.009)' }}>
                    <View style={[stylesG.paddingLeftRight]}>
                        <View style={[stylesG.spaceBetween, { marginTop: 10 }]}>
                            <Text style={[stylesG.fontBold, { fontSize: 20 }]}>{headerText}</Text>
                            {textClose ?
                                <TouchableOpacity
                                    onPress={onPressText}
                                >
                                    <Text style={[stylesG.fontCom, { color: COLORS.primary, fontFamily: FONTS.Samsungsharpsans_Bold, fontSize: 14, marginRight: 5 }]}>{textClose}</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity
                                    onPress={closeSheet}
                                    style={[stylesG.flexRow]}>
                                    <Text style={[stylesG.fontMedium, { fontSize: 14, color: COLORS.primary }]}>Close</Text>
                                    <Icons
                                        name={'close'}
                                        family={'AntDesign'}
                                        size={22}
                                        color={COLORS.primary}
                                    />
                                </TouchableOpacity>
                            }

                        </View>

                        <View style={{ marginTop: 20 }}></View>
                        {isSearch?
                        <View style={[stylesG.flexRow, { width: '100%', height: normalize(45), borderWidth: normalize(1), borderColor: 'rgba(73, 73, 232, 0.3)', borderRadius: normalize(8) }]}>
                            <TextInput
                                style={[{ width: '85%', height: normalize(45), paddingLeft: normalize(15) }]}
                                placeholder='Search'
                                onChangeText={onChangeText}
                            />
                            <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                                <Icons
                                    name={'search1'}
                                    family={'AntDesign'}
                                    size={22}
                                    color={COLORS.primary}
                                />
                            </View>
                        </View>:null}
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {children}

                            <View style={{ height: 200 }}></View>
                        </ScrollView>
                    </View>
                </View>
            </BottomSheetCustom>
        </>

    );
};





