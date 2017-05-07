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
import * as firebase from "firebase";

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

const onPressRegister = async (email, pass, onSuccessRegister) => {
  var cond = true
  try {
    if(cond){
      onSuccessRegister()
    }
    // await firebase.auth()
    //   .createUserWithEmailAndPassword(email, pass);
    //   console.log("Account created");
    //   onSuccessRegister()
  } catch (error) {
    console.log(error.toString())
  }
}
export default ({onPress, goBack, onSuccessRegister}) => (
 <View style={containerStyles.container}>
   
   <Text style={textStyles.subtitle} >Your Username will be used to login</Text>

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
)
