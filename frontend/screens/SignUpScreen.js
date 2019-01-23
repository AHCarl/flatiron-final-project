import React from 'react';
import Colors from '../constants/Colors'
import { View, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button, Header } from 'react-native-elements'
import SignOutIcon from '../components/SignOutIcon'

export default class SignUpScreen extends React.Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      //enable FVM once error handling is in place 
      <View style={{flex: 1}}>
      <Header centerComponent={{ text: 'Sign Up', style: { color: '#fff' } }} />
        <View style={{flex: 1, alignItems: 'center'}}>
          <FormLabel>EMAIL</FormLabel>  
          <FormInput inputStyle={styles.input} textContentType={'emailAddress'} textAlign={'center'}/>
          {/* <FormValidationMessage>{'Please enter your email'}</FormValidationMessage> */}
          <FormLabel>PASSWORD</FormLabel>
          <FormInput inputStyle={styles.input} textContentType={'password'} textAlign={'center'} secureTextEntry={true}/>
          {/* <FormValidationMessage>{'Please enter your password'}</FormValidationMessage> */}
          <Button title={"SIGN ME UP!"} buttonStyle={styles.upButton} onPress={this._signInAsync}></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 200,
    backgroundColor: '#fff',
    borderBottomColor: '#bbb',
    borderBottomWidth: 2
  },
  upButton: {
    backgroundColor: Colors.signButton,
    top: 16,
    borderColor: 'transparent',
    borderRadius: 3,
  }
});
