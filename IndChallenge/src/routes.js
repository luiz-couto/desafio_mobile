import { createStackNavigator, createAppContainer,createDrawerNavigator } from 'react-navigation';
import Main from './pages/main/index';
//import Data from './pages/data/index';

const RootStack = createDrawerNavigator({
  
  Main: { screen: Main },
  //Data: { screen: Data },
}, {

  drawerWidth: 250,
  drawerPosition: 'left',

});

const Routes = createAppContainer(RootStack)

export default Routes;