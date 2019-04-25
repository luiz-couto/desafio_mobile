import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

const styles = StyleSheet.create({

   container:{

        
        backgroundColor: 'rgb(255,255,255)',
        flex: 1,
        

   },

   title:{

    color:'rgb(100,100,100)',
    fontFamily:'Manjari-Thin',
    fontSize: hp('2.7%'),

   },

   comment:{

    color: 'rgb(100,100,100)',
    fontFamily:'Manjari-Thin',
    fontSize: hp('2.7%'),

   },

   com_container:{

      borderWidth:1,
      borderColor:'rgba(130,213,196,0.6)',
      borderRadius:12,
      marginLeft: wp('11.11%'),
      marginRight:wp('6.38%'),
      marginTop: hp('3.37%'),
      //padding: 15,
      


   },

   title_con:{

      
      paddingTop: hp('2.02%'),
      paddingLeft: wp('4.16%'),
      paddingRight: wp('4.16%'),
      paddingBottom: hp('0.94%'),
      width: wp('59.16%'),
      //borderWidth:1,
      

   },

   text_con:{

      //marginTop:8,
      paddingTop: hp('2.02%'),
      paddingLeft: wp('4.16%'),
      paddingRight: wp('4.16%'),
      paddingBottom: hp('1.35%'),
      

   },
   
   down_bor:{

      width: wp('11.11%'),
      borderBottomWidth: 1,
      borderBottomColor:'rgba(130,213,196,0.6)',
      marginLeft: wp('4.44%'),
      marginBottom: hp('3.10%'),


   },

   head_container:{

      flexDirection:'row',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(130,213,196,0.6)',
      
   },

   edit:{

      width:wp('6.38%'),
      height:hp('3.10%'),
      

   },

   delete:{

      width:wp('6.38%'),
      height:hp('3.10%'),
      

   },

   edit_con:{

      
      marginLeft: wp('2.28%'),
      //marginTop: 15,

   },

   delete_con:{

      
      marginLeft: wp('3.33%'),
      //marginTop: 15,

   },

   btn_con:{

      flexDirection:'row',
      alignContent:'center',
      alignItems:'center'

      
   },
  
});

  export default styles;