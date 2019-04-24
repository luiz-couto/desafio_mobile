import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

const styles = StyleSheet.create({

   scroll:{

    height: hp('84.72%'),


   },

   uni_image:{

      width:wp('69.44%'),
      height: hp('35.78%'),
      marginTop: hp('10.10%'),
      marginLeft: wp('15%'),


  },
  
});

  export default styles;