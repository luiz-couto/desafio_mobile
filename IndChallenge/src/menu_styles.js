import { StyleSheet } from "react-native";
// import {widthPercentageToDP as wp, heightPercentageToDP as hp}
// from 'react-native-responsive-screen';

const styles = StyleSheet.create({


    background: {

        width:280,
        height:740,
        position:'absolute',
    
      },
    
      drawerContainer: {
    
        paddingTop: 190,
        
      },
    
      label_style:{
    
        fontFamily:'Manjari-Thin',
        fontWeight: 'normal',
        fontSize:20,
        
    
      },
    
      item_style:{
    
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(27,179,148,0.4)',
        marginLeft: 20,
        marginRight: 20,
        height: 55,
        paddingTop: 5,
    
    
      },
      close_icon:{

        marginTop: 15,
        marginLeft: 15,
        width: 30,
        height: 30,

      },
      close_container:{

        width: 50,


      }

    
  
  
  });

  export default styles;