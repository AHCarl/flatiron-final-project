import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'


export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign In',
  };
  
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
        <Button title={"SUBMIT"} buttonStyle={styles.button}></Button>
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
  button: {
    backgroundColor: '#6b1596',
    width: 88,
    height: 33,
    top: 16,
    borderColor: 'transparent',
    borderRadius: 3,
    left: 58
  }
});
