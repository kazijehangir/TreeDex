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
   <Text style={textStyles.title}>This is the explore page</Text>
   <ButtonCustom onPress={console.log('button pressed')} title='sample button' />
   <View style={{flex: 1, flexDirection: 'row'}}>
      <ButtonSquare onPress={onPressQuests} title='QUESTS' />
      <ButtonSquare onPress={onPressNews} title='NEWS' />
    </View>
 </View>  
)
