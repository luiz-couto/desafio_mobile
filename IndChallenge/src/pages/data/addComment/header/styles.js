import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

const styles = StyleSheet.create({

   container:{

        flexDirection: 'row',
        backgroundColor: 'white',
        height: 70,

   },

   menu_container:{

        marginLeft: 18,
        marginTop: 16,


   },

   title_container:{

        marginLeft: 40,
        marginTop: 22.5,

   },

   title_text:{

    fontSize: 20,
    fontFamily:'Manjari-Thin',
    color: 'rgb(99,99,99)'


},
   menu_image:{

    width: 35,
    height: 35

},

  
  
});

  export default styles;