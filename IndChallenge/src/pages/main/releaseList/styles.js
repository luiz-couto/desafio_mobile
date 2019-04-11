import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';


const styles = StyleSheet.create({

    scroll:{

        marginTop: hp('5.4%'),
        height: hp('80%'),

    },
    
    loading_container:{

        marginLeft: wp('26.38%'),
        marginTop: hp('33.78%'),


    },

    loading:{

        color: 'rgba(155,155,155,0.3)',
        fontFamily: 'Manjari-Thin',
        fontSize: hp('4.05%'),

    },
  
  });

  export default styles;