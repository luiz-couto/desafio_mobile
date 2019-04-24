import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

const styles = StyleSheet.create({

   container:{

        
        backgroundColor: 'rgb(99,99,99)',
        flex: 1,
        

   },

   input_title:{

    width: wp('91.66%'),
    height: hp('5.4%'),
    borderColor: 'rgba(255,255,255,0.6)',
    borderWidth: 1,
    marginLeft: wp('4.16%'),
    marginTop: hp('0.67%'),
    borderRadius: 4,
    backgroundColor:'rgb(255,255,255)',
    fontFamily:'Manjari-Thin',
    
    


   },

   title_text_container:{

    marginLeft: wp('5.0%'),
    marginTop: hp('4.05%'),

   },

   title_text:{

    fontSize: hp('2.43%'),
    fontFamily:'Manjari-Thin',
    color: 'rgb(255,255,255)',
    

   },

   input_comment:{
    
    width: wp('91.66%'),
    height: hp('40.54%'),
    borderColor: 'rgba(255,255,255,0.6)',
    borderWidth: 1,
    marginLeft: wp('4.16%'),
    marginTop: hp('0.67%'),
    backgroundColor:'rgb(255,255,255)',
    borderRadius: 4,
    textAlignVertical: 'top',
    fontFamily:'Manjari-Thin',
    fontSize: hp('2.43%'),

   },

   comment_text:{

    fontSize: hp('2.43%'),
    fontFamily:'Manjari-Thin',
    color: 'rgb(255,255,255)',

   },

   comment_text_container:{

    marginLeft: wp('5.0%'),
    marginTop: hp('3.38%'),
   
   },

back_button:{

    borderWidth: 0.4,
    borderColor: 'rgb(27,179,148)',
    paddingLeft: wp('5.33%'),
    paddingRight: wp('5.33%'),
    paddingTop: hp('1.08%'),
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

    marginLeft:wp('4.44%'),
    marginTop:hp('2.7%'),
},

publish_button:{

    borderWidth:0.4,
    borderColor: 'rgb(27,179,148)',
    paddingLeft:wp('5.33%'),
    paddingRight:wp('5.33%'),
    paddingTop:hp('1.08%'),
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

    marginLeft:wp('5.0%'),
    marginTop:hp('2.7%')
},



buttons_container:{

    flexDirection:'row',

},
  
});

  export default styles;