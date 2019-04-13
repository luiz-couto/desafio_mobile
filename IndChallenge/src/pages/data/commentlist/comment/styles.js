import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

const styles = StyleSheet.create({

   container:{

        
        backgroundColor: 'rgb(155,155,155)',
        flex: 1,
        

   },

   title:{

    color:'white',
    fontFamily:'Manjari-Thin',
    fontSize: 20,

   },

   comment:{

    color: 'white',
    fontFamily:'Manjari-Thin',
    fontSize: 20,

   },

   com_container:{

      borderWidth:1,
      borderColor:'rgb(160,227,213)',
      borderRadius:12,
      marginLeft: 40,
      marginRight:23,
      marginTop: 25,
      //padding: 15,
      


   },

   title_con:{

      borderBottomWidth: 1,
      borderBottomColor: 'rgb(160,227,213)',
      paddingTop: 15,
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: 7,
      
      

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
      borderBottomColor:'rgb(160,227,213)',
      marginLeft: 16,
      marginBottom: 23,


   },
  
});

  export default styles;