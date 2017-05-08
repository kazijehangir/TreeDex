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
import textStyles from '../styles/Text'
import ButtonCustom from '../components/ButtonCustom'
import ButtonSquare from '../components/ButtonSquare'

//If you gonna change this please put it somewhere back too!!!
// I put them back. - JK

export default ({onPressPass, onPressName}) => (

  <View style={{flexDirection: 'row', width: 360, height: 50, justifyContent: 'center'}} >
    <ScrollView style={containerStyles.explore}>
      <Text style={textStyles.header}>Settings</Text>
      <ButtonSquare onPress={onPressName} title='Change Email'/>
      <ButtonSquare onPress={onPressPass} title= 'Change Password'/>



      
    </ScrollView>
  </View>
)
