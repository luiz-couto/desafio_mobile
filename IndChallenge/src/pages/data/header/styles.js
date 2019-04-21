import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

const styles = StyleSheet.create({

   container:{

        flexDirection: 'row',
        backgroundColor: 'rgb(99,99,99)',
        height: 70,

   },

   menu_container:{

        marginLeft: 18,
        marginTop: 16,


   },

   title_container:{

        marginLeft: 70,
        marginTop: 25,

   },

   add_container:{

        marginLeft: 65,
        marginTop: 17,

   },
  
  
   menu_image:{

        width: 35,
        height: 35

   },

   add_image:{

        width: 40,
        height: 40,

},

   title_text:{

        fontSize: 20,
        fontFamily:'Manjari-Thin',
        color: 'rgb(255,255,255)'


},
  
  
});

  export default styles;