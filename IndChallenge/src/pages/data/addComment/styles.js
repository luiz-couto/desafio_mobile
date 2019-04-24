import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

const styles = StyleSheet.create({

   container:{

        
        backgroundColor: 'rgb(99,99,99)',
        flex: 1,
        

   },

   input_title:{

    width: 330,
    height: 40,
    borderColor: 'rgba(255,255,255,0.6)',
    borderWidth: 1,
    marginLeft: 15,
    marginTop: 5,
    borderRadius: 4,
    backgroundColor:'rgb(255,255,255)',
    fontFamily:'Manjari-Thin',
    
    


   },

   title_text_container:{

    marginLeft: 18,
    marginTop: 30,

   },

   title_text:{

    fontSize: 18,
    fontFamily:'Manjari-Thin',
    color: 'rgb(255,255,255)',
    

   },

   input_comment:{
    
    width: 330,
    height: 300,
    borderColor: 'rgba(255,255,255,0.6)',
    borderWidth: 1,
    marginLeft: 15,
    marginTop: 5,
    backgroundColor:'rgb(255,255,255)',
    borderRadius: 4,
    textAlignVertical: 'top',
    fontFamily:'Manjari-Thin',
    fontSize: 18,

   },

   comment_text:{

    fontSize: 18,
    fontFamily:'Manjari-Thin',
    color: 'rgb(255,255,255)',

   },

   comment_text_container:{

    marginLeft: 18,
    marginTop: 25,
   
   },

back_button:{

    borderWidth:0.4,
    borderColor: 'rgb(27,179,148)',
    paddingLeft:wp('5.33%'),
    paddingRight:wp('5.33%'),
    paddingTop:8,
    paddingBottom: hp('0.13%'),
    borderRadius: 3,
    height:hp('6.33%'),
    width: wp('43%'),
    alignItems:'center'


},

back_text:{

    fontFamily:'Manjari-Thin',
    fontSize:hp('3.0%'),
    color:'rgb(27,179,148)',

},

back_touchable:{

    marginLeft:16,
    marginTop:20
},

publish_button:{

    borderWidth:0.4,
    borderColor: 'rgb(27,179,148)',
    paddingLeft:wp('5.33%'),
    paddingRight:wp('5.33%'),
    paddingTop:8,
    paddingBottom: hp('0.13%'),
    borderRadius: 3,
    height:hp('6.33%'),
    width: wp('43%'),
    alignItems:'center',
    backgroundColor:'rgb(27,179,148)'


},

publish_text:{

    fontFamily:'Manjari-Thin',
    fontSize:hp('3.0%'),
    color:'rgb(255,255,255)',

},

publish_touchable:{

    marginLeft:18,
    marginTop:20
},



buttons_container:{

    flexDirection:'row',

},
  
});

  export default styles;