import { StyleSheet, Dimensions } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

const styles = StyleSheet.create({


    background: {
      
        width:wp('63.88%'),
        height:hp('100%'),
        position:'absolute',
    
      },
    
      drawerContainer: {
        
        paddingTop: hp('25.67%'),
        
      },
    
      label_style:{
    
        fontFamily:'Manjari-Thin',
        fontWeight: 'normal',
        fontSize:hp('2.7%'),
        
    
      },
    
      item_style:{
    
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(27,179,148,0.4)',
        marginLeft: wp('5.55%'),
        marginRight: wp('5.55%'),
        height: hp('7.43%'),
        paddingTop: hp('0.67%'),
    
    
      },
      close_icon:{

        marginTop: hp('2.02%'),
        marginLeft: wp('4.16%'),
        width: wp('8.33%'),
        height: hp('4.05%'),

      },
      close_container:{

        width: wp('13.88%'),
        
      },

  
  });

  export default styles;