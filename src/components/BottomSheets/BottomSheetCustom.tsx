import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import stylesG from '../../assets/css/stylesG';
import { font_size } from '../../utils/Metrics';
import RBSheet from 'react-native-raw-bottom-sheet';

type PropsPass = {
    height?: any;
    refSheet?: any;
    draggable?:boolean
    children?:any
    paddingTop?:number
    onPressImage?: () => void;
    onPressDoc?: () => void;
};

export const BottomSheetCustom: React.FC<PropsPass> = ({ refSheet,height,draggable,children,paddingTop }, props) => {



    return (
        <>
            <RBSheet
                ref={refSheet}
                height={height}
                openDuration={250}
                customStyles={{
                    container: {
                        paddingTop:paddingTop?paddingTop: 15,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                    },
                }}
                customModalProps={{
                    animationType: 'slide',
                    statusBarTranslucent: true,
                }}
                draggable={draggable}
                customAvoidingViewProps={{
                    enabled: false,
                }}>
                {children}
            </RBSheet>
        </>

    );
};




