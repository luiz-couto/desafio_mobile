import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

const styles = StyleSheet.create({

    container:{

        flexDirection:'row',

    },
    
    
    
    menu_container:{

        width: wp('13.88%'),

    },

    menu_icon:{

        marginTop: hp('2.52%'),
        marginLeft: wp('4.16%'),
        width: wp('10.33%'),
        height: hp('5.05%'),

    },

    request_button:{

        borderWidth:0.4,
        borderColor: 'rgba(27,179,148,0.7)',
        paddingLeft:wp('5.33%'),
        paddingRight:wp('5.33%'),
        paddingTop:hp('1.3%'),
        paddingBottom: hp('0.13%'),
        borderRadius: 3,
        height:hp('6.33%'),
        width: wp('60%'),
        alignItems:'center'


    },

    request_text:{

        fontFamily:'Manjari-Thin',
        fontSize:hp('3.0%'),
        color:'rgb(27,179,148)',

    },

    request_touchable:{

        marginLeft:wp('20.55%'),
        marginTop:hp('1.95%'),
    },

    uni_image:{

        width:wp('69.44%'),
        height: hp('33.78%'),
        marginTop: hp('8.10%'),
        marginLeft: wp('15%'),


    }

    
  
  
  });

  export default styles;