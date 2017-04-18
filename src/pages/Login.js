import React, { Component } from 'react';
import {
  Text,
  TextInput,
  Image,
  View,
} from 'react-native';

import ButtonCustom from '../components/ButtonCustom'
import inputStyles from '../styles/Input'
import containerStyles from '../styles/Container'
import textStyles from '../styles/Text'

const emailChangeHandler = ev => {
  console.log(ev.nativeEvent.text)
}
const passwordChangeHandler = ev => {
  console.log(ev.nativeEvent.text)
}

export default ({ goBack, onPressSignIn }) => (
 <View style={containerStyles.container}>
   <ButtonCustom title='Go Back' onPress={goBack} />
   <Text style={textStyles.subtitle1} >Welcome back! Please log-in below.</Text>
   <TextInput placeholder='Email'
    style={inputStyles.emailInput}
    onChange={emailChangeHandler}></TextInput>
   <TextInput placeholder='Password'
    style={inputStyles.passwordInput}
    secureTextEntry={true}
    onChange={passwordChangeHandler}></TextInput>
   <ButtonCustom title='Sign In' onPress={onPressSignIn} />
 </View>
)
