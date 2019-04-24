import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

const styles = StyleSheet.create({

   container:{

        flexDirection: 'row',
        backgroundColor: 'white',
        height: hp('9.45%'),

   },

   menu_container:{

        marginLeft: wp('5.0%'),
        marginTop: hp('2.16%'),


   },

   title_container:{

        marginLeft: wp('11.11%'),
        marginTop: hp('3.04%'),

   },

   title_text:{

    fontSize: hp('2.7%'),
    fontFamily:'Manjari-Thin',
    color: 'rgb(99,99,99)'


},
   menu_image:{

    width: wp('9.72%'),
    height: hp('4.73%')

},

  
  
});

  export default styles;