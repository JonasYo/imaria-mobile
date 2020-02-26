import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './screens/Global/Login/Login';
import SignIn from './screens/Global/SignIn/SignIn';
import ForgotPassword from './screens/Global/ForgotPassword/ForgotPassword';
import Services from './screens/User/Services/Services';
import Schedule from './screens/User/Schedule/Schedule';
import Options from './screens/Global/Options/Options';

Icon.loadFont();

const MainNavigation = createMaterialBottomTabNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: () => ({
        tabBarVisible: false,
      }),
    },
    SignIn: {
      screen: SignIn,
      navigationOptions: () => ({
        tabBarVisible: false,
      }),
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: () => ({
        tabBarVisible: false,
      }),
    },
    Agendar: {
      screen: Services,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => (
          <Icon name="home" size={20} color={focused ? '#fe8083' : '#ddd'} />
        ),
      }),
    },
    'Minha Agenda': {
      screen: Schedule,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => (
          <Icon
            name="calendar"
            size={20}
            color={focused ? '#fe8083' : '#ddd'}
          />
        ),
      }),
    },
    Opções: {
      screen: Options,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => (
          <Icon name="bars" size={20} color={focused ? '#fe8083' : '#ddd'} />
        ),
      }),
    },
  },
  {
    activeColor: '#fe8083',
    barStyle: {
      backgroundColor: '#fff',
    },
  },
);

export default createAppContainer(MainNavigation);
