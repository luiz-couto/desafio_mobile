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
    fontSize: 20,

   },

   comment:{

    color: 'rgb(100,100,100)',
    fontFamily:'Manjari-Thin',
    fontSize: 20,

   },

   com_container:{

      borderWidth:1,
      borderColor:'rgba(130,213,196,0.6)',
      borderRadius:12,
      marginLeft: 40,
      marginRight:23,
      marginTop: 25,
      //padding: 15,
      


   },

   title_con:{

      
      paddingTop: 15,
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: 7,
      width: 213,
      //borderWidth:1,
      

   },

   text_con:{

      //marginTop:8,
      paddingTop: 15,
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: 10,
      

   },
   
   down_bor:{

      width: 40,
      borderBottomWidth: 1,
      borderBottomColor:'rgba(130,213,196,0.6)',
      marginLeft: 16,
      marginBottom: 23,


   },

   head_container:{

      flexDirection:'row',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(130,213,196,0.6)',
      
   },

   edit:{

      width:23,
      height:23,
      

   },

   delete:{

      width:23,
      height:23,
      

   },

   edit_con:{

      
      marginLeft: 5,
      //marginTop: 15,

   },

   delete_con:{

      
      marginLeft: 12,
      //marginTop: 15,

   },

   btn_con:{

      flexDirection:'row',
      alignContent:'center',
      alignItems:'center'

      
   },
  
});

  export default styles;