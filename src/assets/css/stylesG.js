import { StyleSheet, Text, View,Platform } from 'react-native'
import { font_size, horizontal_size } from '../../utils/Metrics';
import { FONTS } from '../../constants/fonts';
import { COLORS } from '../../constants/colors';

export default StyleSheet.create({
    contentCenter:{
        justifyContent:'center',
        alignItems:'center',
    },
    spaceBetween:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%'
    },
    spaceAround:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    fontBold:{
      color:COLORS.black,
      fontSize:font_size(14),
      fontFamily:FONTS.Samsungsharpsans_Bold
    },
    fontSemiBold:{
      color:COLORS.black,
      fontSize:font_size(14),
      fontFamily:FONTS.Bold
    },
    fontMedium:{
      color:COLORS.black,
      fontSize:font_size(14),
      fontFamily:FONTS.Samsungsharpsans_Medium
    },
    paddingLeftRight:{
      width:'90%',
      alignSelf:'center'
    },
    boxPaddingLeftRight:{
      paddingLeft:horizontal_size(14),
      paddingRight:horizontal_size(14)
     },
    flexRow:{
        flexDirection:'row',
        alignItems:'center',
    },
    heading1: {
        fontFamily: FONTS.Samsungsharpsans_Bold,
        fontSize: 24,
        color: COLORS.black
      },
      heading2: {
        fontFamily: FONTS.Samsungsharpsans_Bold,
        fontSize: 17,
        color: COLORS.black
      },
    
      creTabRoleTxt:{
        fontSize:16,
        fontFamily:FONTS.Samsungsharpsans_Medium, 
      },
      txtInputMt:{
        marginTop:30
      },
      subHeading:{
        fontSize:14,
        fontFamily:FONTS.Samsungsharpsans_Medium,
        color:COLORS.black
      },
      
      fontCom:{
        color:COLORS.black,
        fontSize:font_size(14),
        fontFamily:FONTS.Samsungsharpsans
      },
      shadowCom:{
        shadowColor: Platform.OS === 'ios' ? '#D4D4D4' : '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1
      },
      positionAbu:{
   
       position:'absolute',
       bottom:60,
       right:100,
      },
      statusBarHeight:{
   
       marginTop : global.statusBarHeight
       },
    

})