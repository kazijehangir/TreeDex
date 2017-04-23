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

const usernameChangeHandler = ev => {
  // console.log(ev.nativeEvent.text)
}

const emailChangeHandler = ev => {
  // console.log(ev.nativeEvent.text)
}
const passwordChangeHandler = ev => {
  // console.log(ev.nativeEvent.text)
}

export default ({ onPress, goBack, onPressRegister }) => (
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

   <ButtonCustom onPress={onPress} title='Or go to Login' />
   <ButtonCustom onPress={goBack} title='Go Back' />
 </View>
)
