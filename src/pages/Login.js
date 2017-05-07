import React, { Component } from 'react';
import {
  Text,
  TextInput,
  Image,
  View,
} from 'react-native';

import ButtonInverted from '../components/ButtonInverted'
import inputStyles from '../styles/Input'
import containerStyles from '../styles/Container'
import textStyles from '../styles/Text'
import * as firebase from "firebase";

var state = {}

const emailChangeHandler = ev => {
  state.email = ev.nativeEvent.text
}
const passwordChangeHandler = ev => {
  state.pass = ev.nativeEvent.text
}
//Mahnoor's Initialization
// Initialize Firebase
var config = {
  apiKey: "AIzaSyC-4zmR4cVvrezgDh0MxsnJA5awezVe5kk",
  authDomain: "treedex-8cb38.firebaseapp.com",
  databaseURL: "https://treedex-8cb38.firebaseio.com",
  projectId: "treedex-8cb38",
  storageBucket: "treedex-8cb38.appspot.com",
  messagingSenderId: "826678556599"
};
const firebaseApp = firebase.initializeApp(config);

// Initialize Firebase
 // var config = {
 //   apiKey: "AIzaSyB_lkRcCsN5y5jtCNE0sPUD-kb0rhQHYjE",
 //   authDomain: "treedex-4e602.firebaseapp.com",
 //   databaseURL: "https://treedex-4e602.firebaseio.com",
 //   projectId: "treedex-4e602",
 //   storageBucket: "treedex-4e602.appspot.com",
 //   messagingSenderId: "1031584636567"
 // };
 // firebase.initializeApp(config);
 //TODO-Mahnoor: add progress bar 


 // TODO: Jehangir: Tab button to move to password
const onPressLogin = async (email, pass, onSuccess) => {
  var cond = true
  try {
    await firebase.auth()
      .signInWithEmailAndPassword(email, pass);
    console.log("Logged In!");
    onSuccess()
  } catch (error) {
    console.log(error.toString())
  }
  // if (cond) {
  //   onSuccess()
  // } else {
  //   // display error
  // }
}

export default ({onSuccess }) => (
 <View style={containerStyles.container}>
   <Text style={textStyles.subtitle} >Welcome back! Please log-in below.</Text>
   <TextInput placeholder='Email'
    style={inputStyles.emailInput}
    onChange={emailChangeHandler}></TextInput>
   <TextInput placeholder='Password'
    style={inputStyles.passwordInput}
    secureTextEntry={true}
    onChange={passwordChangeHandler}></TextInput>
  <ButtonInverted title='Sign In'
    onPress={() => onPressLogin(state.email, state.pass, onSuccess)}
  />
 </View>
)
