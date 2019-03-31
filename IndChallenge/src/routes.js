import { createStackNavigator, createAppContainer,createDrawerNavigator,DrawerItems} from 'react-navigation';
import React from 'react'
import { View, Text, ImageBackground, StyleSheet} from 'react-native'
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

          <Text>Custom Header</Text>
          <DrawerItems {...props} />
          <Text>Custom Footer</Text>
        </View>
      )



});

const styles = StyleSheet.create({


  background: {

    width:280,
    height:740,
    position:'absolute',

  },
})

const Routes = createAppContainer(RootStack)

export default Routes;

