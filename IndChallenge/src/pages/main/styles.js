import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

const styles = StyleSheet.create({


    menu_container:{

        width: wp('13.88%'),

    },

    menu_icon:{

        marginTop: hp('2.02%'),
        marginLeft: wp('4.16%'),
        width: wp('8.33%'),
        height: hp('4.05%'),

    }

    
  
  
  });

  export default styles;