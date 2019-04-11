import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';


const styles = StyleSheet.create({

    item_container:{

        borderBottomWidth: 1,
        borderBottomColor: 'rgba(27,179,148,0.4)',
        paddingLeft: wp('5.55%'),
        paddingTop: hp('4.72%'),
        paddingBottom: hp('2.02%'),
        width: wp('83.33%'),
        marginLeft: wp('8.33%'),

    },
    
    tag_text:{

        color: 'rgb(27,179,148)',
        fontFamily: 'Manjari-Thin',
        fontSize: hp('2.87%'),


    },

    create_text:{

        color: 'rgb(27,179,148)',
        fontFamily: 'Manjari-Thin',
        fontSize: hp('2.87%'),


    },
    
  });

  export default styles;