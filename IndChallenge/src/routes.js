import { createStackNavigator, createAppContainer,createDrawerNavigator,
DrawerItems, DrawerActions} from 'react-navigation';
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';
import { View, Text, ImageBackground,TouchableOpacity,Image} from 'react-native'
import styles from './menu_styles'
import Main from './pages/main/index';
import Data from './pages/data/index';

const RootStack = createDrawerNavigator({

  Main: { screen: Main },
  Data: { screen: Data },
},{

  contentComponent: (props) => (

        <View>

          <ImageBackground

          source={require('./background.png')}
          style={styles.background}
          resizeMode = 'cover'

         />

        <View style={styles.close_container}>
            <TouchableOpacity onPress={() => {props.navigation.closeDrawer();}}>
            <Image
                
                style={styles.close_icon}
                source={require('./close_icon.png')}

            />
            </TouchableOpacity>
        </View>

        <View style = {styles.drawerContainer}>
          <DrawerItems {...props} 
           activeTintColor='rgb(27,179,148)'
           activeBackgroundColor='rgba(4, 40, 76, 0)'
           inactiveTintColor='rgb(255,255,255)'
           labelStyle={styles.label_style}
           itemStyle={styles.item_style}/>
           </View>
          
        </View>
      ),

    drawerWidth: wp('63.88%')



},);



const Routes = createAppContainer(RootStack);

export default Routes;

