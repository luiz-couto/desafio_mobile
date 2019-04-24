import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

const styles = StyleSheet.create({

   container:{

        flexDirection: 'row',
        backgroundColor: 'rgb(99,99,99)',
        height: hp('9.45%'),

   },

   menu_container:{

        marginLeft: wp('5.0%'),
        marginTop: hp('2.16%'),


   },

   title_container:{

        marginLeft: wp('19.44%'),
        marginTop: hp('3.37%'),

   },

   add_container:{

        marginLeft: wp('20.05%'),
        marginTop: hp('2.29%'),

   },
  
  
   menu_image:{

        width: wp('9.72%'),
        height: hp('4.72%')

   },

   add_image:{

        width: wp('11.11%'),
        height: hp('5.4%'),

},

   title_text:{

        fontSize: hp('2.7%'),
        fontFamily:'Manjari-Thin',
        color: 'rgb(255,255,255)'


},
  
  
});

  export default styles;