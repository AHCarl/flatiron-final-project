import React from 'react';

import { createStackNavigator } from 'react-native';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen'

//TODO: create SignUpScreen
export default createStackNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen
})