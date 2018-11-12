import { createStackNavigator } from 'react-navigation';

import SplashScreen from '../screens/Splash';
import LoginScreen from '../screens/Login';
import StepsScreen from '../screens/Steps';

const AppNavigation = createStackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  },
  Steps: {
    screen: StepsScreen,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  }
})

export default AppNavigation;