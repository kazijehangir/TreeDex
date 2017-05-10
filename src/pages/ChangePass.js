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
  BackAndroid
} from 'react-native';

import containerStyles from '../styles/Container'
import inputStyles from '../styles/Input'
import textStyles from '../styles/Text'
import ButtonCustom from '../components/ButtonCustom'
import ButtonInverted from '../components/ButtonInverted'
import Constants from '../Constants'
import Header from '../components/header'
var state = {}

const usernameChangeHandler = ev => {
  state.username = ev.nativeEvent.text
  // console.log(ev.nativeEvent.text)
}

const emailChangeHandler = ev => {
  state.email = ev.nativeEvent.text
  // console.log(ev.nativeEvent.text)
}
const password1ChangeHandler = ev => {
  state.pass1 = ev.nativeEvent.text
  // console.log(ev.nativeEvent.text)
}

const password2ChangeHandler = ev => {
  state.pass2 = ev.nativeEvent.text
  // console.log(ev.nativeEvent.text)
}
// var config = {
//   apiKey: "AIzaSyC-4zmR4cVvrezgDh0MxsnJA5awezVe5kk",
//   authDomain: "treedex-8cb38.firebaseapp.com",
//   databaseURL: "https://treedex-8cb38.firebaseio.com",
//   projectId: "treedex-8cb38",
//   storageBucket: "treedex-8cb38.appspot.com",
//   messagingSenderId: "826678556599"
// };
// const firebaseApp = firebase.initializeApp(config);
var loaded = true
const onPressPass = async (pass1, pass2) => {
  if(pass1 === pass2){
  loaded = false
  var user = Constants.firebase.auth().currentUser;
  user.updatePassword(pass1).then((userData) => {
    loaded = true
    console.log("Pasword Changed");
    alert('Your Password was changed!');
  }, (error) => {
    switch(error.code){

      case "INVALID_PASSWORD":
        alert("The specified password is not valid.");
      break;

      default:
        alert("Error changing Password:" + JSON.stringify(error));
    }
  })
} else{
    alert("The passwords don't match. Please re-enter.")
  }
}

export default ({onPress, goBack}) => (
 <View style={containerStyles.container}>
   <Header text="Change Password" loaded={loaded} />
   <Text style={textStyles.subtitle} >Change Password</Text>


   <TextInput placeholder='Type New Password'
    style={inputStyles.passwordInput}
    secureTextEntry={true}
    onChange={password1ChangeHandler}></TextInput>

   <TextInput placeholder='Re-type New Password'
    style={inputStyles.passwordInput}
    secureTextEntry={true}
    onChange={password2ChangeHandler}></TextInput>

   <ButtonInverted title='Change Password' onPress={() => onPressPass(state.pass1, state.pass2)} />


 </View>
)
