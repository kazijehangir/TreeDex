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

export default ({onPressQuests, onPressNews}) => (
 <View style={containerStyles.container}>

  <Text style={textStyles.header}>Explore</Text>
  <ScrollView style={containerStyles.scrollView}>
      <Image source={require('../images/news1.jpg')}/>
      <Image source={require('../images/plant.jpg')}/>
  </ScrollView>
 </View>  
)
