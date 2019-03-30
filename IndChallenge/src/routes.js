import { createStackNavigator } from 'react-navigation';
import Main from './pages/main/index';
import Data from './pages/data/index';

const Routes = createStackNavigator({
  Main: { screen: Main },
  Set: { screen: Data },
});

export default Routes;