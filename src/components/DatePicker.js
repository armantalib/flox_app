import React, { Component, useState, useEffect } from 'react';
import { Text, TouchableOpacity, ImageBackground, Image, View, Platform, useColorScheme } from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import { IMAGES } from '../constants/images';
import { FONTS } from '../constants/fonts';
import { COLORS } from '../constants/colors';
import { date_format, time_format } from '../utils/DateTimeFormate';
export default class DatePicker2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            value: '',
            customDate: new Date(),
            toDateSend: this.props.type == 'time' ? moment().format('HH:MM:SS') : moment().format('YYYY-MM-DD'),
            timeShow: new Date()
        };
    }

    dateHandleFun(date_custom) {
        if (this.props.type == 'time') {

            var date23 = moment(date_custom).format('HH:mm');
            // var date23 = time_format(date_custom);
            // console.log("DDD",date23);
            this.setState({
                timeShow: date_custom
            })
        } else {
            var date23 = moment(date_custom).format('YYYY-MM-DD');
            // var date23 = date_format(date_custom);

        }
        this.setState({
            toDateSend: date23,
            customDate: date_custom,
        })
    }

    confirmDate() {

        this.setState({
            value: this.state.toDateSend,
            modal: false
        })
        this.props.value(this.state.toDateSend)
    }

    render() {
        return (
            <View style={{ width: '100%' }}>
                <Text style={{ fontSize: 12, fontFamily: FONTS.Samsungsharpsans_Medium, color: COLORS.black, marginLeft: 5 }}>{this.props.text}</Text>
                <TouchableOpacity
                    onPress={() => this.setState({ modal: true })}
                    style={{
                        width: '98%', height: 45, borderRadius: 5, backgroundColor: COLORS.white, marginTop: 10, marginBottom: 5, marginLeft: 5, marginRight: 5,
                        shadowColor: Platform.OS === 'ios' ? '#D4D4D4' : '#000',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        elevation: 2
                    }}>
                    <View style={{ width: '100%', height: 45, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        {this.props.setValue == '' ?
                            <Text style={{ fontSize: 12, fontFamily: FONTS.Samsungsharpsans_Medium, paddingLeft: 10, color: COLORS.grey }}>{this.props.placeholder}</Text>
                            :
                            <>
                                {this.props.notFormate == false ?
                                    <Text style={{ fontSize: 12, fontFamily: FONTS.Samsungsharpsans_Medium, paddingLeft: 10, color: COLORS.black }}>{this.props.setValue}</Text>
                                    :
                                    <Text style={{ fontSize: 12, fontFamily: FONTS.Samsungsharpsans_Medium, paddingLeft: 10, color: COLORS.black }}>{this.props.type == 'time' ? time_format(this.state.timeShow) : date_format(this.props.setValue) == 'Invalid date' ? this.props.setValue : date_format(this.props.setValue)}</Text>
                                }
                            </>
                        }
                        <Image
                            source={IMAGES.Music_IMG}
                            style={{ width: 15, height: 15, marginRight: 10, tintColor: COLORS.grey }}
                        />
                    </View>
                </TouchableOpacity>
                <Modal
                    isVisible={this.state.modal}
                    animationType="slide"
                    transparent={true}
                >
                    <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: 10, paddingBottom: 10 }}>
                        <View style={{ flex: 2 }}></View>
                        <View style={{ flex: 4, justifyContent: 'flex-end' }}>
                            <View style={{ width: '100%' }}>
                                <View style={{ width: '100%', backgroundColor: COLORS.white, height: 200, borderRadius: 15 }}>
                                    <View style={{ height: 140, alignItems: 'center' }}>
                                        {this.props.type == 'time' ?
                                            <DatePicker
                                                date={this.state.customDate}
                                                onDateChange={customDate => this.dateHandleFun(customDate)}
                                                mode={'time'}
                                            />
                                            :
                                            <DatePicker
                                                date={this.state.customDate}
                                                onDateChange={customDate => this.dateHandleFun(customDate)}
                                                mode={'date'}
                                            />
                                        }

                                    </View>
                                    <TouchableOpacity
                                        onPress={() => this.confirmDate()}
                                        style={{ width: '100%', backgroundColor: COLORS.white, height: 50, marginTop: 5, justifyContent: 'space-around', alignItems: 'center', borderRadius: 15, }}>
                                        <Text style={{ fontSize: 16, fontFamily: FONTS.Samsungsharpsans_Bold, color: COLORS.primary }}>Confirm</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity
                                    onPress={() => this.setState({ modal: false })}
                                    style={{ width: '100%', backgroundColor: COLORS.white, height: 50, marginTop: 5, justifyContent: 'space-around', alignItems: 'center', borderRadius: 15 }}>
                                    <Text style={{ fontSize: 16, fontFamily: FONTS.Samsungsharpsans_Bold, color: COLORS.secondary }}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}


export const DatePickerModal = (props) => {
    const [dateSend, setDateSend] = useState(new Date())
    const colorScheme = useColorScheme();
    return (
        <View>
            <Modal
                isVisible={props.show}
                animationType="slide"
                transparent={true}
            >
                <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: 10, paddingBottom: 10 }}>
                    <View style={{ flex: 2 }}></View>
                    <View style={{ flex: 4, justifyContent: 'flex-end' }}>
                        <View style={{ width: '100%' }}>
                            <View style={{ width: '100%', backgroundColor: colorScheme === 'dark' ? '#121212' : 'white', height: 200, borderRadius: 15 }}>
                                <View style={{ height: 140, alignItems: 'center' }}>
                                    {props.type == 'time' ?
                                        <DatePicker
                                            date={dateSend}
                                            onDateChange={customDate => { setDateSend(customDate) }}
                                            mode={'time'}
                                            theme={colorScheme}
                                            textColor={colorScheme === 'dark' ? 'white' : 'black'} // Fix visibility
                                        />
                                        :
                                        <DatePicker
                                            date={dateSend}
                                            maximumDate={props.maximumDate}
                                            onDateChange={customDate => { setDateSend(customDate) }}
                                            mode={'date'}
                                            theme={colorScheme}
                                            textColor={colorScheme === 'dark' ? 'white' : 'black'} // Fix visibility
                                            style={{
                                                backgroundColor: colorScheme === 'dark' ? '#121212' : 'white',
                                            }}
                                        />
                                    }

                                </View>
                                <TouchableOpacity
                                    onPress={() => {

                                        props.confirmDate(dateSend)
                                        props.close();
                                    }}
                                    style={{ width: '90%', backgroundColor: colorScheme === 'dark' ? '#121212' : 'white', height: 50, marginTop: 5,alignSelf:'center',borderColor:COLORS.border,borderWidth:1, justifyContent: 'space-around', alignItems: 'center', borderRadius: 15, }}>
                                    <Text style={{ fontSize: 16, fontFamily: FONTS.Samsungsharpsans_Bold, color:colorScheme === 'dark' ? 'white' : COLORS.primary }}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                onPress={() => props.close()}
                                style={{ width: '100%', backgroundColor: colorScheme === 'dark' ? '#121212' : 'white', height: 50, marginTop: 5, justifyContent: 'space-around', alignItems: 'center', borderRadius: 15 }}>
                                <Text style={{ fontSize: 16, fontFamily: FONTS.Samsungsharpsans_Bold, color: COLORS.danger }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
