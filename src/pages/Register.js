import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableHighlight,
  NavigationExperimental,
  Dimensions,
  ScrollView,
  Platform,
  ActivityIndicator,
  BackAndroid
} from 'react-native';

import containerStyles from '../styles/Container'
import inputStyles from '../styles/Input'
import textStyles from '../styles/Text'
import ButtonCustom from '../components/ButtonCustom'
import ButtonInverted from '../components/ButtonInverted'
// import * as firebase from "firebase";
import Header from '../components/header'
import Constants from '../Constants'

/*var state = {}

const usernameChangeHandler = ev => {
  state.username = ev.nativeEvent.text
  // console.log(ev.nativeEvent.text)
}

const emailChangeHandler = ev => {
  state.email = ev.nativeEvent.text
  // console.log(ev.nativeEvent.text)
}
const passwordChangeHandler = ev => {
  state.pass = ev.nativeEvent.text
  // console.log(ev.nativeEvent.text)
}

var loaded = true
const onPressRegister = async (email, pass, onSuccessRegister) => {
  // var cond = true
  try {
    // progressOn()
    await Constants.firebaseApp.auth()
      .createUserWithEmailAndPassword(email, pass);
    // this.showProgress = false
      console.log("Account created");
      // progressOff()
      alert('Your account was created!');
      onSuccessRegister()
  } catch (error) {
    switch(error){

        case "EMAIL_TAKEN":
          alert("The new user account cannot be created because the email is already in use.");
        break;

        case "INVALID_EMAIL":
          alert("The specified email is not a valid email.");
        break;

        default:
          alert("Error creating user:");
      }

  }
    console.log(error.toString())
}
export default ({onPress, goBack, onSuccessRegister}) => (
 <View style={containerStyles.container}>
   
   <Text style={textStyles.subtitle} >Sign Up</Text>
   <ActivityIndicator animating = {false}
        style = {containerStyles.activityIndicator} size = "large"
    />
   <TextInput placeholder='Username'
    style={inputStyles.emailInput}
    onChange={usernameChangeHandler}></TextInput>

   <TextInput placeholder='Email'
    style={inputStyles.emailInput}
    onChange={emailChangeHandler}></TextInput>

   <TextInput placeholder='Password'
    style={inputStyles.passwordInput}
    secureTextEntry={true}
    onChange={passwordChangeHandler}></TextInput>

   <ButtonInverted title='Register' onPress={() => onPressRegister(state.email, state.pass, onSuccessRegister)} />

   <ButtonCustom onPress={onPress} title='Or go to Login' />
  
 </View>
)*/

class Register extends React.Component{
  constructor(props){
    super(props);
  //  alert(JSON.stringify(this.props))
    this.state = {
      loaded: false,
      email: '',
      password: ''
    };
    // alert(this.state.email)
  }
 async signup(){

    this.setState({
      loaded: true
    });
    // alert(this.state.passnword)
    try{
      userData = await Constants.firebaseApp.auth()
       .createUserWithEmailAndPassword(this.state.email, this.state.password)
       this.setState({
        email: '',
        password: '',
        loaded: false
      });
      alert('Your account was created!');
      this.props.onSuccessRegister()
    } catch(error) {
      switch(error.code){

          case "EMAIL_TAKEN":
            alert("The new user account cannot be created because the email is already in use.");
          break;

          case "INVALID_EMAIL":
            alert("The specified email is not a valid email.");
          break;

          default:
            alert("Error creating user:");
        }
        this.setState({
          loaded: false
        })
    }
    // Constants.firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(function(user){
    //   this.setState({
    //     email: '',
    //     password: '',
    //     loaded: false
    //   });
    //   alert('Your account was created!');
    //   this.props.onSuccessRegister()
    // }).catch(function(error) {
    //     switch(error.code){

    //       case "EMAIL_TAKEN":
    //         alert("The new user account cannot be created because the email is already in use.");
    //       break;

    //       case "INVALID_EMAIL":
    //         alert("The specified email is not a valid email.");
    //       break;

    //       default:
    //         alert("Error creating user:");
    //     }

      

    // });

  }
  render(){
    return(
       <View style={containerStyles.container}>
   
          <Text style={textStyles.subtitle} >Sign Up</Text>
          <ActivityIndicator animating = {true}
              opacity= {this.state.loaded ? 1:0}
              style = {containerStyles.activityIndicator} size = "large"
          />
          <TextInput placeholder='Username'
          style={inputStyles.emailInput}
          ></TextInput>

          <TextInput placeholder='Email'
          style={inputStyles.emailInput}
          onChangeText={(text)=> this.setState({email:text})}
          value={this.state.email}></TextInput>

          <TextInput placeholder='Password'
          style={inputStyles.passwordInput}
          secureTextEntry={true}
          onChangeText={(text)=>this.setState({password: text})}
          value={this.state.password}></TextInput>

          <ButtonInverted title='Register' onPress={this.signup.bind(this)} />

          <ButtonCustom onPress={this.props.onPress} title='Or go to Login' />

        </View>
    )
  }

}
AppRegistry.registerComponent('signup', () => signup);
export default Register;