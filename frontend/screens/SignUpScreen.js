import React from 'react';

import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'

export default class SignUpScreen extends React.Component {

  static navigationOptions = {
    title: "Sign Up!"
  }

  render() {
    return (
      //enable FVM once error handling is in place 
      <View style={{flex: 1, alignItems: 'center'}}>
          <FormLabel>EMAIL</FormLabel>  
          <FormInput inputStyle={styles.input} textContentType={'emailAddress'} textAlign={'center'}/>
          {/* <FormValidationMessage>{'Please enter your email'}</FormValidationMessage> */}
          <FormLabel>PASSWORD</FormLabel>
          <FormInput inputStyle={styles.input} textContentType={'password'} textAlign={'center'} secureTextEntry={true}/>
          {/* <FormValidationMessage>{'Please enter your password'}</FormValidationMessage> */}
          <Button title={"SIGN ME UP!"} buttonStyle={styles.button} onPress={this._signInAsync}></Button>
        </View>
    );
  }
}
