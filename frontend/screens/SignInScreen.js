import React from 'react';
import Colors from '../constants/Colors'
import { AsyncStorage, View, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button, Header } from 'react-native-elements';
import { userUrl } from "../constants/Keys"
import { axios} from 'axios'

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


  state = {
    email: '',
    password: '',
    error: null
  }

  // userData = {email: this.state.email, password: this.state.password}


  _signIn = () => {
    console.log("before fetch")
    fetch(`http://10.185.5.255:5000/api/test`, {
      method: 'POST',
      body: JSON.stringify({"email": this.state.email, "password": this.state.password}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => {
      console.log("first resp")
      return resp.ok ? resp.json() : resp.statusText
    })
    .then(resp => {
      if (resp === "Unauthorized") {
        this.setState({error: 'Incorrect username or password'})
      } else {
        console.log("probably superfluous")
        AsyncStorage.setItem("userToken", resp.token)
        this.props.navigation.navigate('Main')
      }
    })
    .catch(err => console.log(err))
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
          <FormInput inputStyle={styles.input} value={this.state.email} textContentType={'emailAddress'} textAlign={'center'} onChangeText={(email) => this.setState({email})}/>
          {/* <FormValidationMessage>{'Please enter your email'}</FormValidationMessage> */}
          <FormLabel>PASSWORD</FormLabel>
          <FormInput inputStyle={styles.input} value={this.state.password} textContentType={'password'} textAlign={'center'} secureTextEntry={true} onChangeText={(password) => this.setState({password})}/>
          {/* <FormValidationMessage>{'Please enter your password'}</FormValidationMessage> */}
          <Button title={"SIGN IN"} buttonStyle={styles.inButton} onPress={() => this._signIn()}></Button>
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
