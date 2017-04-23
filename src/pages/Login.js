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
