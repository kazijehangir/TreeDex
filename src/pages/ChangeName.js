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
// import * as firebase from "firebase";
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
const passwordChangeHandler = ev => {
  state.pass = ev.nativeEvent.text
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
const onPressEmail = async (email, pass) => {
  // var cond = true
  loaded = false
  var user = Constants.firebase.auth().currentUser;

  user.updateEmail(email).then((userData) => {
    loaded = true
    console.log("Email Address Changed");
    alert('Your Email Address was changed!');
  }, (error) => {
    switch(error.code){
      case "EMAIL_TAKEN":
        alert("The new user account cannot be created because the email is already in use.");
      break;

      case "INVALID_EMAIL":
        alert("The specified email is not a valid email.");
      break;

      default:
        alert("Error changing Email:" + JSON.stringify(error));
    }
  })
}

export default ({onPress, goBack}) => (
 <View style={containerStyles.container}>
   <Header text="Email Change" loaded={loaded} />
   <Text style={textStyles.subtitle} >Change your Email</Text>

   <TextInput placeholder='New Email'
    style={inputStyles.emailInput}
    onChange={emailChangeHandler}></TextInput>



   <ButtonInverted title='Change Email' onPress={() => onPressEmail(state.email, state.pass)} />


 </View>
)
