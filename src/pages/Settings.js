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

export default ({onPressQuests, onPressNews}) => (
  <ScrollView style={containerStyles.explore}>
    <Text style={textStyles.header}>Explore</Text>
    <ButtonSquare onPress={onPressNews} title='Change Username'/>
    <ButtonSquare onPress={onPressQuests} title= 'Change Password'/>


    
    
  </ScrollView>
)
