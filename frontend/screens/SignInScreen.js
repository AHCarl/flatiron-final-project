import React from 'react';
import Colors from '../constants/Colors'
import { AsyncStorage, View, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button, Header } from 'react-native-elements';
import SignOutIcon from '../components/SignOutIcon'


export default class SignInScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", 'abc123')
    this.props.navigation.navigate('Main')
  }

  navigateToSignUp = () => {
    this.props.navigation.navigate('SignUp')
  }
  
  //TODO 1 make SignIn work with backend seed data
  render() {
    return (
      //enable FVM once error handling is in place 
      <View style={{flex: 1}}>
      <Header centerComponent={{ text: 'Sign In', style: { color: '#fff' } }}
      />
        <View style={{alignItems: 'center'}}>
          <FormLabel>EMAIL</FormLabel>  
          <FormInput inputStyle={styles.input} textContentType={'emailAddress'} textAlign={'center'}/>
          {/* <FormValidationMessage>{'Please enter your email'}</FormValidationMessage> */}
          <FormLabel>PASSWORD</FormLabel>
          <FormInput inputStyle={styles.input} textContentType={'password'} textAlign={'center'} secureTextEntry={true}/>
          {/* <FormValidationMessage>{'Please enter your password'}</FormValidationMessage> */}
          <Button title={"SIGN IN"} buttonStyle={styles.inButton} onPress={this._signInAsync}></Button>
        </View>
        <Button title="Click here to sign up!" buttonStyle={styles.upButton} onPress={this.navigateToSignUp}></Button>
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
  inButton: {
    backgroundColor: '#6b1596',
    top: 16,
    borderColor: 'transparent',
    borderRadius: 3,
  },
  upButton: {
    top: 20,
    backgroundColor: Colors.tintColor,
    borderColor: 'transparent',
    borderRadius: 3,
  }
});
