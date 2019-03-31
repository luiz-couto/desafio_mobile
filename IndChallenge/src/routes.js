import { createStackNavigator, createAppContainer,createDrawerNavigator,DrawerItems} from 'react-navigation';
import React from 'react'
import { View, Text, ImageBackground,} from 'react-native'
import styles from './menu_styles'
import Main from './pages/main/index';
//import Data from './pages/data/index';

const RootStack = createDrawerNavigator({

  Main: { screen: Main },
  //Data: { screen: Data },
}, {

  contentComponent: (props) => (

        <View>

          <ImageBackground

          source={require('./background.png')}
          style={styles.background}
          resizeMode = 'cover'

         />

          <View style = {styles.drawerContainer}>
          <DrawerItems {...props} 
           activeTintColor='rgb(255,255,255)'
           activeBackgroundColor='rgba(4, 40, 76, 0)'
           labelStyle={styles.label_style}
           itemStyle={styles.item_style}/>
           </View>
          <Text></Text>
        </View>
      )



});


const Routes = createAppContainer(RootStack)

export default Routes;

