import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './pages/main/index';
//import Data from './pages/data/index';

const RootStack = createStackNavigator({
  Main: { screen: Main },
  //Data: { screen: Data },
});

const Routes = createAppContainer(RootStack)

export default Routes;