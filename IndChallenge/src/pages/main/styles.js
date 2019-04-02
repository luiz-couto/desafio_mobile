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

        marginTop: hp('2.02%'),
        marginLeft: wp('4.16%'),
        width: wp('10.33%'),
        height: hp('5.05%'),

    },

    request_button:{

        borderWidth:0.4,
        borderColor: 'rgba(27,179,148,0.7)',
        paddingLeft:wp('3.33%'),
        paddingRight:wp('3.33%'),
        paddingTop:hp('0.99%'),
        paddingBottom: hp('0.13%'),
        borderRadius: 3,
        height:hp('5.33%'),
        width: wp('50%'),
        alignItems:'center'


    },

    request_text:{

        fontFamily:'Manjari-Thin',
        fontSize:hp('2.43%'),
        color:'rgb(27,179,148)'

    },

    request_touchable:{

        marginLeft:wp('30.55%'),
        marginTop:hp('1.95%'),
    }



    
  
  
  });

  export default styles;