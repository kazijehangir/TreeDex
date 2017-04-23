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

const emailChangeHandler = ev => {
  // console.log(ev.nativeEvent.text)
}
const passwordChangeHandler = ev => {
  // console.log(ev.nativeEvent.text)
}

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

export default ({ goBack, onPressSignIn }) => (
 <View style={containerStyles.container}>
   <Text style={textStyles.subtitle} >Welcome back! Please log-in below.</Text>
   <TextInput placeholder='Email'
    style={inputStyles.emailInput}
    onChange={emailChangeHandler}></TextInput>
   <TextInput placeholder='Password'
    style={inputStyles.passwordInput}
    secureTextEntry={true}
    onChange={passwordChangeHandler}></TextInput>
  <ButtonInverted title='Sign In' onPress={onPressSignIn} />
 </View>
)
