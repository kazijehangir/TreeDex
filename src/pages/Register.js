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

export default ({ onPress, goBack }) => (
 <View style={containerStyles.container}>
   <Text style={textStyles.title}>Register as a new user</Text>
   <ButtonCustom onPress={onPress} title='Or go to Login' />
   <ButtonCustom onPress={goBack} title='Go Back' />
 </View>
)
